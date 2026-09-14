const learnerName = "Ana Santos";

const score1 = 90;
const score2 = 85;
const score3 = 88;

function calculateAverage(a, b, c) {
    // Return the average
    return ((a + b + c) / 3).toFixed(2);
}

function getResult(average) {
    // Return Passed if average is 75 or higher
    if (average >= 75) {
        return "Passed";
    } else {
        return "Failed";
    }
}

const average = calculateAverage(score1, score2, score3);

const result = getResult(average);

console.log(learnerName + " has an average of " + average + " and " + result + ".");