class Lasagna
{
    public int ExpectedMinutesInOven () => 40;
    public int RemainingMinutesInOven (int minutes) => this.ExpectedMinutesInOven() - minutes;
	public int PreparationTimeInMinutes (int layers, int minutesPerLayer) => layers * minutesPerLayer;
	public int PreparationTimeInMinutes (int layers) => this.PreparationTimeInMinutes(layers, 2);
	public int ElapsedTimeInMinutes (int layers, int minutesInOven) => this.PreparationTimeInMinutes(layers) + minutesInOven;
}
