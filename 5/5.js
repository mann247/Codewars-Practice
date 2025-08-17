//Do you speak "English"?

// Given a string of arbitrary length with any ascii characters.
//  Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.


//Pseudocode
// 1. Convert the string to either lowercase or uppercase characters
    //for case sensitive comparison
// 2. check if the string contains the word 'english' using the .includes() method
// 3. return the string

//Pseduocode
//1. Set the string to lower or uppercase to create a case sensitive string (user preference)
//2. Return the new string.
    //If the string contains "english" return true
    // if the string does not contain "english" return false

    
function spEng(sentence){
  const lowerCaseStr = sentence.toLowerCase();
  return lowerCaseStr.includes("english");
}

//Commentary: 
    //I overcomplicated this initially, but this function was very straight forward.