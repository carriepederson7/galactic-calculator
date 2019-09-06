export function Years(planet) {
  this.age = 0;
  this.planet = planet;
}

Years.prototype.calculateAge = function() {
  let ageDays = this.age * 365;
  if (this.planet === "mercury") {
    return Math.floor(ageDays / 88);
  } else if (this.planet === "venus") {
    return this.age / 226;
  }
};



// age * 365 /
//   days in the year on the planet
