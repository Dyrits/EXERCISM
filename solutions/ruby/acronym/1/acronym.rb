module Acronym
  def self.abbreviate(string)
    string.scan(/(\A\w|(?<=\s|-)\w)/).flatten.join.upcase
  end
end