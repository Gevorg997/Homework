//1. Given three numbers a, b (a ≤ b) and step. Create an array of evenly spaced elements starting from a to b spaced by step.

let a = +prompt('a')
let b = +prompt('b')
let step = +prompt('step')
var arr = []

for(let i = a; i <= b; i += step ){
    arr.push(i)
}
console.log(arr)

//2. Given a string and a symbol. Find the number of occurrences of the symbol in the string.

function charInStr(str, char) {
    let count = 0
    for(let i = 0; i <str.length; i++){
        if(str[i] === char){
            count++
        }
    }
    return count
}

//3. Given a string. Check whether the string is palindrome or not.

function isPalindrome(st) {
let h = st.length
    for(let i = 0; i < h/2; i++){
        if(st[i] != st[h-1-i]){
            return false
        }
    }
    return true
}

//4.  Given an array of numbers. Find the maximum element in array.

var arr = [1, 10, 2, 2, 3]
let max = 0

for(let i = 0; i < arr.length ; i++){
    max = Math.max(arr[i] , max)
}
console.log( max)

//5. Given an array. Create the array which elements are products between two neighbours.

var arr = [1,2,3,4,5,6,7,8,9]
var ar = []

for(let i = 0; i < arr.length - 1 ; i++){
    ar.push(arr[i] * arr[i+1])
}
console.log(ar)

//6. Given a string and symbols. Change first symbol by the second one in the string. 

function rep(str,s1,s2) {
    let str2 =''
    for(i=0; i < str.length; i++){
        if(str[i] !== s1){
            str2 += str[i]
        } else {
            str2 += s2
        }
    }
 return str2
}

//7. Print the following number pattern: 
  1
	12
	123
	1234
	12345
	1234
	123
	12
	1

let n = +prompt('Insert number from 1 to 9')
let num = 0
for(i = 1; i <= n; i++) {
    num += i*Math.pow(10,n-i)
}
// for 12345, just insert 5
for(i = 1; i <= num; i = 10*i + i%10 + 1){
    console.log(i)
   }
for(j = Math.trunc(num/10); j >= 1; j = (j - j%10)/10){
    console.log(j)
   }























 
