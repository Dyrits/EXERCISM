// Set a list of expressions to match the Markdown syntax for the types and styles.
const expressions = {
  types: [
    { tag: "h1", pattern: /^#(?!#)(.*)/ },
    { tag: "h2", pattern: /^##(?!#)(.*)/ },
    { tag: "h3", pattern: /^###(?!#)(.*)/ },
    { tag: "h4", pattern: /^####(?!#)(.*)/ },
    { tag: "h5", pattern: /^#####(?!#)(.*)/ },
    { tag: "h6", pattern: /^######(?!#)(.*)/ },
    { tag: "li", pattern: /^\*(.*)/ },
    { tag: "p", pattern: /(.*)$/ }
  ],
  styles: [
    { tag: "strong", pattern: /__(.*?)__/g },
    { tag: "em", pattern: /_(.*?)_/g }
  ]
};

function wrap(text, tag) {
  return `<${tag}>${text}</${tag}>`;
}

export function parse(markdown) {
  const lines = markdown.split("\n");
  const html = lines.reduce((html, line) => {
    // Find the first expression that matches the line.
    const { tag, pattern } = expressions.types.find(({ pattern }) => pattern.test(line));
    // Extract the content from the line.
    let [match, content] = line.match(pattern);
    !content && (content = match);
    // Apply styles to the content (for bold and italic).
    for (const style of expressions.styles) {
      content = content.replace(style.pattern, (_, content) => wrap(content, style.tag));
    }
    if (tag === "li") {
      // Add the content as a list item in an unordered list to the html array and return it.
      return html.concat(wrap(wrap(content.trim(), tag), "ul"));
    } else {
      // Add the content to the html array and return it.
      return html.concat(wrap(content.trim(), tag));
    }
  }, String());
  // Replace the unordered list closing and opening tags (which are following each other) with an empty string.
  return html.replace(/<\/ul><ul>/g, "");
}