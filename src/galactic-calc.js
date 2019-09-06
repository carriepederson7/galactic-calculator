export function Years(age, planet) {
  this.age = age;
  this.planet = planet;
}

Years.prototype.calculateAge = function() {
  let ageDays = this.age * 365;
  console.log(ageDays);
  if (this.planet === "mercury") {
    return Math.floor(ageDays / 88);
  } else if (this.planet === "venus") {
    return Math.floor(ageDays / 226);
  } else if (this.planet === "mars") {
    return Math.floor(ageDays / 686);
  } else if (this.planet === "jupiter") {
    return Math.floor(ageDays / 4329);
  }


  console.log("conditional not reached.");
};



// age * 365 /
//   days in the year on the planet
