"use strict";

const { MyMath } = require("./js/MyMath");
const { Component } = require("./js/Component");

console.log("hi!");

console.log(MyMath.sum(1, 2));

const comp1 = new Component();
comp1.render();
