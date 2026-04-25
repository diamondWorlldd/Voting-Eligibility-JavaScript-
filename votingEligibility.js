let ageInput = prompt("Please enter your age to check your voting eligibility:");

let userAge = Number(ageInput);

if (isNaN(userAge)) {
    console.log("Error: Please enter a valid number for your age. ⚠️");
} else if (userAge >= 18) {
    console.log("You are " + userAge + " years old. You're eligible to vote! ✅");
} else {
    console.log("You are " + userAge + " years old. You aren't eligible to vote yet. ❌");
}
