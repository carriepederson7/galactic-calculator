import { Years } from './../src/galactic-calc.js';

describe('Years', function() {
  it('calculate age on mercury', function(){
    let age = new Years(40, "mercury");
    console.log("age");
    expect(age.calculateAge()).toEqual(165);
  });
  it('calculate age on venus', function() {
    let age = new Years(40, "venus");
    expect(age.calculateAge()).toEqual(64);
  });
  it('calculate age on mars', function() {
    let age = new Years(40, "mars");
    expect(age.calculateAge()).toEqual(21);
  });
  it('calculate age on jupiter', function() {
    let age = new Years(40, "jupiter");
    expect(age.calculateAge()).toEqual(3);
  });
});
