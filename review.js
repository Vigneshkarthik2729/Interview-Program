// sum of digit number

var value = 2538,
    sum = 0;
sem = 0;

while (value) {
    sem = value % 10;
    sum += sem;
    value = (value - sem) / 10
}

console.log(sum);


//asending order in array

var asen = [12, 38, 2, 54, 77, 13, 4, 10, 41, 67];
asen.sort(function (a, b) {
    return a - b;
})
console.log(asen);



//Using javascript Email validation or not

var mail = prompt('Please enter a valid email address');
function emailId() {

    if (mail.includes("@gmail.com")) {
        console.log("valid");
    } else {
        console.log("invalid");
    }
}

emailId();