const colors: string[] = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

export function decodedValue(duo: string[]): number {
  return parseInt(duo.map(color => colors.indexOf(color)).slice(0, 2).join(''));
}
