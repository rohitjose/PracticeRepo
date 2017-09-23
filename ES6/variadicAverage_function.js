/*
 * Programming Quiz: Using the Rest Parameter (1-5)
 */

// your code goes here

function average(...nums) {

	let avg = 0;

	for (const num of nums) {
		avg += num;
	}

	return (avg > 0) ? avg / nums.length : 0;

}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());