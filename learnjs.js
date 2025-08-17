//Basic Function
//The return keyword will quit the function with the result (which is x + y), so the code afterward will never run!
//console.log must be placed before a return statement because of this note above.
    //it would become unreachable code and will never be executed.
//once a return statement is encountered, the function immediately stops its execution, and the specific value is returned to the caller
    //Any code placed after the return statement within the same function will not be executed.


//return: Used within a function to send a 
// value back to the place where the function was called. 
// It signals the end of a function's execution and provides an output value that can be used elsewhere in the program.
//console.log: Used to display information in the developer console. Its primary purpose is for debugging and providing visibility into the program's state or execution flow.

//sum
function sum(x,y){
    return x+y;
    // console.log("Hello World");
}
console.log(sum(9,8));

//multiply
function multiply(x,y){
    return x*y;
}
console.log(multiply(8,42));

//character access
const language = "JavaScript";
language[0]; //1st character
language[1];// 2nd character
language[2]; //3rd character
console.log(language[6]);
console.log(language[9]);

console.log(language[language.length -2]); //prints second to last character
// console.log(language[language.length]); //und

//.at(index) method
//good to use for negative index. 
console.log(language.at(-3)); //prints 'i' in console log
console.log(language.substring(2,6)) //substring. starts at the second index and end at the 5th index.

//test problem - get first character
function getFirstCharacter(name){
    return name[0];
}
console.log(getFirstCharacter("Canada"));

//get last character
function getLastCharacter(name){
    return name.at(-1);
} console.log(getLastCharacter("Patrice"));
console.log(getLastCharacter("Patrick"));

//Substring : a part or portion of ga string
//function signature : an explanation of parameters that are needed to pass for the method
    //example: someString.substring(indexStart, indexEnd)
            //2 params
            //indexStart = position of the first character you'd like to include
            //indexEnd = the first character you would like to ignore. This optional to have.

function skipsFirstCharacter(text){
    return text.substring(1); //skips the first character
}
console.log(skipsFirstCharacter('Fisher'));

//Document Object Model
    //a programming interface for HTML and XML documents
    //the structures of documents
    // each part of the document is represent as a node object.
    //document.getelementid()
    //allows for js to react to user interactions and other events by attaching event listeners to elements.
    //necessary bridge for JS to dynamically interavt with and modify web pages, enabling interactive and dynamic user experiences

//import keyword - JS used to bring in exports from other JS modules
    //Named imports
    //Default imports
    //NameSpace Imports
    //Side Effect Import
    //Dynamic Import
//export keyword - used within modules to make variables, functions, classes, or other values accessible from other JS files or modules
    //named exports
    //default exports


//+= >> name = name + ___ >> name+= ____

function concatInitials (firstNameInitials, lastNameInitials){
    return firstNameInitials + lastNameInitials;
}
console.log(concatInitials("Money","Trees"));

function getDescription(text){
    console.log(text);
    return text.substring(0,10) + "..."
}
console.log(getDescription("Mississippi"));

//String Interpolation
function sayHello(name){
    return `Hello ${name}`;
} console.log(sayHello("Alex"));

//String interpolation
function getFullName(firstName, lastName){
    return `${firstName} ${lastName}`
} console.log(getFullName("Roscoe", "Jenkins"));

//Multiline String
function getMultilineString(){
    return `I am learning JavaScript and I found it to be quite fun!`
}

//Capitalize word
function caps(word){
    return word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase();
} console.log(caps("LERoy"));

function caps(word){
    return word.charAt(0).toUpperCase()+ word.substring(1).toLowerCase();
} console.log(caps("rodNey"));

//Names
//number of characters in a string
function getNumberofChars(name){
    return name.length;
} console.log(getNumberofChars("Green"))

//first character of name
function getFirstChar(name){
    return name[0];
} console.log(getFirstChar("Green"))

//last character of name
function getLastChar(name){
    return name[name.length-1];
} console.log(getLastChar("Green"))

//lower case 
function getLower(name){
    return name.toLowerCase();
}console.log(getLastChar("Green"))

function getUpper(name){
    return name.toLowerCase();
}console.log(getLastChar("Green"))

function getCapitalized(name){
    return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
}console.log(getLastChar("Green"))

//Numbers. 
//NaN = Not A Number
// 1_000 === 1000. (underscores can be used as a number seperator to help with readibility.)

//Number to String
function convertNumberToString(number){
    return number.toString();

} console.log(convertNumberToString(42));
console.log(convertNumberToString(97));
console.log(convertNumberToString(11));

//String to Number
//let str = "42";
//Number.parseInt(str, 10); //42
// number.parseInt();

//Number.parseInt() is a function. There is a global object called 'Number' which contains a method called parseInt();
//Number.parseInt() expects 2 parameters.
    //expects a string and a radix

//Create a function getNextAge that returns the age next year(by adding 1 to the current age).
function getNextAge(age){
    age = Number.parseInt(age,10);
    return age+1;
}console.log(getNextAge(56));

//Create the function getBoxWidth, that returns the width as a number from the string it receives.
//
function getBoxWidth(value) {
    value = Number.parseInt(value, 10);
    console.log(value);
    return value;
}

//Operations
//Division remainder
    //% operator which returns the division remainder
    // 8/2 = 4
        //the division remainder is 0 because 8 = 4*2+0
//Number Methods
    //.round()
    //.floor()
    //.ceil()
function getDivisionRemainderBy2(number) {
    return number % 2;
}
console.log(getDivisionRemainderBy2(80));

//Variables
//let : can be reassigned later on
    //let language = "C++";
    //language = 'JavaScript
    //great for variables that need to be incremented or decremented.
    //let and const are block scoped.

//const: can not be re-assigned.

//Conditions
    //conditiions follow blueprints

    //Ligatures
    // === 
    // <=
    // =>
    // !==

//Can you vote?
//Create a function called "CanVote" that returns true if the person is over the age of 18
//false in all other scenarios
function canVote(age) {
    if (age>=18){
        return true;
    }else if (age <=18){
        return false;
    }
}
console.log(canVote(25)); // true
console.log(canVote(18)); // true
console.log(canVote(10)); // false

//Advanced If
    //always use a triple equals === when comparing 2 values in JS
        //if both sides are the same data type and the same value.
    //early return

//GetNextAge
//Create a function that returns the age next year, by adding 1 to the current age.
    function getNextAgeTwo(age) {
    let newAge = Number.parseInt(age,10);
    if (age===""){
        return 0;
    } 
    return newAge+1;
}
//option 2
function getNextAge(age) {
    if (age === "") {
        return 0;
    }  
    return Number.parseInt(age, 10) + 1;
}

//Create a function called getDescription that returns the first 10 charcaters of the text parameters followed by a ellipses
    //When the the text is 10 charcters or less the ellipsis should not be added because the text is not to be trimmed.
function getDescription(text) {
    console.log(text); // write something in the BROWSER and see it in the console

    if(text.length > 10){
        return text.substring(0,10) + "...";
    }
    return text;
}

//Returning Booleans
    //true or false
    function isPassing(grade){
        if (grade >= 10){
            return true;
        } else{
            return false;
        }
    }
    console.log(isPassing(12));

    //or
    //this will always return a boolean.
    function isPassing(grade){
        return grade >= 10;
    }
//when you're returning a boolean from a function, you can simply your code by returning the booleans expression directly, without using an if statement

//Even & Odd
//Division Remainer lets you know if its even or odd
//division remainder = 0 >> even
//division remainder = 1 >> odd
function evenOrOdd(number) {
    if (number%2 === 0){
        return "even";
    }
    return "odd";
}

//another way to write a ternary operator
function evenOrOdd(number){
    return (number%2 === 0)? "even":"odd";
}

//ternary operator 
//condition ? expressionWhenTrue : expressionWhenFalse

//Arrays
//allow you to store multiple elements in the same vairable
    //you can store numbers, strings, booleans, arrays, objects, and more
    //different data types can be stored in the array
    //name arrays in plural as they can contain more than one item

//.length
//.length is a property (pre-computed value) and not a function. That's why you should not have () after it.

//Get Element by Index
    //you can get an element from an array by using the square backet syntax [] with the index starting from 0.
    //.at(index)
        //accepst a negative indices making it easier to find the last element of the array.
        //Negative indices count back from the last element of the awaay
        //.at()

//Adding an element
    //.push()
    //adds en element to the end of an array
    //.push() >> will add an item to the array AND returns the length of an array

//Arrays & Const
    //benefit of declaring const = once you define an array, it will always stay as an array which means you can safely call array methods on it
    //However, the array content can change.


//Create a function that returns an empty array
function getEmptyArray(){
    const array = [];
    return array;
}
console.log(getEmptyArray());

//create a function that returns the number of items contained in the elements array it receives
function getNumOfElements(elements){
    return elements;
}
console.log(getNumOfElements(['a','b','c']));

//create a function useCalculator that adds the "Calculator" string in the *apps* array it receives. then return the array.
function useCalculator(apps) {
    const str = "Calculator";
    apps.push(str);
    return apps;
}
console.log(useCalculator(["Clock", "Twitter"])); // ["Clock", "Twitter", "Calculator"]
console.log(useCalculator(["Weather"])); // ["Weather", "Calculator"]

//option 2
function useCalculator(apps) {
    apps.push("Calculator");
    return apps;
}
console.log(useCalculator(["Clock", "Twitter"]));

//Create a function that the *app* variable is added to the *apps* array
//then return the *apps* array
function useApp(apps, app) {
        apps.push(app);
        return apps;

}
console.log(useApp(["Clock", "Twitter"], "Firefox")); // ["Clock", "Twitter", "Firefox"]
console.log(useApp([], "Safari"));

//Create a function getFirstApp such that it returns the first element from the apps array it receives as a parameter
function getFirstApp(apps) {
    return apps.at(0);
}
console.log(getFirstApp(["Chrome", "Clock", "Twitter"])); // "Chrome"
console.log(getFirstApp(["Clock", "Contacts"])); // "Clock"

//Create a function getLastApp that returns the last element from the apps array it receives as a parameter
function getLastApp(apps){
    return apps.at(apps.length-1);
}
console.log(getLastApp(["Chrome"]))


//Array forEach
//Array iteration
    //loop (iterate)
    //always console.log() inside your .forEach so you can visualize the shift from array to array item
    // .forEach(callback) method allows you to run the callback function for every item in the array
        //callback: a function definition passed as a parameter to another function
        //grades.forEach(function(x) {
    // this works, but avoid using generic variable names
//     console.log(x);
// });

//create a function loopThroughElements that iterates over every item in the elemenrs arrays.
    //must receive it
    //logs into the console.
    function loopThroughElements(elements) {
    elements.forEach(function(elements){
        console.log(elements);
    })
}
console.log(["Sam", "Charlie", "Alex"])

//Create a function called logUsersIds that iterates over every item in the userIds array it receives and logs it into the console.

function logUsersIds(userIds){
    userIds.forEach(function(userIds){
        console.log(userIds);
    })
}

//Return Confusion

//naming variables when iterating..
    //plural for an array
    //singular for an item
//do not use a return in a callback function
//Also, the .forEach() method will always return undefined no matter what you return inside of it.

//Sum Grades
//Create the function sumGrade that returns the sum of all th egrade it receives as a param
    //reduce?
function sumGrades(grades) {
    let sum = 0;
    grades.forEach(function(grade){
        sum = sum+grade;
    });
    return sum;
}
console.log(sumGrades([15, 5, 10])); // 30
console.log(sumGrades([12, 10, 13, 19])); // 54

//Create the function sumPositiveNumbers that returns the sum of all positive numbers from the numbers param it receives
function sumPositiveNumbers(numbers) {
    let sum = 0;
    numbers.forEach(function(numbers){
        if (numbers > 0){
            sum = sum+numbers;
        }
    });
    return sum;
}
console.log(sumPositiveNumbers([15, -5, 10])); // 25
console.log(sumPositiveNumbers([-3, 4, -2, 1])); // 5

//Create the function sumOddNumbers that returns the sum of all the odd numbers from the numbers parameter.
function sumOddNumbers(numbers) {
    let sum = 0;
    numbers.forEach(function(number){
        if (number%2 !== 0){
            sum = sum+number;
        }
    });
    return sum;
}
console.log(sumOddNumbers([15, 5, 10])); // 20
console.log(sumOddNumbers([2, 3, 4, 5, 6])); // 8
console.log(sumOddNumbers([-2, -3, 4, 5, 6])); // 2

//Countries Dropdown I
    //create the function getDropDOWN

// function renderTableRows(rows) {
//     let html = " ";
//     console.log(rows);
//     rows.forEach(function(row){
//         html += `<tr>
//                 <td>${row[0]}</td>
//                 <td>${row[1]}</td>
//         </tr>`
//     });
//     return html;
// }

//const data = [1, 2, 3] is an array containing 3 numbers.
// array.length returns the number of elements inside the array.
// array.push(x) allows you to add the variable x to the end of the array. It also returns the new length of the array (after the push has been made).
// Arrays defined with const are not constants because you can change the elements inside of it. However, you cannot re-assign them to another value thus they will always be an array.
// .forEach(callback) iterates over every item in an array.
// A callback is a function definition passed as a parameter to another function.
// Always start with a console.log() inside the .forEach() to visualize the shift from array to array item (you can skip that when you become used to it).
// The .forEach() method will take your function definition and call it for every item of the array. Every time the callback is called, the first parameter will represent the corresponding array item.
// Name your arrays in plural and the array item (inside the .forEach()) in singular.
// Make sure to correctly place the return inside a function that contains a .forEach().



///Array Filter
    //an array method .filter()
        //When this array is called, you will get back another array that contains asome of the items from the original array, 
        //based on the condition you specify.

// const numbers = [9, 5, 14, 3, 11];
// const numbersAboveTen = numbers.filter(function(number) {
//     return number > 10;
// });
// console.log(numbersAboveTen); // [14, 11]


//array.filter(callback)

    //.filter() expects a callback as the first arguments
    //JS will take the callback adn call it for every item in the array.
    //lops until the last item of the array

    //cretae a function getPositiveTemperatures that return it an array containing the positive temperatures
function getPositiveTemperatures(temperatures) {
    const temperaturesAboveZero = temperatures.filter(function(temperature){
        return temperature > 0;
    });
   return temperaturesAboveZero;
}

console.log(getPositiveTemperatures([-5, 12, 3])); // [12, 3]
console.log(getPositiveTemperatures([1, -3, -2, 4, 10])); // [1, 4, 10]

//Array find
    //.find()
    //.find(callback) > you will get back the first item that matches the condition that you specify
        //calls the callback that was provided for every item in the array until one of the callbacks return true
        
    //.filter() & .find()
        //.filter() returns an array >> []
        //.find() returns the first array item that matches the callback condition und. >>the actual item

//function getYear(years, searchYear) {
//     years.find(function(year){
//         if (year==='2020'){
//             return year === '2020';
//         } else if (year === '1990'){
//             return undefined;
//         }
//     });
//     return searchYear;
// }

// // Sample usage - do not modify
// console.log(getYear([2019, 2020, 2021], 2020)); // 2020
// console.log(getYear([2019, 2020, 2021], 1990)); // undefined


//create a function called getYear that returns the searchYear (passed as a 2nd param) when it's found in the array. Otherwise return und.
function getYear(years, searchYear) {
    return years.find(function(year){
       return year === searchYear;
    });
}

console.log(getYear([2019, 2020, 2021], 2020)); // 2020
console.log(getYear([2019, 2020, 2021], 1990)); // undefined


//Create the function getOddYears that returns all the years that are odd from the years parameter it receives.
function getOddYears(years) {
    return years.filter(function(year){
        return year%2 !==0;
    })

}
console.log(getOddYears([2019, 2020, 2021])); // [2019, 2021]
console.log(getOddYears([2000, 2015, 2018, 2020])); // [2015]


//.map(callback)
    //transform an array into another one
    //You can always get back an array containing the same number of items compared to the original array, but every item undergoes a transformation
    // if a return statement is forgotten, then you will end up with an [und,und] array


//array includes(item
    //takes an item rather than a callback and returns true when that item exists in the array adn false otherwise
    // const groceries = ["Apple", "Peach", "Tomato"];

// groceries.includes("Tomato"); // true
// groceries.includes("Bread"); // false

//Array join(glue)
    //when you have an array and you render an array to a web page, the array will aytomatically be converted to a string.
    //JS will automatically invoke the .toString() methog of the awrray whihc returns a string of array elements separated by commas.
    function isAppUsed(apps, app) {
    return apps.includes(app);
}
console.log(isAppUsed(["Twitter", "Calculator"], "Calculator")); // true
console.log(isAppUsed(["Clock", "Calculator"], "Safari")); // false



//String size
    //Create the function getStringSizes that returns an array of the number of characters for every string it receives in the strings parameter.
   function getStringSizes(strings) {
    return strings.map(function(string){
        return string.length;
    });
}
console.log(getStringSizes(["a", "abc"])); // [1, 3]
console.log(getStringSizes(["Sam", "Alex", "Charlie"])); // [3, 4, 7]
console.log(getStringSizes(["Hello", "Blue"])); // [5, 4] 

//Classroom Project.


function getVotersCount(ages) {
    console.log(ages);
    const votes = ages.filter(function(age){
            return age >= 18;
        });
    return votes.length;
}
