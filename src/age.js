export class Age {
  constructor(age, life, mars, mercury) {
    this.age = age;
    this.life = life;
    this.mars = 1.88 * this.age;
    this.mercury = .24 * this.age;
    this.venus = .62 * this.age;
    this.jupiter = 11.86 * this.age;
    this.remainderMars = (this.life - this.age) / 1.88;
    this.remainderMercury = (this.life - this.age) / .24;
    this.remainderVenus = (this.life - this.age) / .62;
    this.remainderJupiter = (this.life - this.age) / 11.86;
  }

  // marsLife() {
  //   // let myMarsLife = this.mars.push(this.age * 1.88)
  //   this.mars = 1.88 * this.age;
  //   return this.mars;

}
// }