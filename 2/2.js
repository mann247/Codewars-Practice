// Filter the number


// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.


//Pseudocode
    //1. Initialize the result and make the result an empty string
    //2. Create a loop that checks if a character in the string can be changed to a number
    //3. Create an if statement that checks if a character can be changed, then add that to the empty string
        //otherwise do not change the character
    //4. Change the numerical characters into a number
    //5. Return

function filterString(value) {
  let result = "";
  for(let i=0; i<value.length; i++){
    const char =  value[i];
    //Checks if the character can be parsed as a number
    if (!isNaN(parseInt(char))){
        result += char;
    }
  }
  return parseInt(result); //Converts the numerial characters into a numerical value.
}

//Comments:
    //I love parsing values!!! I thought that I was going to have to use the "Number.parseInt()" method that I learned from the Learn
    //JS course, however because the problem is asking if the character in the string isn't a number, I thought that this would be a better route.
    //If this were an array, I would have probably used the .filter(callback) method, to see if I would get the same results. 