import { Age } from '../src/age.js'

describe('Age', () => {
  let myAge;
  beforeEach(() => {
    myAge = new Age(80, 70)
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
    expect(myAge.mars).toEqual(18.799999999999997)
  })

  test('Should convert earth years into mercury years', () => {
    expect(myAge.mercury).toEqual(2.4);
  })

  test('should convert earth years into venus years', () => {
    expect(myAge.venus).toEqual(6.2);
  })

  test('should convert earth years into jupiter years', () => {
    expect(myAge.jupiter).toEqual(118.6);
  })

  test('should convert estimated remainder of life (RoL) into Martian years', () => {
    expect(myAge.remainderMars).toEqual(31.914893617021278);
  })

  test('should convert estimated RoL into mercury years', () => {
    expect(myAge.remainderMercury).toEqual(250);
  })

  test('should convert estimated RoL into venus years', () => {
    expect(myAge.remainderVenus).toEqual(96.7741935483871);
  })

  test('should convert estimated RoL into jupiter years', () => {
    expect(myAge.remainderJupiter).toEqual(5.059021922428331);
  })

  // test('should return average age - user age', () => {
  //   expect(myAge.beatenTheOdds).toBeDefined();
  // })

  test('should return the planetary calculations (mars) above the average life', () => {
    expect(myAge.yearsConversion('mars')).toBeDefined();
    console.log(myAge.yearsConversion('mars'))
  })

  test('should return the planetary calculations (mercury) above the average life', () => {
    expect(myAge.yearsConversion('mercury')).toBeDefined();
    console.log(myAge.yearsConversion('mercury'))
  })

  test('should return the planetary calculations (venus) above the average life', () => {
    expect(myAge.yearsConversion('venus')).toBeDefined();
    console.log(myAge.yearsConversion('venus'))
  })
})