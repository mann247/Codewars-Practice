//Sum of two Lowest Positive Integers

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. 
// No floats or non-positive integers will be passed.

//Pseduocode
    //1. Destructure the array
    //2. Sort the array in ascending order
    //4. return the sum of the destructured array

    function sumTwoSmallestNumbers(numbers){
        let [x,y] = numbers.sort(function(a,b){ //sorts the numbers in ascending order
            return a-b;
        });
        let sum = x+y;
        return sum;
    }
//Commentary
// I had to research how to complete this problem and I leanred about the 
// the destructuring assignment. This is an expression that makes it possible to unpack values from arrays or properties from objects,
//  into distinct variables.
// I could have used an arrow function, but I decided to try making the .sort() method a callback method. I personally like writing fucntions this way 
// so I can fully understand what I am doing.