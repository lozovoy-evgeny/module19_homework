function propertySearch (propertyName, obj) {
    for (let key in obj) {
        if (key == propertyName) {
            return console.log(true);
        }   
    }
    return console.log(false);
}

/* function ElectricalAppliance (power, name) {
    this.power = power;
    this.name = name;
}

const Drill = new ElectricalAppliance (2, "Drill");

propertySearch ("power", Drill); */