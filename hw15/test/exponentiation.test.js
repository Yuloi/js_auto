const chai = require('chai');
const expect = chai.expect;
const Calculator = require('../application/calculator.js');

describe ('Testing Exponention method from Calculator class', function (){
/*     const testValues = [
        {intPositiveValues: [0,1,2], intPositiveResult: [0,1,4]},
        {intNegativeValues: [0,-1,-4], intNegativeResult: [0,1,16]},
        {floatNegativeValues: [-0.15], floatNegativeResult: [0.0225]},
        {floatPositiveValues: [12.7], floatPositiveResult: [161.29]},
        
    ]; */
    let calc = new Calculator();
    describe('Positive cases for Exponentiation method', function (){
        it('Function is able to exponent positive int', async function () {
			let result = calc.exponentiation(4);
			expect(result).to.be.equal(16);
		});
        it('Function is able to exponent negative int', async function () {
			let result = calc.exponentiation(-4);
			expect(result).to.be.equal(16);
		});
        it('Function is able to exponent positive float', async function () {
			let result = calc.exponentiation(0.98);
			expect(result).to.be.equal(0.9604);
		});
        it('Function is able to exponent negative float', async function () {
			let result = calc.exponentiation(-4.09);
			expect(result).to.be.equal(16.7281);
		});
        it('Function is able to exponent 0', async function () {
			let result = calc.exponentiation(0);
			expect(result).to.be.equal(0);
		});
	});
	describe('Negative cases for Exponentiation method', function () {
        it('Function is able to exponent .01', async function () {
			let result = calc.exponentiation(.01);
			expect(result).to.be.equal(0.0001);
		});
	});
});