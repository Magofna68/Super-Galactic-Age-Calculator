export class Age {
  constructor(age, life, mars, mercury) {
    this.age = age;
    this.life = life;
    this.mars = 1.88 * this.age;
    this.mercury = .24 * this.age;
  }

  // marsLife() {
  //   // let myMarsLife = this.mars.push(this.age * 1.88)
  //   this.mars = 1.88 * this.age;
  //   return this.mars;

}
// }