// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

// Example
// Input: "Jasmine Ann Jones"
// Output: "Jasmine%20Ann%Jones"

const cleanString = (urlToClear) => {
	let result = urlToClear
		.split('')
		.map((letter) => {
			if (letter === ' ') {
				return '%20';
			} else {
				return letter;
			}
		})
		.join('');

	return result;
};

console.log('running');
console.log(cleanString('Jasmine Ann Jones'));
