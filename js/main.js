'use strict';
console.log('main.js');

const user1 = {
  name: 'John',
  age: 21,
  town: 'London',
  hasCar: true,
  hi: function () {
    console.log(`Sveiki as esu ${this.name} is ${this.town}`);
  },
  // hiArrow: () => {
  //   console.log('this ===', this); // === windwow
  //   console.log(`Sveiki as esu ${this.name} is Londes`);
  // },
};
const user2 = {
  name: 'Mike',
  age: 21,
  town: 'London',
  hasCar: true,
  hi: function () {
    console.log(`Sveiki as esu ${this.name} is ${this.town}`);
  },
  // hiArrow: () => {
  //   console.log('this ===', this); // === windwow
  //   console.log(`Sveiki as esu ${this.name} is Londes`);
  // },
};

// console.log('user1 ===', user1);
user1.hi();
user2.hi();
// user1.hiArrow();
user1.age = 31;
// console.log('user1.age ===', user1.age);

const marks1 = {
  marks: [4, 10, 7, 10],
  avg: function () {
    // atspausdinit ir grazinti vidurki
    // for ( kintamasis of masyvas/iterable){}
    let sum = 0;
    for (const nr of this.marks) {
      sum += nr;
    }
    console.log('sum ===', sum);
    const avg = sum / this.marks.length;
    console.log(`marks average is ${avg.toFixed(2)}`);
    return avg.toFixed(2);
  },
  max: function () {
    // atspausdinit ir grazinti diziausia skaiciu
    // issrikiuoti marks masyva ir pasiimti diziausia reiksme
  },
  addMark: function (newMark) {
    console.log(`Adding ${newMark} to marks`);
    this.marks.push(newMark);
  },
};
marks1.addMark(8);
marks1.addMark(10);
// console.log('marks1 ===', marks1);
marks1.avg();