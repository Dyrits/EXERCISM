class SpaceAge
  def initialize(seconds)
    @seconds = seconds.to_f
    @years_on_earth = @seconds / 31557600
  end

  ORBITAL_PERIODS = {
      earth: 1,
      mercury: 0.2408467,
      venus: 0.61519726,
      mars: 1.8808158,
      jupiter: 11.862615,
      saturn: 29.447498,
      uranus: 84.016846,
      neptune: 164.79132
  }

  ORBITAL_PERIODS.each_pair { |planet, earth_years|
    define_method(:"on_#{planet}") {
      (@years_on_earth / earth_years).round(2)
    }
  }
end