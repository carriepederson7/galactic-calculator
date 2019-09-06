import { Years } from './../src/galactic-calc.js';

describe('Years', function() {
  it('calculate age based on chosen planet', function() {
    let age = new Years(40, "mercury");
    expect(age.calculateAge()).toEqual(165);
  });
  // it('should find the day based the date', function() {
  //   var date = new Date(1,5,32);
  //   expect(date.findDay()).toEqual(2);
  // });
});
