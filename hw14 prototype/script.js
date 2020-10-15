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
    if (this.health !== this.maxHealth) {
        this.health = this.maxHealth
    }
};

Unit.prototype.clone = function () {
    const obj = {};

    obj.type = this.type;
    obj.health = this.health;
    obj.maxHealth = this.maxHealth;
    obj.maxDistance = this.maxDistance;

    return obj;
};

/*  function Army(defaultUnits) {
    this.units = [];
    if (defaultUnits) this.combineUnits(defaultUnits);
 }
 
 Army.prototype.isReadyToMove;
 Army.prototype.isReadyToFight;
 Army.prototype.restore;
 Army.prototype.getReadyToMoveUnits;
 Army.prototype.combineUnits;
 Army.prototype.cloneUnit; */

const warrior = new Unit("private", 66, 100, 50);


