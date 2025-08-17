//Simple Pig Latin


//Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
// Leave punctuation marks untouched.

//Pseudo 
//1. create a function
//2. Split the string
// 3. find the first letter of each word
// 4. send the 1st letter to the back
// 5. add -"ay" to the string
//6. Join the seperate strings
// 7. Return

function pigIt(str){
    let array = str.split(" ");
    let newArr = [];
    let newStr = "";
        for (let i = 0; i < array.length; i++){
            newStr = array[i].slice(1) + array[i].charAt(0) + "ay"; 
            newArr.push(newStr);
        } 
    return newArr.join(" ");
}

//Commentary
// I wanted to try and attempt this one after working on this one with the cohort as well.