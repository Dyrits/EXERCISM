class Darts {
    double x, y;

    Darts(double x, double y) {
        this.x = x;
        this.y = y;
    }

    int score() {
        double distance = Math.hypot(x, y);
        return distance <= 1 ? 10 : distance <= 5 ? 5 : distance <= 10 ? 1 : 0;
    }

}

