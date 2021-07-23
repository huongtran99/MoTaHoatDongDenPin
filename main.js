let battery = new Battery();
battery.setEnergy(10);

let flashLamp = new FlashLamp();
flashLamp.setBattery(battery);

document.write("Battery info:" + flashLamp.getBattery() + "<br/>");
flashLamp.light();

document.write("Turn on<br/>")
flashLamp.turnOn();
battery.decreaseEnergy();
document.write("Battery info:" + flashLamp.getBattery() + "<br/>");

document.write("Turn off<br/>")
flashLamp.turnOff();
flashLamp.light();