"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Duck_1 = require("./Duck");
var duck = new Duck_1.Duck('Patolino', 3, 50, 2, true, 'Preto');
function takeOff(animal) {
    animal.fly();
}
function stSwim(animal) {
    animal.swim();
}
function stWalk(animal) {
    animal.walk();
}
takeOff(duck);
stSwim(duck);
stWalk(duck);
