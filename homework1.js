//1.	Declare 2 variables a and b, such that a > b, and define values for them. Output their 
//a.	sum
//b.	difference (between a and b)
//c.	product
//d.	quotient (between a and b)
//e.	remainder (between a and b)

let a = 14 , b = 5
let sum = a + b , dif = a - b , prod = a * b , quot = a / b  , rem = a % b

alert(sum)
alert(dif)
alert(prod)
alert(quot)
alert(rem)

//or 
let a = +prompt('number1')
let b = +prompt('number2')
let sum = a + b , dif = a - b , prod = a * b , quot = a / b  , rem = a % b

alert(sum)
alert(dif)
alert(prod)
alert(quot)
alert(rem)


//2.	Print your name and age in the following format: “My name is ____, I am ____ .”

let name = prompt("What's your name?")
let age = prompt('How old are you?') 

console.log("My name is " + name + ' , I am ' + age + '.')

//3.	Declare a variable with defined value. Print the last digit of the number. 

let n = 78756 
let lastDigit = n % 10

alert(lastDigit)

//or

let num = prompt('Input number')
let lastDigit = num % 10
alert(lastDigit)

//4.	Check whether a given number is negative. Print “yes”, if it is negative, print “no” otherwise.

let num = prompt('Input number')
num < 0 ? 'yes' : 'no'

//or 

let num = prompt('Input number')
if(num < 0) {
    alert('yes')
} else {
    alert('no')
}

//5.	Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.

let number1 = +prompt('Input 1st number')
let number2 = +prompt('Input 2nd number')

if(number1 % number2 === 0) {
    alert(1) 
} else if(number2 % number1 === 0) {
    alert(1)
} else {
    alert(0) 
}


//6.	Given any number between 1 and 12. Print the name of the respective month.

const number = +prompt("Input month's number")

switch(number) {
    case 1 : {
        alert('January')
    }
    case 2 : {
        alert('February')
        break
    }
    case 3 : {
        alert('March')
    }  break
    case 4 : {
        alert('April')
        break
    }
    case 5 : {
        alert('May')
        break
    }
    case 6 : {
        alert('June') 
        break
    }
    case 7 : {
        alert('July')
        break
    }
    case 8 : {
        alert('August')
        break
    }
    case 9 : {
        alert('September')
        break
    }
    case 10 : {
        alert('October') 
        break
    }
    case 11 : {
        alert('November')
        break
    }
    case 12 : {
        alert('December') 
        break
    }  
        default :
            alert('wrong number')
            break
        
}  


//7.	Given three numbers. Find the maximum one.

const num1 = +prompt('1st number')
const num2 = +prompt('2nd number')
const num3 = +prompt('3rd number')

if(num1 >= num2 && num1 >= num3) {
    alert(num1)
} else if(num2 >= num3) {
    alert(num2)
} else {
    alert (num3)
}























