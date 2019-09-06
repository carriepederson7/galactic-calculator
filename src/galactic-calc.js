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
  let daysLeft = yearsLeft * 365;
  if (this.planet === "mercury") {
    return Math.floor(daysLeft / 88);
  } else if (this.planet === "venus") {
    return Math.floor(daysLeft / 226);
  } else if (this.planet === "mars") {
    return Math.floor(daysLeft / 686);
  } else if (this.planet === "jupiter") {
    return Math.floor(daysLeft / 4329);
  }
}

Years.prototype.goal = function() {
  let daysExceeded = 0
  if (this.expectedAge > this.age) {
    daysExceeded = (this.expectedAge - this.age) * 365
  }
  if (this.planet === "mercury") {
    let goalExceeded = daysExceeded / 88
    return goalExceeded.toPrecision(2);

} else if (this.planet === "venus") {
  let goalExceeded = daysExceeded / 226
  return goalExceeded.toPrecision(2);
} else if (this.planet === "mars") {
  let goalExceeded = daysExceeded / 686
  return goalExceeded.toPrecision(2);
} else if (this.planet === "jupiter") {
  let goalExceeded = daysExceeded / 4329
  return goalExceeded.toPrecision(2);
}
};
