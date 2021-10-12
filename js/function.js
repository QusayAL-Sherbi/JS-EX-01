console.log("%cQusay AL-Sherbi", "font-size: 32px; color: #FFD700; font-weight: bold; font-family: Arial; padding: 20px");
/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/

console.log("%cEx 1", "font-size: 16px; color: #FFD700; font-weight: bold; font-family: Arial; padding: 8px 3px");

function tellFortune(jobTitle, geoLocation, partnersName, childsNumber) {
  return `You Will Be a ${jobTitle} in ${geoLocation}, And Married To ${partnersName} With ${childsNumber} Kids.`;
}

console.log(tellFortune("John", "USA", "Cristina", "4"));

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/

console.log("%cEx 2", "font-size: 16px; color: #FFD700; font-weight: bold; font-family: Arial; padding: 8px 3px");

function calculateDogAge(dogAge) {
  let humanAge = 7;
  dogAge *= humanAge;
  return `Your Doggie is ${dogAge} years Old In Dogs Years!`;
}

console.log(calculateDogAge(1));

/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/

console.log("%cEx 3", "font-size: 16px; color: #FFD700; font-weight: bold; font-family: Arial; padding: 8px 3px");

function calculateSupply(age, amount) {
  return `You Will Need ${age * 365} To Last You Until The Ripe Old Of ${amount} `;
}

console.log(calculateSupply(22, 5));

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/

console.log("%cEx 4", "font-size: 16px; color: #FFD700; font-weight: bold; font-family: Arial; padding: 8px 3px");

function greet(name) {
  return `Hello ${name}`;
}

console.log(greet("Qusay"));

/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/

console.log("%cEx 5 In Editor", "font-size: 16px; color: #FFD700; font-weight: bold; font-family: Arial; padding: 8px 3px");

/* 
  Analysis The Errors :-
  
  In 'double' Function - Number One
    1 - The Function Is Not Called
    2 - The Parameter 'Cat' Is Not Declared & Initialized
    3 - The Var 'x' Is Not Defined Because It Is Not Declared & Initialized

  In 'double' Function - Number Two
    1 - You Cannot To Pass Number For Function As a Parameter

  In 'double' Function - Number Three
    1 - The 'x' Is Not Defined Because It Is Not Declared & Initialized
    2 - You Cannot Write The Parameter In Quotes (Double Or Single)
    3 - You Cannot To multiplication string With Number
*/

/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/

console.log("%cEx 6 In Editor", "font-size: 16px; color: #FFD700; font-weight: bold; font-family: Arial; padding: 8px 3px");

/* 
  Analysis The Errors :-

    - Should Write The Complete Function Keyword
    - Should Close The Parameter Braces
    - Should Add Space Between Function Keyword And Function Name
    - Shouldn't Write The Parameter Braces Before Function Name
    - Should Close The Function Curly Braces
    - Should Add The Indentation Before The Statement For Readability

  Fix The Issues :-

    function double1(x) {
      return 2 * x;
    }

    function double2(x)
      return 2 * x;
    }

    function double3(x) {
      return 2 * x;
    }
*/



/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/

console.log("%cEx 7", "font-size: 16px; color: #FFD700; font-weight: bold; font-family: Arial; padding: 8px 3px");

function cubeFunc(value) {
  return `${value *= value ** 2}`
}

console.log(cubeFunc(4))

/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/

console.log("%cEx 8", "font-size: 16px; color: #FFD700; font-weight: bold; font-family: Arial; padding: 8px 3px");

function multiply(num1, num2) {
  return `${num1 * num2}`
}

console.log(multiply(3, 4));

console.log(multiply(5, 4));

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/

console.log("%cEx 9", "font-size: 16px; color: #FFD700; font-weight: bold; font-family: Arial; padding: 8px 3px");

function canIGetADrivingLicense(age) {
  if (age >= 20) {
    return  "Yes You Can"
  } else if (age = 17) {
    return "Please Come Back After 3 Years To Get One "
  }
}

console.log(canIGetADrivingLicense(20));

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

console.log("%cEx 10", "font-size: 16px; color: #FFD700; font-weight: bold; font-family: Arial; padding: 8px 3px");

function sameLength(text1, text2) {
  return text1.length == text2.length ? true : false
}

console.log(sameLength("VSCode", "VSCode"));

/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/

console.log("%cEx 11", "font-size: 16px; color: #FFD700; font-weight: bold; font-family: Arial; padding: 8px 3px");

function largerNubmer(num1, num2) {
  if (num1 > num2) {
    return num1
  } else {
    return num2
  }
}

console.log(largerNubmer(16, 21));

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/

console.log("%cEx 12", "font-size: 16px; color: #FFD700; font-weight: bold; font-family: Arial; padding: 8px 3px");

function smallerNubmer(num1, num2, num3) {
  if (num1 < num2 && num1 < num3) return num1;
  if (num2 < num3) return num2;
  return num3;
}

console.log(smallerNubmer(21, 55, 13));

/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/

console.log("%cEx 13", "font-size: 16px; color: #FFD700; font-weight: bold; font-family: Arial; padding: 8px 3px");

function shorterString(...params) {
  // Get Params Length
  let paramsLength = params.map(param => param.length);

  // Extract Min Number From Params
  let minParamsNum = Math.min(...paramsLength);

  /*
    Search In Params And Find Min Number
    And Compare It With Minimum Params Number Variable
  */
  let finallResult = params.find(minParam => minParam.length === minParamsNum);

  // Return Finall Result To Function Caller
  return finallResult;
}

console.log(shorterString("air","tr","car","github","by"));

/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/

console.log("%cEx 14", "font-size: 16px; color: #FFD700; font-weight: bold; font-family: Arial; padding: 8px 3px");

function longerString(...params) {
  // Get Params Length
  let paramsLength = params.map(param => param.length);

  // Extract Max Number From Params
  let maxParamsNum = Math.max(...paramsLength);

  /*
    Search In Params And Find Min Number
    And Compare It With Minimum Params Number Variable
  */
  let finallResult = params.find(maxParam => maxParam.length === maxParamsNum);

  // Return Finall Result To Function Caller
  return finallResult;
}

console.log(longerString("air","schoo","car","github"));

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/

console.log("%cEx 15", "font-size: 16px; color: #FFD700; font-weight: bold; font-family: Arial; padding: 8px 3px");

function isEven(num) {
  return num % 2 === 0 ? true : false;
}

console.log(isEven(1));
console.log(isEven(2));

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/

console.log("%cEx 16", "font-size: 16px; color: #FFD700; font-weight: bold; font-family: Arial; padding: 8px 3px");

function isOdd(num) {
  return num % 2 !== 0 ? true : false;
}

console.log(isOdd(4));
console.log(isOdd(5));

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/

console.log("%cEx 17", "font-size: 16px; color: #FFD700; font-weight: bold; font-family: Arial; padding: 8px 3px");

function positive(num) {
  return Math.abs(num);
}

console.log(positive(4));
console.log(positive(-5));

/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/

console.log("%cEx 18", "font-size: 16px; color: #FFD700; font-weight: bold; font-family: Arial; padding: 8px 3px");

function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

console.log(fullName("Qusay", "AL-Sherbi"));

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/

console.log("%cEx 19", "font-size: 16px; color: #FFD700; font-weight: bold; font-family: Arial; padding: 8px 3px");

function average(...nums) {
  let sum = 0;
  nums.forEach((num) => {
    sum += num;
  });
  return sum / nums.length;
}

console.log(average(1, 2, 3, 4, 5));
console.log(average(5, 7, 9, 3, 5));

/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/

console.log("%cEx 20", "font-size: 16px; color: #FFD700; font-weight: bold; font-family: Arial; padding: 8px 3px");

function randomNumber() {
  return Math.random();
}

console.log(randomNumber());

/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/

console.log("%cEx 21", "font-size: 16px; color: #FFD700; font-weight: bold; font-family: Arial; padding: 8px 3px");

function randomBetweenNumbers(num1, num2) {
  return Math.random() * (num1 + num2);
}

console.log(randomBetweenNumbers(1, 8));
console.log(Math.floor(randomBetweenNumbers(3, 100)));

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/

console.log("%cEx 22", "font-size: 16px; color: #FFD700; font-weight: bold; font-family: Arial; padding: 8px 3px");

function scoreInUniversty(score) {
  if (score >= 95 && score <= 100) {
    return "Your Degree Is A";
  } else if (score >= 85 && score <= 94) {
    return "Your Degree Is B";
  } else if (score >= 70 && score <= 84) {
    return "Your Degree Is C";
  } else if (score >= 50 && score <= 69) {
    return "Your Degree Is D";
  } else if (score >= 0 && score <= 49) {
    return "Your Degree Is F";
  }
}

console.log(scoreInUniversty(96));
console.log(scoreInUniversty(3));
console.log(scoreInUniversty(71));

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/

console.log("%cEx 23", "font-size: 16px; color: #FFD700; font-weight: bold; font-family: Arial; padding: 8px 3px");

let count = 0;

function counter() {
  count++;
  return count;
}

console.log(counter());
console.log(counter());
console.log(counter());

/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/

console.log("%cEx 24", "font-size: 16px; color: #FFD700; font-weight: bold; font-family: Arial; padding: 8px 3px");

function resetCounter() {
  return count--;
}

console.log(resetCounter());
console.log(resetCounter());
console.log(resetCounter());
