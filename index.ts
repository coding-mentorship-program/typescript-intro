/**
 * Typescript intro
 */

// const firstName = 'John' // implicit
const firstName: string = 'John' // explicit
// let myAge: number | string | boolean | null | undefined = 34

// let myAge: any = 34 // should not use this
let myAge: number = 34 // should not use this

myAge = 39 // should not use this

// myAge = 'some text' // this fails

//@ts-ignore
myAge = 'twenty 4'

// myAge = true
// myAge = null
// myAge = undefined

const newTest = myAge + 'testing here'

console.log(newTest)

/**
 * Objects
 * There are 2 ways to declare the shape of an object
 * 1. Type - limitations / restricted
 * 2. Interface - more flexible
 */

// 1. type (needs '=' equal sign)
type TBird = {
	wings: number
	beak: boolean
	feathers: number | string
	color?: string
}

const bird1: TBird = { wings: 2, beak: true, feathers: 2000 }
const bird2: TBird = { wings: 3, beak: false, feathers: 4, color: 'darkblue' }
const bird3: TBird = { wings: 30, beak: false, feathers: 'none', color: 'darkblue' }

// 2. Interface

import { IEtableBirds, IBird } from './interfaces'

let owl: IBird = {
	wings: 2,
	nocturnal: true,
	family: ['Joe', 'Jane', 'Jack'],
	phones: ['12345', 123456, true],
	flies: true,
}

let chicken: IEtableBirds = {
	wings: 2,
	nocturnal: true,
	colorful: false,
	family: ['Joe', 'Jane', 'Jack'],
	phones: ['12345', 123456, true],
	flies: false,
	etable: true,
}

let eagle: IEtableBirds = {
	wings: 2,
	nocturnal: true,
	colorful: false,
	family: ['Joe', 'Jane', 'Jack'],
	phones: ['12345', 123456, true],
	flies: false,
	etable: true,
	hasKilled: [
		{ type: 'racoon', weight: 12, color: 'darkbrown' },
		{ type: 'rat', weight: 1, color: 'black' },
		{ type: 'puppy', weight: 2, color: 'yellow' },
	],
}
