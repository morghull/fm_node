import './style.css';
import Component from './Component';
import { pow } from './math';

const resultOfPow = pow(456, 88);
console.log(resultOfPow);

const comp = new Component(12);
console.log(comp.render());

