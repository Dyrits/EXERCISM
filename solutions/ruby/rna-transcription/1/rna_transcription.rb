module Complement
  RNA_TRANSCRIPTION = { G: "C", C: "G", T: "A", A: "U"}
  def self.of_dna(string)
    string.chars.map {|letter|
      RNA_TRANSCRIPTION[letter.to_sym]
    }.join
  end
end

