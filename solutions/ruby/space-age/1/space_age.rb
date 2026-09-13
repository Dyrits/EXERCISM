class SpaceAge
  def initialize(seconds)
    @seconds = seconds.to_f
    @years_on_earth = @seconds / 31557600
  end

  def on_earth
    @years_on_earth.round(2)
  end

  def on_mercury
    (@years_on_earth / 0.2408467).round(2)
  end

  def on_venus
    (@years_on_earth / 0.61519726).round(2)
  end

  def on_mars
    (@years_on_earth / 1.8808158).round(2)
  end

  def on_jupiter
    (@years_on_earth / 11.862615).round(2)
  end

  def on_saturn
    (@years_on_earth / 29.447498).round(2)
  end

  def on_uranus
    (@years_on_earth / 84.016846).round(2)
  end

  def on_neptune
    (@years_on_earth / 164.79132).round(2)
  end
end