module Acronym
  def self.abbreviate(string)
    string.scan(/(\A\w|(?<=\s|-)\w)/).join.upcase
  end
end