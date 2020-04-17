// Input: [7, 9, "hi", 12, "hi" 7, 53]
// Output: [7, 9, "hi", 12, 53]

const checkArray = (startingArr, index = 0, result = []) => {
	const currentResult = [ ...result ];

	//end condition
	if (index >= startingArr.length) {
		return currentResult;
	}

	if (currentResult.includes(startingArr[index])) {
		return checkArray(startingArr, index + 1, result);
	} else {
		// result.push(startingArr[index]);
		const newResult = [ ...result, startingArr[index] ];
		return checkArray(startingArr, index + 1, newResult);
	}
};

console.log('running');
console.log(checkArray([ 7, 9, 'hi', 12, 'hi', 7, 53 ]));
