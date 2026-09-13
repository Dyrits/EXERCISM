module ResistorColorDuo
  COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]
  def self.value(colorPair)
    "#{COLORS.index(colorPair[0])}#{COLORS.index(colorPair[1])}".to_i
  end
end

