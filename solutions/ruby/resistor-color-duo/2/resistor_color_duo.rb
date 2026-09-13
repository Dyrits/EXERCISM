module ResistorColorDuo
  COLORS = %w[black brown red orange yellow green blue violet grey white].freeze
  def self.value(color_pair)
    color_pair.map {|element| COLORS.index(element)}.first(2).join.to_i
  end
end


