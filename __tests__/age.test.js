import { Age } from '../src/age.js'

describe('Age', () => {
  let myAge;
  beforeEach(() => {
    myAge = new Age()
  })

  test('Should properly create an object with Age constructor', () => {
    // const myAge = new Age()
    expect(myAge).toBeDefined();
  })


})