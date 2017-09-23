/*
 * Programming Quiz: Writing a For...of Loop (1-4)
 */

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// Implementation

for (let day of days) {
	day = day.replace(/\b\w/g, l => l.toUpperCase());
	console.log(day);
}