/**
 * Typescript intro
 * - type coercion - not a bug but a feature
 */

let myString = 'here is my string'
myString = 12345

// console.log(myString)
const dataType = typeof(myString)
// console.log(dataType)

const newString = myString + 'more text here'
// console.log(newString)

const newDataType = typeof(newString)
// console.log(newDataType)

/**
 * Type Casting
 * - Changing the type of data
 */

let age = 35

const ageStr = String(age)
// console.log(typeof(ageStr))

const ageNbr = Number(ageStr)
// console.log(ageNbr, `${ageNbr} as a ${typeof(ageNbr)}`)

const myArray = [1,2,3,4,5,5,6]
const myObj = {name: 'test', age: 23}

console.log(typeof(myArray))  // object
console.log(typeof(myObj)) // object