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
    let longLived = 0;
    if (this.avgLife >= this.age) {
      return "You have life in you still!"
    } else {
      longLived = this.age - this.avgLife;
    }
  }
}
  // marsLife() {
  //   // let myMarsLife = this.mars.push(this.age * 1.88)
  //   this.mars = 1.88 * this.age;
  //   return this.mars;
// }