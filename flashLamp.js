class FlashLamp {
    battery;
    status;

    constructor(battery, status) {
        this.battery = battery;
        this.status = status;
    }

    getBattery() {
        return this.battery.getEnergy();
    }

    setBattery(value) {
        this.battery = value;
    }

    light() {
        if (this.status) {
            alert("Lighting");
        } else {
            alert("Not lighting");
        }
    }

    turnOn() {
        this.status = true;
    };

    turnOff() {
        this.status = false;
    }

}