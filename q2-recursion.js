// Input: [7, 9, "hi", 12, "hi" 7, 53]

// Output: [7, 9, "hi", 12, 53]

const dedupe = (startingArr) => {
    let result = [];

    const checkArray = (startingArr, index = 0) => {
        if(index >= startingArr.length) {
            return "";
        }

        if(result.includes(startingArr[index])) {
            checkArray(startingArr, (index + 1));
        } else {
            result.push(startingArr[index]);
            checkArray(startingArr, (index + 1));
        }
    }
    checkArray(startingArr);
    return result;
}

console.log("running");
console.log(dedupe([7, 9, "hi", 12, "hi", 7, 53]));