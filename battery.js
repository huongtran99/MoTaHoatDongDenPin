class Battery {
    energy;

    constructor(energy) {
        this.energy = energy;
    }

    getEnergy() {
        return this.energy;
    }

    setEnergy(value) {
        this.energy = value;
    }

    decreaseEnergy() {
        if (this.energy > 0) {
            this.energy--;
        }
    }
}