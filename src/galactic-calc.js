export function Years(age, planet) {
  this.age = age;
  this.planet = planet;
}

Years.prototype.calculateAge = function() {
  let ageDays = this.age * 365;
  console.log(ageDays);
  if (this.planet === "mercury") {
    let mercAge = Math.floor(ageDays / 88);
    // } else if (this.planet === "venus") {
    //   return this.age / 226;
    // }
    return mercAge;
  }
  console.log("conditional not reached.");
};



// age * 365 /
//   days in the year on the planet
