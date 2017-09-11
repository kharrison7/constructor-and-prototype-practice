'use strict'
//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog () {
  this.name = name;
  this.status = status;

};

// Instances of Dog
// Needed: sadie, moonshine, atticus

let sadie = new Dog();
let moonshine = new Dog();
let atticus = new Dog();


//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (pet) {
 this.pet = function(){
  console.log(this.name);
};

};

// Instances of Human
// Needed: mason, julia

let mason = new Human();
let julia = new Human();
