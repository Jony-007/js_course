'use strict';

const programming_language = ['java', 'js', 'c#'];

console.log(programming_language);

const jony = ['Jony', 2021 - 1996, programming_language];
console.log(jony);

const calcAge = (birthYear) => 2037 - birthYear;

const years = [1998, 1995, 1997, 1980];

for (let i = 0; i < years.length; i++) {
    console.log(calcAge(years[i]));
}
