// Exercise 1 Section

for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    continue;

  } else {
    console.log(`${i}`);
  }
}


// Exercise 2 Section

for (let i = 1; i <= 100; i++) 

if (i % 3 == 0 && i % 5 == 0) {
    console.log(i, "FIZZBUZZ");

   } else if (i % 3 == 0) {
    console.log(i, "FIZZ");

  } else if (i % 5 == 0) {
    console.log(i, "BUZZ");

 
  }
    


//Exercise 3 Section
let iterator = 1;

while  (iterator <= 100) {

if (i % 3 == 0 && i % 5 == 0) {
    console.log(i, "FIZZBUZZ");

   } else if (i % 3 == 0) {
    console.log(i, "FIZZ");

  } else if (i % 5 == 0) {
    console.log(i, "BUZZ");

 
  }
}

iterator = 1;

do {

if (i % 3 == 0 && i % 5 == 0) {
    console.log(i, "FIZZBUZZ");

   } else if (i % 3 == 0) {
    console.log(i, "FIZZ");

  } else if (i % 5 == 0) {
    console.log(i, "BUZZ");

  }
  iterator++;
} while  (iterator <= 100) 



//Exercise 4 Section

let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500 - 100) + 100);

for (let i = 0; i <= n; i++) {
  if (i === value) {
    console.log(`Found ${value}`);
    break;
   
  } else if (i == n) {
    console.log(`Did not find ${value}`);
  } 
  }

//Exercise 5

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000

for (let i = start; i <= end; i++) 

if (i % fizzDivisor == 0 && i % buzzDivisor == 0) {
    console.log(i, "FIZZBUZZ");

   } else if (i % fizzDivisor == 0) {
    console.log(i, "FIZZ");

  } else if (i % buzzDivisor == 0) {
    console.log(i, "BUZZ");

  }