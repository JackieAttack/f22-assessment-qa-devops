const {shuffleArray} = require('./utils')

let testArr = [1, 2, 3, 4, 5]

describe('shuffleArray should', () => {

    test("return an array", () => {
        let returned = shuffleArray(testArr)
        expect(Array.isArray(returned)).toBe(true)
    }) 

    test("contains all the same values", () => {
        let returned = shuffleArray(testArr)
        for(let i = 0; i < testArr.length; i++) {
            expect(returned.includes(testArr[i])).toBe(true)
        }
    })
})