//Hex to Decimal

//Complete the function which converts hex number (given as a string) to a decimal number.


//Pseducode
    //1. Convert the string to a singluar number
    // 2. Use parseInt to indicate which base you are converting the string to.
        // 16 = hexadecimal

        
function hexToDec(hexString){
    return parseInt(hexString,16);
}


//Commentary
    //I tried useing "Number.parseInt(hexString, 10)" first but considering that we use 
    // #hexadecimals in CSS, that wasn't the best route to go. I was happy to know that I was very close on first attempt.
    // All it took was for to only use the .parseInt() method, because we are trying to convert hexadecial to decimal you would use 16 instead of 10.