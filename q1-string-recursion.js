// Input: "Jasmine Ann Jones"
// Output: "Jasmine%20Ann%Jones"

const cleanThisString = (stringToClean, index = 0, cleanString = '') => {
	if (index >= stringToClean.length) {
		return cleanString;
	}

	if (stringToClean[index] === ' ') {
		cleanString += '%20';
	} else {
		cleanString += stringToClean[index];
	}
	return cleanThisString(stringToClean, index + 1, cleanString);
};

console.log('Running. . .');
console.log(cleanThisString('Jasmine Ann Jones'));
