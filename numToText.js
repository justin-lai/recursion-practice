'use strict';
/* Create a function using recursion called numToText which takes a string and returns a new string with all numeric numbers from the input string converted to their corresponding text words. You can assume that the numbers in the string are single digit nubmers. Can you implement this function in two different ways? One way involves creating an inner helper function (or subroutine), the other way does not use an inner function.

Extra Credit: Have the function handle numbers of any digit size.

Ex: numToText("I have 5 dogs and 6 ponies"); // returns "I have five dogs and six ponies"

*/

var numsAsStrings = {
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine',
  '0': 'zero',
  '11': 'eleven',
  '12': 'twelve',
  '13': 'thirteen',
  '14': 'fourteen',
  '15': 'fifteen',
  '16': 'sixteen',
  '17': 'seventeen',
  '18': 'eighteen',
  '19': 'nineteen',
  '20': 'twenty',
  '30': 'thirty',
  '40': 'forty',
  '50': 'fifty',
  '60': 'sixty',
  '70': 'seventy',
  '80': 'eighty',
  '90': 'ninety'
};
var groupQualifier = {
  0: '',
  1: '',
  2: 'thousand',
  3: 'million',
  4: 'billion',
  5: 'trillion',
  6: 'quadrillion',
  7: 'quintillion',
  8: 'sextillion',
  9: 'septillion',
  10: 'octillion',
  11: 'nonillion',
  12: 'decillion'
}


var numToText = function(str) {

  var convertedStr = '';
  convertStr(str,'');

  function convertStr(str, currentNum) {
    //base case if the str is completely iterated
    if (str.length === 0) {
      return;
    }

    var firstChar = str.charAt(0);

    //if the first character is a number, replace it with the stringified version
    if (numsAsStrings.hasOwnProperty(firstChar)) {
      //convertedStr = convertedStr.concat(numsAsStrings[firstChar]);

      //build the number
      currentNum += firstChar;
    } else {
      //check if a number has finished 'accumulating'
      if (currentNum !== '') {
        var fullNumber = fullNumberAsString(currentNum).join(' ');
        //function to assign str to full number
        convertedStr = convertedStr.concat(fullNumber).concat(firstChar);
        currentNum = '';
      } else {
        convertedStr = convertedStr.concat(firstChar);
      }
    }
    
    //recursively call helper fn with str minus the first character
    return convertStr(str.slice(1),currentNum);
  }

  return convertedStr;

};

function fullNumberAsString(number) {
  var fullNumber = [],
      fullNumberArray = [0],
      digitsPlace = 0,
      tripletGroup = 0;
  //alerts user if number is greater than this program's capacity/scope
  if (number.length > 37) {
    alert("Number exceeds the scope of this program's capacity");
  }

  for (var i=number.length-1; i>=0; i--) {
    //increment digitsPlace
    digitsPlace++;
    //increment tripletGroup if 
    if (digitsPlace%3 === 1) {
      tripletGroup++;
    }

    fullNumberArray[digitsPlace] = {number: number[i],
                                    group: tripletGroup};
  }

  for (var digitPlace=1; digitPlace<fullNumberArray.length; digitPlace++) {
    //
    if (digitPlace%3 === 0) {
      if (fullNumberArray[digitPlace].number !== '0') {
        fullNumber.unshift(numsAsStrings[fullNumberArray[digitPlace].number]+'-hundred');
        //fullNumber = numsAsStrings[fullNumberArray[digitPlace].number]+' hundred '+fullNumber;
      }
    } else if (digitPlace%3 === 2) { 
      if (fullNumberArray[digitPlace].number === '1') {
        var newNumber = fullNumberArray[digitPlace].number+fullNumberArray[digitPlace-1].number;
        //fullNumber = numsAsStrings[newNumber]+' '+fullNumber;
        fullNumber[0]=numsAsStrings[newNumber];
      } else if (fullNumberArray[digitPlace].number !== '0') {
        var newNumber = fullNumberArray[digitPlace].number+'0'; //i.e. changes '2' to '20', '3' to '30', etc.
        
        if (fullNumberArray[digitPlace-1].number !== '0') {
          fullNumber[0]=numsAsStrings[newNumber]+'-'+fullNumber[0];
        } else {
          fullNumber.unshift(groupQualifier[fullNumberArray[digitPlace].group]);
          fullNumber.unshift(numsAsStrings[newNumber]);
        }
      }
    } else if (digitPlace%3 === 1) {
      //checks if ones place is tied to 20, 30, 40, etc.
      if (fullNumberArray[digitPlace].number !== '0') {
        fullNumber.unshift(groupQualifier[fullNumberArray[digitPlace].group]);
        fullNumber.unshift(numsAsStrings[fullNumberArray[digitPlace].number]);
      } else {
        //if number is just '0'
        if (number.length === 1) {
          fullNumber = ['zero'];
        }
      }
    }

  }
  if (fullNumber[fullNumber.length-1] === '') {
    fullNumber.pop(); //remove the empty last array element (remnant from unshifting an empty array)
  }
  console.log('fullNumber: '+fullNumber+'-')
  return fullNumber;
}

