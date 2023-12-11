class ElectricalAppliance {
    constructor (power, name, weight, plug, test) {
        this.power = power
        this.name = name,
        this.weight = weight,
        this.plug = plug;
    }

    test = 20;

    getPower() {
        return `Power of the electric device ${power} kilowatt`;
    }

    getVolage(){
        return `The device is connected to ${voltage} volts`;
    }
}

class HandTools extends ElectricalAppliance{
    constructor (power, name, weight, operatingMode, plug, test) {
        super (power, name, weight, plug, test);
        this.operatingMode = operatingMode;
    }

    getPower() {
        return `Power of the hand tools ${this.power} kilowatt`;
    }

    getVolage(){
        return `The device is connected to ${this.voltage} volts`;
    }
}

class HouseholdAppliance extends ElectricalAppliance {
    constructor (power, name, weight, purpose, plug) {
        super (power, name, weight, plug);
        this.purpose = purpose;
    }

    getPower() {
        return `Power of the household appliance ${this.power} kilowatt`;
    }

    getVolage(){
        return `The device is connected to ${this.voltage} volts`;
    }
}

const Drill = new HandTools (2, 'drill', 2000, 'manual', false);

const WashingMachine = new HouseholdAppliance (4, 'washing machine', 4000, 'laundry', true);

/* включение в розетку */
/* Drill.plug = true; */
  
function totalPowerConsumption (obj1, obj2) {
    let totalPower = 0;
    if (obj1.plug == true) {
      totalPower += obj1.power;
    }
    if (obj2.plug == true) {
      totalPower += obj2.power;
    }

    console.log(`Total power of all devices ${totalPower} kilowatt`);
}
  
  
totalPowerConsumption(Drill, WashingMachine);