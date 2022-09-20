import { Animal } from "./Animal";

abstract class Bird extends Animal {
  public canFly: boolean

  constructor (name:string, lifeTime:number, size:number, weight:number,canFly:boolean){
  super(name, lifeTime, size, weight); // INFORMAÇOES DO Animal.ts
  this.canFly=canFly; // INFORMACOES ESPECIFICAS DA AVE
  }
}
export { Bird };