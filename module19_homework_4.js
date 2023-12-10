
function ElectricalAppliance (power, name, weight, plug) {
  this.power = power
  this.name = name,
  this.weight = weight,
  this.plug = plug
}


ElectricalAppliance.prototype.getPower = function(power) {
  console.log (`Power of the electric device ${power} kilowatt`)
}

ElectricalAppliance.prototype.getVolage = function(voltage) {
  console.log (`The device is connected to ${voltage} volts`)
}



function HandTools (power, name, weight, operatingMode, plug) {
  this.power = power
  this.name = name,
  this.weight = weight,
  this.operatingMode = operatingMode,
  this.plug = plug
}

function HouseholdAppliance (power, name, weight, purpose, plug) {
  this.power = power
  this.name = name,
  this.weight = weight,
  this.purpose = purpose,
  this.plug = plug
}


HouseholdAppliance.prototype.getPower = function(power) {
  console.log (`Power of the household appliance ${power} kilowatt`)
}

HouseholdAppliance.prototype.getVolage = function(voltage) {
  console.log (`The device is connected to ${voltage} volts`)
}

HandTools.prototype.getPower = function(power) {
  console.log (`Power of the hand tools ${power} kilowatt`)
}

HandTools.prototype.getVolage = function(voltage) {
  console.log (`The device is connected to ${voltage} volts`)
}

HandTools.prototype = new ElectricalAppliance ()
HouseholdAppliance.prototype = new ElectricalAppliance ()

const Drill = new HandTools (2, 'drill', 2000, 'manual', false)

const WashingMachine = new HouseholdAppliance (4, 'washing machine', 4000, 'laundry', true)

/* console.log(Drill)

Drill.getPower(Drill.power) */

Drill.plug = true

console.log(Drill)


function totalPowerConsumption (obj1, obj2) {
  let totalPower = 0
  if (obj1.plug == true) {
    totalPower += obj1.power
    console.log(totalPower)
  }
  if (obj2.plug == true) {
    totalPower += obj2.power
    console.log(totalPower)
  }
  console.log(`Total power of all devices ${totalPower} kilowatt`)
}


totalPowerConsumption(Drill, WashingMachine)
