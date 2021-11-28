'use strict';

const mark = {
    fullName: 'Mark',
    mass: 78,
    height: 1.69,
    calcBmi: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const jhon = {
    fullName: 'John',
    mass: 92,
    height: 1.95,
    calcBmi: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

console.log(`${mark.calcBmi()}        ${jhon.calcBmi()}`);

const higherBmi =
    mark.calcBmi() > jhon.calcBmi()
        ? `Mark's BMI (${mark.calcBmi()}) is higher than Jhon (${jhon.calcBmi()})`
        : `Jhon's BMI (${jhon.calcBmi()}) is higher than mark (${mark.calcBmi()})`;

console.log(higherBmi);
