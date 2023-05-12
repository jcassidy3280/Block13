

// // function booleanValue (myVar) {
// //     if (myVar) {
// //         console.log("true")
// //     } else {
// //         console.log(myVar + " is falsey")
// //     } }

// // booleanValue("i am a string")
// // booleanValue(null)

// function numberLine (num1, num2) {
//     let sum = num1 + num2
//     if (sum > 100) {
//         console.log(sum + ' is greater than 100')
//     } else if ( sum > 0 && sum < 100) {
//         console.log(sum + " is greater than 0")
//     } else if (sum == 0) {
//         console.log(sum + " is equal to 0")
//     } else if (sum < 0) {
//         console.log(sum + " is a negative number")
//     }
// }
// numberLine(50, 51)
// numberLine(99, -2)
// numberLine(0, 101)
// numberLine(500, -500)
// numberLine(-1000, 0)
// numberLine(-5, 0)

// function greaterThanFive (num1, num2) {
//     if (num1 >= 5 && num2 >= 5) {
//         console.log("true")
//     } else {
//             console.log("false")
//         }
//     }

// greaterThanFive(5, 6)
// greaterThanFive(10, 11)
// greaterThanFive(0, 0)
// greaterThanFive(1000, -1000)
// greaterThanFive(6, 4)
// greaterThanFive(5, 5)

function compare(param1A, param1B, param2A, param2B) {
    if (param1A === param1B || param2A === param2B) {
        console.log("true")
    } else {
        console.log("false")
    }
}
compare("cat", "cat", 6, "6")
compare("five", 5, "dog", "dawg")
compare(0, false, "horse", "horse")
compare("eight", "eight", "ate", "ate")
compare(11, "eleven", "four", "for")
compare("cake", "cake", "pie", "pie")