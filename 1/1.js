// Find the Parity Outlier


//You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
//  Write a method that takes the array as an argument and returns this "outlier" N.

//Pseudocode
    //1. Initialize the Even and Odd Variable.
    //2. Create a loop that checks the array for even and odd numbers.
    //3. Create an if statement that checks if the majority of the array are evens or odds
    //4. Return the outlier

    function findOutlier(integers){
        let evens = [];
        let odds = [];

        for(let i=0;i < integers.length;i++){
            if (integers[i]%2 === 0){ //check for even numbers
                evens.push(integers[i]);
            } else{ //odd numbers
                odds.push(integers[i]);
            }
        }

        if (evens.length===1){
            return evens[0];
        } else{
            return odds[0];
        }
    }

///Challenges solving this problem:
/// As i have continued to practie with JS, I am understanding that there are less complicated ways to create a solution.
/// I have really enjoyed learning about methods to see how I can solve a problem in a more efficient way. 
/// After completing this problem, I really like how you can see the thought process of fellow coders as well.
