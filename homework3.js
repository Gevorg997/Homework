//1.	Given an array․ Compute the length of the array. (without using .length)

var arr = [1 , 2 , 3 , 4 , 5 , 6 , 7]
let length = 0

while(arr.pop()) {
      length++
}
console.log(length)


//2. Given an array of numbers. Print the sum of the elements in array.

var arr2 = [1 , 2 , 3 , 7 , 12]
let sum = 0

while(arr2.length) {
      sum += arr2.pop()
}
console.log(sum)

//3. Given two numbers. Print powers of 2 between that numbers. (without using Math.pow)

let num1 = +prompt('Input 1st number')
let num2 = +prompt('Input 2nd number')
let n1 = 0
let n2 = 0
let pow = 1

while(num1 > 1) {
    n1++
    num1 = num1 / 2
   } 
while(num2 > 1) {
    n2++
    num2 = num2 / 2
    } 

for(let i = 1;  i < n2; i++) {
    pow *= 2
    if(i >= n1) {
       console.log(pow)
    }
}

//4.Given a number as input, insert dashes (-) between each two even numbers. 
let x = prompt('number')
let y = ''
for(let i = 0; i < x.length; i++) {
     y += x[i]
    if(+x[i] % 2 == 0 && + +x[i+1] % 2 == 0 ) {
        y += '-'          
        }
    }  
console.log(y)

//5. Insert a n positive number. Print the n-st prime number.

function prime(x) {
let arr = []

for(let i = 2; i < 10*x; i++){
    arr.push(i)
    for(let j = 2; j < i ; j++){
        if(i % j == 0){
            arr.pop()
            break
        }    
    }
}
console.log(arr)
}
























