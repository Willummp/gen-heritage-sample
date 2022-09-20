import { Duck } from "./Duck";
import { ICanFly } from "./ICanFly";
import { ICanSwim } from "./ICanSwim";
import { ICanWalk } from "./ICanWalk";

const duck = new Duck('Patolino', 3, 50, 2, true, 'Preto');

function takeOff (animal: ICanFly){
  animal.fly();
}
function stSwim (animal: ICanSwim){
  animal.swim();
}
function stWalk (animal: ICanWalk){
  animal.walk();
}

takeOff(duck);
stSwim(duck);
stWalk(duck);