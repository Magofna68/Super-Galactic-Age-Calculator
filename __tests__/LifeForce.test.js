import Age from '../src/age.js'

describe('lifeForceConversion', () => {
  let myAge;

  test('should return the planetary calculations (mars) above the average life', () => {
    myAge = new Age(51, 70)
    expect(myAge.lifeForceConversion('mars')).toBeDefined();
  })

  test('should return the planetary calculations (mercury) above the average life', () => {
    myAge = new Age(51, 70)
    expect(myAge.lifeForceConversion('mercury')).toBeDefined();
  })

  test('should return the planetary calculations (venus) above the average life', () => {
    myAge = new Age(51, 70)
    expect(myAge.lifeForceConversion('venus')).toBeDefined();
  })

  test('should return the planetary calculations (venus) above the average life', () => {
    myAge = new Age(51, 70)
    expect(myAge.lifeForceConversion('jupiter')).toBeDefined();
  })

  test('should refactor the switch statement to include life left in martian planetary years', () => {
    myAge = new Age(51, 70)
    expect(myAge.lifeForceConversion('mars')).toBeDefined();
  })

  test('should refactor the switch statement to include "life remaining" in mercury years', () => {
    myAge = new Age(51, 70)
    expect(myAge.lifeForceConversion('mercury')).toEqual(79.16666666666667);
  })

  test('should refactor the switch statement to include "life remaining" in venus years', () => {
    myAge = new Age(51, 70)
    expect(myAge.lifeForceConversion('venus')).toEqual(30.64516129032258);
  })

  test('should refactor the switch statement to include "life remaining" in jupiter years', () => {
    myAge = new Age(51, 70)
    expect(myAge.lifeForceConversion('jupiter')).toEqual(1.6020236087689714);
  })

  test('should return remainder of life in planetary years for Mars', () => {
    myAge = new Age(51, 70)
    expect(myAge.lifeForceConversion('mars')).toEqual(10.106382978723405);
  })

  test('should return a value reflecting how much older the individual is over the planetary average; Mars', () => {
    myAge = new Age(90, 70)
    expect(myAge.lifeForceConversion('mars')).toEqual(10.638297872340425);
  })

  test('should return a value reflecting how much older the individual is over the planetary average; mercury', () => {
    myAge = new Age(90, 70)
    expect(myAge.lifeForceConversion('mercury')).toEqual(83.33333333333334);
  })

  test('should return a value reflecting how much older the individual is over the planetary average; venus', () => {
    myAge = new Age(90, 70)
    expect(myAge.lifeForceConversion('venus')).toEqual(32.25806451612903);
  })

  test('should return a value reflecting how much older the individual is over the planetary average; jupiter', () => {
    myAge = new Age(90, 70)
    expect(myAge.lifeForceConversion('jupiter')).toEqual(1.6863406408094437);
  })

  test('should return a sentence prompting the user to accurately type in correct planet in lowercase letters', () => {
    myAge = new Age(90, 70)
    expect(myAge.lifeForceConversion('orange')).toBeUndefined();
  })
})