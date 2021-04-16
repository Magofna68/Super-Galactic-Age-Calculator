import { TestScheduler } from '@jest/core';
import { describe } from 'yargs'
import { Age } from '../src/age.js'

describe('Age', () => {
  let myAge;
  beforeEach() => {
    myAge = new Age()
  })

  test('Should properly create an object with Age constructor', () => {
    expect(myAge).toBeDefined();
  }
})