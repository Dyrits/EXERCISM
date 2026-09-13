def to_rna(dna_strand):
    index = 0
    rna_strand = list(dna_strand)
    for letter in dna_strand:
        if letter == "G":
            rna_strand[index] = "C"
        elif letter == "C":
            rna_strand[index] = "G"
        elif letter == "T":
            rna_strand[index] = "A"
        elif letter == "A":
            rna_strand[index] = "U"
        index += 1
    return "".join(rna_strand)