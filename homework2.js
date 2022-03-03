//1. For a given number calculate the sum of its digits.

let num = 12345
let sum = 0 

while(num!==0) {
    sum += num%10
    num = (num - num%10)/10
    }
console.log(sum)


//2. Given three sides of a triangle. Check whether the triangle is valid or not. Print “yes” if it is valid
//and “no" otherwise. (Triangle is valid if the sum of its two sides are greater than the third side).

let a = +prompt('Side1')
let b = +prompt('Side2')
let c = +prompt('Side3')

if(a + b > c && a + c > b && b + c > a) {
    alert("It's a triangle")
} else {
    alert("It's not a triangle")
}


//3. Given a number, print its digits count.

let num = 123456
let count = 0 

if(num === 0) {
    console.log('The count is 1')
} else {
while(num!==0) {
     count++
     num = (num - num%10)/10
    }
console.log(`The count is ${count}`)
}


//4. Count numbers of digit 9 in a number.

let n = 9192939
let count9 = 0 

while(n!==0) {
     if(Math.abs(n%10) == 9) {
     count9++
     }
    n = (n - n%10)/10
}
console.log(count9)


//5. Given a positive number. Print it in reverse order.

let num = 4321
let rev = 0

while(num!==0) {
    rev = rev*10 + num%10
    num = (num-num%10)/10
}
console.log(rev)
















