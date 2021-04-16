import { Age } from '../src/age.js'

describe('Age', () => {
  let myAge;
  beforeEach(() => {
    myAge = new Age(10, 10, 70)
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

  // test('Should properly take in a value and convert value to mars years', => {
  //   let myMarsLife = myAge.marsLife()
  //   expect(myMarsLife).toEqual(18.8)
  // })
})