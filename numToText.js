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
    '0': 'zero'
  };

var numToText = function(str) {

  var convertedStr = '';
  convertStr(str,'');

  function convertStr(str, currentNum) {
    //base case if the str is completely iterated
    if (str.length === 0) {
      return
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
        var fullNumberAsString = 'TEST'
        //function to assign str to full number
        convertedStr = convertedStr.concat(fullNumberAsString).concat(firstChar);
        currentNum = '';
      } else {
        convertedStr = convertedStr.concat(firstChar);
      }
    }
    
    //recursively call helper fn with str minus the first character
    return convertStr(str.slice(1),currentNum)
  }

  return convertedStr;

};
