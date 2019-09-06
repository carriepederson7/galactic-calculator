export function Years(age, planet, expectedAge) {
  this.age = age;
  this.planet = planet;
  this.expectedAge = expectedAge;
}

Years.prototype.calculateAge = function() {
  let ageDays = this.age * 365;
  if (this.planet === "mercury") {
    return Math.floor(ageDays / 88);
  } else if (this.planet === "venus") {
    return Math.floor(ageDays / 226);
  } else if (this.planet === "mars") {
    return Math.floor(ageDays / 686);
  } else if (this.planet === "jupiter") {
    return Math.floor(ageDays / 4329);
  }
};


Years.prototype.yearsToLive = function() {
  let yearsLeft = this.expectedAge - this.age
  let daysLeft =  yearsLeft * 365;
  if (this.planet === "mercury") {
    return Math.floor(daysLeft / 88);
  } else if (this.planet === "venus") {
    return Math.floor(daysLeft / 226);
  } else if (this.planet === "mars") {
    return Math.floor(daysLeft / 686);
  } else if (this.planet === "jupiter") {
    return Math.floor(daysLeft / 4329);
  }

};




// age * 365 /
//   days in the year on the planet
