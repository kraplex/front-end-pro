class Unit {
    constructor(type, health, maxHealth, maxDistance) {
        this.type = type;
        this.health = health;
        this.maxHealth = maxHealth;
        this.maxDistance = maxDistance;
    }

    isReadyToMove(distance) {
        return this.maxDistance >= distance;
    }

    isReadyToFight() {
        return this.health >= this.maxHealth / 2
    }

    restore() {
        this.health = this.maxHealth;
    }

    clone() {
        return new Unit(this.type, this.health, this.maxHealth, this.maxDistance);
    };

}

const smallArmy = [
    new Unit("general", 49, 100, 10),
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

class Army {
    constructor(defaultUnits) {
        this.army = [];
        if (defaultUnits) this.combineUnits(defaultUnits);
    }

    combineUnits(arrayOfUnits) {
        return this.army = this.army.concat(arrayOfUnits);
    }

    isReadyToMove(distance) {
        for (const unit of this.army) {
            const isUnitReadyToMove = unit.isReadyToMove(distance);
            if (!isUnitReadyToMove) {
                return false;
            }
        } return true
    }

    isReadyToFight() {
        for (const unit of this.army) {
            const isUnitReadyToFight = unit.isReadyToFight();
            if (!isUnitReadyToFight) {
                return false;
            }
        } return true
    }

    restore() {
        for (const unit of this.army) {
            unit.restore();
        }
    }

    getReadyToMoveUnits(distance) {
        const getReadyToMoveUnits = new Array;
        for (const unit of this.army) {
            const isReadyToMoveUnit = unit.isReadyToMove(distance)
            if (isReadyToMoveUnit) {
                getReadyToMoveUnits.push(unit)
            }
        } return getReadyToMoveUnits
    }

    cloneUnit(number) {
        return this.army[number - 1].clone();
    }

}
