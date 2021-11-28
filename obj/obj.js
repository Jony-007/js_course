const jony = {
    firstname: 'Habibur Rahman',
    lastname: 'Jony',
    birthYear: 1996,
    job: 'teacher',
    friends: ['m', 'q', 's'],
    hasDriverLicense: false,
    // calcAge: function () {
    //     return 2021 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2021 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstname} ${
            this.lastname
        } is a ${this.calcAge()} year old teacher and he has ${
            this.hasDriverLicense ? 'a' : 'no'
        } driver's license`;
    }
};

console.log(
    `${jony.lastname} has ${jony.friends.length} friends and his
     best friend called ${jony.friends[0]}`
);

// using this in the expression function

// console.log(`Age of Jony is ${jony.calcAge()}`);
// console.log(`Age of Jony is ${jony.age}`);
// console.log(`Age of Jony is ${jony.age}`);
// console.log(`Age of Jony is ${jony.age}`);

// get summary

// const getSummary = function () {
//     return `${jony.firstname} ${jony.lastname} is a ${
//         jony.age
//     } year old teacher and he has ${
//         jony.hasDriverLicense ? 'a' : 'no'
//     } driver's license`;
// };

console.log(jony.getSummary());
