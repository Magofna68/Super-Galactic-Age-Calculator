export class Age {
  constructor(age, avgLife, mars, mercury) {
    this.age = age;
    this.avgLife = avgLife;
    this.mars = 1.88 * this.age;
    this.mercury = .24 * this.age;
    this.venus = .62 * this.age;
    this.jupiter = 11.86 * this.age;
    this.remainderMars = (this.avgLife - this.age) / 1.88;
    this.remainderMercury = (this.avgLife - this.age) / .24;
    this.remainderVenus = (this.avgLife - this.age) / .62;
    this.remainderJupiter = (this.avgLife - this.age) / 11.86;
  }

  beatenTheOdds() {
    if (this.avgLife >= this.age) {
      return "You have life in you still!"
    } else {
      let yearsOver = this.age - this.avgLife;
      console.log(yearsOver);
    }
    return yearsOver;
  }

  yearsConversion(planets) {
    // const planets = '';
    yearsOver = this.age - this.avgLife;
    switch (planets) {
      case 'mars':
        (yearsOver / 1.88);
        break;
      case 'mercury':
        (yearsOver / .24);
        break;
      case 'venus':
        (yearsOver / .64);
        break;
      case 'jupiter':
        (yearsOver / 11.86);
        break;
    }
  }
  // yearsConversion("mars");
}

// const expr = 'Papayas';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }
  // marsLife() {
  //   // let myMarsLife = this.mars.push(this.age * 1.88)
  //   this.mars = 1.88 * this.age;
  //   return this.mars;
// }