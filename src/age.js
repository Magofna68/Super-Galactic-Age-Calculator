export class Age {
  constructor(age, avgLife) {
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
  // yearsMars(planets) {
  //   let lifeForce = this.age - this.avgLife;
  // }

  yearsConversion(planets) {
    let lifeForce = this.age - this.avgLife;
    switch (planets) {
      case 'mars':
        if (lifeForce > 0) {
          return (lifeForce / 1.88);
        } else {
          return (lifeForce / 1.88) * -1;
        }
      case 'mercury':
        if (lifeForce > 0) {
          return (lifeForce / .24);
        } else {
          return (lifeForce / .24) * -1;
        }
      case 'venus':
        if (lifeForce > 0) {
          return (lifeForce / .64);
        } else {
          return (lifeForce / .64) * -1;
        }
      case 'jupiter':
        if (lifeForce > 0) {
          return (lifeForce / 11.86);
        } else {
          return (lifeForce / 11.86) * -1;
        }
      default: 'Sorry, we didnt get that. Please make sure ${planets} has been spelled correctly using lowercase lettering.'
    }
  }

  // yearsConversion(planets) {
  //   // const planets = '';
  // let yearsOver = this.age - this.avgLife;
  //     switch (planets) {
  //       case 'mars':
  //         (yearsOver / 1.88);
  //         break;
  //       case 'mercury':
  //         (yearsOver / .24);
  //         break;
  //       case 'venus':
  //         (yearsOver / .64);
  //         break;
  //       case 'jupiter':
  //         (yearsOver / 11.86);
  //         break;
  //       default: 'Sorry, we didnt get that. Please make sure ${planets} has been spelled correctly using lowercase lettering.'
  //     }
  //   }
  // }
  // yearsConversion("mars");
}