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
  '19': 'nineteen'
};

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
        var fullNumber = fullNumberAsString(currentNum);
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
  var fullNumber = '',
      fullNumberArray = [0],
      digitsPlace = 0,
      tripletGroup = 0;

  for (var i=number.length-1; i>=0; i--) {
    //increment digitsPlace
    digitsPlace++;
    //increment tripletGroup if 
    if (digitsPlace%3 === 1) {
      tripletGroup++;
    }
    /*separate each digit by a space except the "first" digit
    if (i !== number.length-1) {
      fullNumber = ' '+fullNumber;    
    }
    
    //get the stringified digit and add to the full number
    fullNumber = numsAsStrings[number[i]] + fullNumber;
    */
    fullNumberArray[digitsPlace] = {number: number[i],
                                    group: tripletGroup};
  }

  for (var digitPlace=1; digitPlace<fullNumberArray.length; digitPlace++) {
    //
    if (digitPlace%3 === 0) {
      if (fullNumberArray[digitPlace].number !== '0') {
        fullNumber = numsAsStrings[fullNumberArray[digitPlace].number]+' hundred '+fullNumber;
      }
    } else if (digitPlace%3 === 2) { 
      if digitPlace
    } else if (digitPlace%3 === 1) {
      if (digitPlace===1) {
        fullNumber = numsAsStrings[fullNumberArray[digitPlace].number]+fullNumber; //no space after last digit in number
      } else {
        fullNumber = numsAsStrings[fullNumberArray[digitPlace].number]+' '+fullNumber;
      }
      
    }

  }
  console.log('fullNumber: '+fullNumber+'-')
  return fullNumber;
}

