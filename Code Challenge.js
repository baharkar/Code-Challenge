// Problem 1
const DurhamRocks = () => {
  let AwesomeDurham = console.log('Durham is awesome!')
};
DurhamRocks();

// Problems 2-3
const bands = ['Kiss', 'Aerosmith', 'ACDC', 'Led Zeppelin', 'Nickelback'];
for (let i = 0; i < bands.length; i++){
  if (bands[i] === 'Nickelback') {
    break;
  }
  console.log("I love " + bands[i])
};
 console.log("I DON'T love Nickelback!");

// Problem 4
const array = [34, 203, 16, 46, 34, 432, 342, 124, 33, 188, 12];
const arraySum = (num1, num2) => num1 + num2;
let arraySum2 = array.reduce(arraySum);
let arrayAverage = arraySum2 / array.length
console.log(arrayAverage);

// Problem 5 - certain there is a more simple and concise way to write this code. Also I think per the instructions this code was supposed to deliver the results without me manually counting and then logging to the console. Couldn't figure out how to do that. Thinking I could have created some counter variables?
const letterArray = ['a', 'b', 'c', 'd', 'c', 'b', 'b', 'c', 'a', 'e', 'b', 'e'];
let letterArrayCpy = letterArray.sort();
//console.log(letterArrayCpy);
for (let i = 0; i < letterArrayCpy.length; i++){
  if (letterArrayCpy[i] === 'a') {
   console.log('Confirmed A');
  } else if (letterArrayCpy[i] === 'b') {
     console.log('Confirmed B');
  } else if (letterArrayCpy[i] === 'c') {
    console.log('Confirmed C');
  } else if (letterArrayCpy[i] === 'd') {
    console.log('Confirmed D'); 
  } else if (letterArrayCpy[i] === 'e') {
     console.log('Confirmed E');
  }
};
console.log('The most frequent item is: b');
console.log('The least frequent item is: d');

// Problem 6 - Not sure why I have three a's. Wasn't completely sure how to count the number of overlaps with code
const ltrArray1 = ['a', 'b', 'c', 'a', 'a', 'b', 'd'];
const ltrArray2 = ['a', 'b', 'b', 'a', 'e', 'c', 'c', 'g'];
const overlapArray = [];
for (i = 0; i < ltrArray1.length; i++){
  for (j = 0; j < ltrArray2.length; j++) {
    if (ltrArray1[i] === ltrArray2[j]) {
      overlapArray.push(ltrArray1[i])
      break;
    }
  }
};
console.log(overlapArray);

// Problem 7 objects are a ~little~ confusing for me, definitely my biggest challenge from the prep course. 
function bigSpender (cost) {
    return {
        hundreds: 17,
        twenties: 2,
        fives: 1
    };
};

bigSpender();

