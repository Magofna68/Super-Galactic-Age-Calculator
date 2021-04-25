import Age from '../src/age.js'

describe('Age', () => {
  let myAge;
  beforeEach(() => {
    myAge = new Age(51, 70)
  })

  test('Should properly create an object with Age constructor', () => {
    expect(myAge).toBeDefined();
  })

  test('Should properly create an object with an age property', () => {
    expect(myAge.age).toBeDefined();
  })

  test('Should properly create an object with an average life property', () => {
    expect(myAge.avgLife).toBeDefined();
  })

  test('Should properly create a mars property', () => {
    expect(myAge.mars).toBeDefined();
  })

  test('Should properly take in a value and convert value to mars years', () => {
    expect(myAge.mars).toEqual(27.127659574468087)
  })

  test('Should convert earth years into mercury years', () => {
    expect(myAge.mercury).toEqual(212.5);
  })

  test('should convert earth years into venus years', () => {
    expect(myAge.venus).toEqual(82.25806451612904);
  })

  test('should convert earth years into jupiter years', () => {
    expect(myAge.jupiter).toEqual(4.3001686340640815);
  })

  // // _______________________________________________
  //   // test('implement a switch statement to return the age of an ind in mercury years', () => {
  //   //   myAge.ageConversion('mars');
  //   //   expect(myAge.ageConversion('mars')).toBeDefined();
  //   // })
  // //---------------------------------------------------


  test('should convert estimated remainder of life (RoL) into Martian years', () => {
    expect(myAge.remainderMars).toEqual(10.106382978723405);
  })

  test('should convert estimated RoL into mercury years', () => {
    expect(myAge.remainderMercury).toEqual(79.16666666666667);
  })

  test('should convert estimated RoL into venus years', () => {
    expect(myAge.remainderVenus).toEqual(30.64516129032258);
  })

  test('should convert estimated RoL into jupiter years', () => {
    expect(myAge.remainderJupiter).toEqual(1.6020236087689714);
  })

  test('should return the planetary calculations (mars) above the average life', () => {
    expect(myAge.lifeForceConversion('mars')).toBeDefined();
    console.log(myAge.lifeForceConversion('mars'))
  })

  test('should return the planetary calculations (mercury) above the average life', () => {
    expect(myAge.lifeForceConversion('mercury')).toBeDefined();
  })

  test('should return the planetary calculations (venus) above the average life', () => {
    expect(myAge.lifeForceConversion('venus')).toBeDefined();
  })

  test('should return the planetary calculations (venus) above the average life', () => {
    expect(myAge.lifeForceConversion('jupiter')).toBeDefined();
  })

  test('should refactor the switch statement to include life left in martian planetary years', () => {
    expect(myAge.lifeForceConversion('mars')).toBeDefined();
  })

  test('should refactor the switch statement to include "life remaining" in mercury years', () => {
    expect(myAge.lifeForceConversion('mercury')).toEqual(79.166);
  })

  test('should refactor the switch statement to include "life remaining" in venus years', () => {
    expect(myAge.lifeForceConversion('venus')).toEqual(30.645);
  })

  test('should refactor the switch statement to include "life remaining" in jupiter years', () => {
    expect(myAge.lifeForceConversion('jupiter')).toEqual(1.602);
  })

  test('should return remainder of life in planetary years for Mars', () => {
    expect(myAge.lifeForceConversion('mars')).toEqual(10.638297872340425);
  })

  test('should return how much older the individual is over the planetary average for Mars', () => {
    expect(myAge.lifeForceConversion('mars')).toEqual();
  })
})