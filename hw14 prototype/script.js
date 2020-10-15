function Unit(type, health, maxHealth, maxDistance) {
    this.type = type;
    this.health = health;
    this.maxHealth = maxHealth;
    this.maxDistance = maxDistance;
}

Unit.prototype.isReadyToMove = function (distance) {
    return this.maxDistance >= distance
};

Unit.prototype.isReadyToFight = function () {
    return this.health >= this.maxHealth / 2
};

Unit.prototype.restore = function () {
    this.health = this.maxHealth
};

Unit.prototype.clone = function () {
    const clonedUnit = {};

    clonedUnit.type = this.type;
    clonedUnit.health = this.health;
    clonedUnit.maxHealth = this.maxHealth;
    clonedUnit.maxDistance = this.maxDistance;

    return clonedUnit;
};

/* const unit = new Unit("private", 49, 100, 10);
console.log(unit);
unit.restore();
console.log(unit); */

const units = [
    new Unit("private", 49, 100, 10),
    new Unit("private", 50, 100, 20),
    new Unit("officer", 65, 100, 30),
    new Unit("officer", 70, 100, 40),
    new Unit("officer", 75, 100, 50),
    new Unit("private", 80, 100, 60),
    new Unit("private", 85, 100, 70),
    new Unit("officer", 90, 100, 80),
    new Unit("private", 95, 100, 90),
    new Unit("officer", 100, 100, 100)
];

function Army(defaultUnits) {
    this.units = [];
    if (defaultUnits) this.combineUnits(defaultUnits);
}

Army.prototype.isReadyToMove = function (distance) {
    for (const unit of this.units) {
        const isUnitReadyToMove = unit.isReadyToMove(distance);
        if (!isUnitReadyToMove) {
            return false;
        }
    } return true
}

Army.prototype.isReadyToFight = function () {
    for (const unit of this.units) {
        const isUnitReadyToFight = unit.isReadyToFight();
        if (!isUnitReadyToFight) {
            return false;
        }
    } return true
}

Army.prototype.restore = function () {
    for (const unit of this.units) {
        unit.health = unit.maxHealth
    }
}
/* console.log(army);////

army.restore();//////Не могу понять почему метод объекта отрабатывает до того как его вызвали

console.log(army);//// */

Army.prototype.getReadyToMoveUnits = function (distance) {
    const getReadyToMoveUnits = new Array;
    for (const unit of this.units) {
        const isReadyToMoveUnit = unit.isReadyToMove(distance)
        if (isReadyToMoveUnit) {
            getReadyToMoveUnits.push(unit)
        }
    } return getReadyToMoveUnits
}

Army.prototype.combineUnits = function (arrayOfUnits) {
    return this.units = this.units.concat(arrayOfUnits);
}

Army.prototype.cloneUnit = function (number) {
    return this.units[number-1].clone();
}

const army = new Army(units);
