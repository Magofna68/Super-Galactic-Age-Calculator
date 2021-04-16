import { Age } from '../src/age.js'

describe('Age', () => {
  let myAge;
  beforeEach(() => {
    myAge = new Age(45, 66)
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
})