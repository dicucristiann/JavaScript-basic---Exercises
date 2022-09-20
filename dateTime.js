//!Exercise 1

// Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

var today = new Date();
var day = today.getDay();
var dayList = ["Monday ", "Tuesday", "Thursday", "Friday", "Saturday", " Sunday"];
console.log('Today is: ' + dayList[day]);

var hour = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
var periods = (hour >= 12) ? "PM" : "AM"
hour = (hour >= 12) ? hour - 12 : hour;

if (hour === 0 && periods === "PM") {
    if (minutes === 0 && seconds ===0) {
    hour = 12;
    periods = "Noon";
    }else {
        hour = 12
        periods = "PM"
    }
    if (hour === 0 && periods === "AM") {
        if (minutes === 0 && seconds ===0) {
        hour = 12;
        periods = "Morning";
        }else {
            hour = 12
            periods = "AM"
        }
    } 
} 
console.log('Current time: ' + hour + periods + ":" + minutes + ":" + seconds);