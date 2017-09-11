'use strict'
//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog(name, status, color) {
  this.name = name;
  this.status = status;
  this.color = color;
  this.hungry = true;
};

// Instances of Dog
// Needed: sadie, moonshine, atticus

let sadie = new Dog('sadie', 'normal', 'black');
let moonshine = new Dog('moonshine', 'normal', 'grey');
let atticus = new Dog('atticus', 'normal', 'white');


//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human(cool) {
  this.cool = cool;
  this.pet = function(x) {
    return x.status = "happy";
  };
  this.feed = function(x) {
    return x.hungry = false;
  };
};

// Instances of Human
// Needed: mason, julia

let mason = new Human(false);
let julia = new Human(true);

// Feeding sadie makes her hunger false.
julia.feed(sadie);
