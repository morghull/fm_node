"use strict";

const { MyMath } = require("./js/MyMath");
const { Component } = require("./js/Component");
const { path } = require("path");


console.log("hi!");

console.log(MyMath.sum(1, 2));

const comp1 = new Component();
comp1.render();
