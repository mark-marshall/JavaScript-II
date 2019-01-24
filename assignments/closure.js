// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function father() {
  let fatherKnowledge = "father knows these things";
  console.log(fatherKnowledge);
  // console.log(sonKnowledge); returns sonKnowledge not defined when father() is invoked

  return function son() {
    let sonKnowledge = "son knows these things";
    console.log(fatherKnowledge);
    console.log(sonKnowledge);
  };
}

let son = father();
father()();
son();
// we can access the console.logs inside the son function because this is equivalent to father()();

//father(); returns father knows these things
//son(); returns not defined
//father()(); returns father knows these things, father knows these things, son knows these things

// ==== Challenge 2: Create a counter function ====
// const counter = () => {
// Return a function that when invoked increments and returns a counter variable.
//};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

const counter = () => {
  let count = 0;

  return function() {
    return count++;
  };
};

const newCounter = counter();
newCounter();
newCounter();
newCounter();

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
// const counterFactory = () => {
// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.
//};

const counterFactory = () => {
  let countr = 0;

  return {
    increment: function() {
      return countr++;
    },
    decrement: function() {
      return countr--;
    },
    checker: function() {
      return countr;
    }
  };
};

let counterTime = counterFactory();
counterTime.increment();
counterTime.decrement();
counterTime.decrement();
counterTime.decrement();
console.log(counterTime.checker());
