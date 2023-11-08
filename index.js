import Sum from './sum.js';
import { getPersonFullName } from './person.js';

const initSum = new Sum(1, 5);
const total = initSum.getSum();

console.log(total);

const person = getPersonFullName('Pavel', 'Tseluiko');

console.log(person);
