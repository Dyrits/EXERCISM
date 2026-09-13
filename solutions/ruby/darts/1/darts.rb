class Darts
  def initialize(x, y)
    @x_coordinate = x
    @y_coordinate = y
  end
  def score()
    distance = Math.hypot(@x_coordinate, @y_coordinate)
    distance < 1 ? 10 : distance < 5 ? 5 : distance < 10 ? 1 : 0;
  end
end