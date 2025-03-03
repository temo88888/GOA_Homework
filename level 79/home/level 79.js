let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log(`საბოლოო რიცხვების ჯამი არის ${sum}`);


//neeeeeeeeeeeeeewwwwwwwwww

for (let i = 1; i <= 10; i++) {
    let square = i * i;
    console.log(`${i} - ის კვადრატი არის ${square}`);
}


//neeeeeeeeeeeeeeewwwwwwwwwwwww

let str = "გამარჯობა";

for (let i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
}

//neeeeeeeeeeeeeeeeeeeeeeerrrrrrrrrrrrrr

const number = parseInt(prompt("Enter a number:")); 

if (isNaN(number)) {
    console.log("Please enter a valid number.");
} else {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz");
    } else if (number % 3 === 0) {
        console.log("Fizz");
    } else if (number % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(number);
    }
}