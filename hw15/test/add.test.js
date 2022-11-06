const chai = require('chai');
const expect = chai.expect
const Calculator = require('../calculator.js');

describe('Testing Add method from calculator class', () => {
    const calc = new Calculator()
    describe('Positive cases for Add method', ()=>{
        it('Sum of numbers more than 0 returns correct result', ()=>{
            let result = calc.add(1,2)
            expect(result).to.be.equal(3) // add function to get random numbers till 1000
        })
    })
    describe('Negative cases for Add method', ()=>{
        it('Sum of number less than 0 returns correct result', ()=>{
            let result = calc.add(-1,-4)
            expect(result).to.be.equal(-5)
        })
    })
})