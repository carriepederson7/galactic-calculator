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
  it('calculate years left on mercury', function() {
    let age = new Years(40, "mercury", 85);
    console.log();
    expect(age.yearsToLive()).toEqual(186);
  });
  it('calculate years left on venus', function() {
    let age = new Years(40, "venus", 85);
    console.log();
    expect(age.yearsToLive()).toEqual(72);
  });
  it('calculate years left on mars', function() {
    let age = new Years(40, "mars", 85);
    console.log();
    expect(age.yearsToLive()).toEqual(23);
  });
  it('calculate years left on jupiter', function() {
    let age = new Years(40, "jupiter", 85);
    console.log();
    expect(age.yearsToLive()).toEqual(3);
  });
});
