/* Create a function using recursion called numToText which takes a string and returns a new string with all numeric numbers from the input string converted to their corresponding text words. You can assume that the numbers in the string are single digit nubmers. Can you implement this function in two different ways? One way involves creating an inner helper function (or subroutine), the other way does not use an inner function.

Extra Credit: Have the function handle numbers of any digit size.

Ex: numToText("I have 5 dogs and 6 ponies"); // returns "I have five dogs and six ponies"

*/

var numToText = function(str) {

/*
assign a variable object withs keys of numbers and their elements as the
stringified version of those numbers
i.e. 	{1: 'one',
		 2: 'two',
		 etc.
		 }



base case > if str.length = 0
	return

otherwise
	check the first character in str > if it matches a key in the obj, replace
	with the appropriate stringified number and push to results string
	if not, push string to results string

	recursively call function with str shortened





*/
};
