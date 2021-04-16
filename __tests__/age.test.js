import { Age } from '../src/age.js'

describe('Age', () => {
  let myAge;
  beforeEach(() => {
    myAge = new Age(10, 70)
  })

  test('Should properly create an object with Age constructor', () => {
    expect(myAge).toBeDefined();
  })

  test('Should properly create an object with an age property', () => {
    expect(myAge.age).toBeDefined();
  })

  test('Should properly create an object with a life property', () => {
    expect(myAge.life).toBeDefined();
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

  test('should convert estimated remainder of life (RoL) into Marsian years', () => {
    expect(myAge.remainderMars).toEqual(112.8);
  })

  test('should convert estimated RoL into mercury years', () => {
    expect(myAge.remainderMercury).toEqual(14.399999999999999);
  })

  test('should convert estimated RoL into venus years', () => {
    expect(myAge.remainderVenus).toEqual(37.2);
  })
})