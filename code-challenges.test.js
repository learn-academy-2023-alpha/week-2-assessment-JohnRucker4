// ASSESSMENT 2: Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// Pseudo Code: 
// List declarations/variables
// Create describe/it/expect statement for Jest test
// List expected output(s) - whether or not the inputs are divisible by 3
// Create function - divisibleBy3
// Create (object) as parameter
// Using object deconstruction, let {number} = object
// Create if/else conditionals - if(number % 3 === 0){
//     return `${number} is divisible by three`
// }else if(number % 3 !== 0){
//     return `${number} is not divisible by three`
// }else {
//     return "something went wrong"

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

describe("divisibleBy3", () => {
    it("returns whether or not the numbers are divisible by three", () => {
      expect(divisibleBy3(object1)).toEqual("15 is divisible by three")
      expect(divisibleBy3(object2)).toEqual("0 is divisible by three")
      expect(divisibleBy3(object3)).toEqual("-7 is not divisible by three")
    })
  })

//   ReferenceError: divisibleBy3 is not defined

//    26 | describe("divisibleBy3", () => {
//    27 |     it("returns whether or not the numbers are divisible by three", () => {
//  > 28 |       expect(divisibleBy3(object1)).toEqual("15 is divisible by three")
//       |       ^
//   29 |       expect(divisibleBy3(object2)).toEqual("0 is divisible by three")
//   30 |       expect(divisibleBy3(object3)).toEqual("-7 is not divisible by three")
//   31 |     })

// // //   at Object.expect (code-challenges.test.js:28:7)

// // // Test Suites: 1 failed, 1 total
// // // Tests:       1 failed, 1 total

// // // b) Create the function that makes the test pass.

const divisibleBy3 = (object) => {   
    let {number} = object 
    if(number % 3 === 0){
        return `${number} is divisible by three`
    }else if(number % 3 !== 0){
        return `${number} is not divisible by three`
    }else {
        return "something went wrong"
    }
}
    

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// Pseudo Code: 
// List declarations/variables
// Create describe/it/expect statement for Jest test
// List expected output(s) - captialized words
// Create function - capWords
// Use (array) as parameter
// Use array.map as return to iterate the specified value
// Return the zero-index value with .toUpperCase then combine the rest of the word with .substring, starting  at the first index


// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

describe("capWords", () => {
    it("returns an array with all the words capitalized", () => {
      expect(capWords(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
      expect(capWords(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
  })

//   ReferenceError: capWords is not defined

//   95 | describe("capWords", () => {
//   96 |     it("returns an array with all the words capitalized", () => {
// >  97 |       expect(capWords(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//      |       ^
//   98 |       expect(capWords(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
//   99 |     })
//  100 |   })

//  at Object.expect (code-challenges.test.js:97:7)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

  // b) Create the function that makes the test pass.

const capWords = (array) => {
    return array.map((value) => {
        return value[0].toUpperCase() + value.substring(1)
    })
}
// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// Pseudo Code:
// List declarations/variables
// Create describe/it/expect statement for Jest test
// List expected output(s) - whether or not the inputs are divisible by 3
// Create function - firstVowels
// Create "string" parameter for dynamic code
// Let vowels = ["a", "e", "i", "o", "u"], to find the index of the first vowels
// Use For Loops to search the entire length of the indexed string
// Use if statement and vowels.includes to find the vowels and their indexes
// Return the first indexed vowel

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

describe("firstVowels", () => {
    it("returns log of the index of the first vowel", () => {
      expect(firstVowels(vowelTester1)).toEqual(1)
      expect(firstVowels(vowelTester2)).toEqual(0)
      expect(firstVowels(vowelTester3)).toEqual(2)
    })
  })

//   ReferenceError: firstVowels is not defined

//   149 | describe("firstVowels", () => {
//   150 |     it("returns log of the index of the first vowel", () => {
// > 151 |       expect(firstVowels(vowelTester1)).toEqual("1")
//       |       ^
//   152 |       expect(firstVowels(vowelTester2)).toEqual("0")
//   153 |       expect(firstVowels(vowelTester3)).toEqual("2")
//   154 |     })

//   at Object.expect (code-challenges.test.js:151:7)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// b) Create the function that makes the test pass.

const firstVowels = (string) => {
    let vowels = ["a", "e", "i", "o", "u"]
    for (let i=0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            return i
        }
    }
}

//*Feedback Request* I had an especially difficult time with this one.  It was explained to me, but I'm still not quite grasping it.  I understand that in order to find the index, I'll need to first change the string into an array.  I set a variable in order to isolate the vowels.  Using For Loops, I search the length of the string.  Setting the if statement, I use the vowels.includes method to look in the string placeholder and its index.  I want just the index returned.  I feel like I'm missing something because it just isn't clicking. Shouldn't it spit out all of the vowels/indexes? Where did I single out only the first vowel of the string?

// divisibleBy3
// ✓ returns whether or not the numbers are divisible by three (1 ms)
// capWords
// ✓ returns an array with all the words capitalized
// firstVowels
// ✓ returns log of the index of the first vowel

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total