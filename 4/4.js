//Custom FizzBuzz Array


// Write a function that returns a (custom) FizzBuzz sequence of the numbers 1 to 100.

// The function should be able to take up to 4 arguments:

// The 1st and 2nd arguments are strings, "Fizz" and "Buzz" by default;
// The 3rd and 4th arguments are integers, 3 and 5 by default. 
// Thus, when the function is called without arguments, it will return the classic FizzBuzz sequence up to 100

//PseudoCode
// 1. Initialize each arguement
// 2. Create an empty array
// 3. Create a loop that ranges from 0 - 100
// 4. Check for multiples of 3 & 5 >> "FizzBuzz"
// 5. Check for Multiples of 3 >> "Fizz"
// 6. Check for Multipes of 5 >> "Buzz"

let fizzBuzzCustom = function(stringOne = "Fizz", stringTwo = 'Buzz', numOne=3, numTwo=5) {
  const sequence = [];
  
  for (let i = 1; i <= 100; i++) {
    let output = "";
    if (i % numOne === 0) {
      output += stringOne;
    }
    if (i % numTwo === 0) {
      output += stringTwo;
    }
    if (output === "") {
      sequence.push(i);
    } else {
      sequence.push(output);
    }
  }
  return sequence;
  
  
}


// Attempt 2 (working solution)
//Commentary:
    // This was a bit different from what we did in class because the arguments were already defined in the kata.
    // I do like that you can customize this one based on the word that someone wants to use.
//Challenges: 
    //When working on the code, the most difficult part was to make arguments listed work without initializing them, 
    //Once I set them to the second solution put in this js file, it was able to work.