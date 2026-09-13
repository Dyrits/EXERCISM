const RNA_TRANSCRIPTION = { G: "C", C: "G", T: "A", A: "U"};

export const toRna = string => string.split("").map(letter => RNA_TRANSCRIPTION[letter]).join("");
