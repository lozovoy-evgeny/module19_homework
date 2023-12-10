function ownProperties (obj) {
    for (const [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`);
    }
}

/* function ElectricalAppliance (power, name) {
    this.power = power;
    this.name = name;
}

const Drill = new ElectricalAppliance (2, "Drill");

ownProperties(Drill); */