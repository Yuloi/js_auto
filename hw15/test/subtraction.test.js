const chai = require('chai');
const expect = chai.expect;
const Calculator = require('../application/calculator.js');

describe('Testing Subtraction method from calculator class', function () {
    let calc = new Calculator();
	describe('Positive cases for Subtraction method', function () {
		it('Function is able to subtract two possitive integers', async function () {
			let result = calc.subtraction(30,2);
			expect(result).to.be.equal(28);
		});
		it('Function is able to subtract two negative integers', async function (){
			let result = calc.subtraction(-2,-6);
			expect(result).to.equal(4);
		});
		it('Function is able to subtract positive int and negative int',async function (){
			let result = calc.subtraction(5,-2);
			expect(result).to.be.equal(7);
		});
		it('Function is able to subtract two positive float with the same amount of numbers after dot', async function (){
			let result = calc.subtraction(4.28, 0.14);
			expect(result).to.be.equal(4.14);
		});
		it('Function is able to subtract two negative float with different amount of numbers after dot',async function (){
			let result = calc.subtraction(-10.2,-2.55);
			expect(result).to.be.equal(-7.65);
		});
		it('Function is able to subtract negative float and positive int',async function (){
			let result = calc.subtraction(-0.98, 2);
			expect(result).to.be.equal(-2.98);
		});
		it('Function is able to subtract zero',async function (){
			let result = calc.subtraction(0,0);
			expect(result).to.be.equal(0);
		});
		it('Function is able to subtract zero and positive float',async function (){
			let result = calc.subtraction(0,0.3434);
			expect(result).to.be.equal(-0.3434);
		});
		it('Function is able to subtract zero and negative float', async function (){
			let result = calc.subtraction(-14.980, 0);
			expect(result).to.be.equal(-14.980);
		});
		it('Function is able to subtract zero and positive int',async function (){
			let result = calc.subtraction(0,10);
			expect(result).to.be.equal(-10);
		});
		it('Function is able to subtract zero and negative int', async function (){
			let result = calc.subtraction(0,-1);
			expect(result).to.be.equal(1);
		});
		it('Function is returning result for int as type number', async function () {
			let result = calc.subtraction(1,2);
			expect(result).to.be.a('number');
		});
        it('Function is returning result for float as type number', async function () {
			let result = calc.subtraction(1.12,2.345);
			expect(result).to.be.a('number');
		});
	});
	describe('Negative cases for Subtraction method', function () {
		it('Function is able to return correct result with actions inside brackets', async function () {
			let result = calc.subtraction((10 + 4) * 2,3 * 3);
			expect(result).to.be.equal(61);
		});
		it('Function is able to return correct result when passed only 1 param', async function () {
			let result = calc.subtraction(10);
			expect(result).to.be.equal(10);
		});
		it('Function is able to subtract float without 0 in the beginning .01 type', async function () {
			let result = calc.subtraction(.10, .10);
			expect(result).to.be.equal(0);
		});
		it('Function is returning 0 when no params passed', async function () {
			let result = calc.subtraction();
			expect(result).to.be.equal(0);
		});
        it('Function is able to subtract untransformed fraction', async function () {
			let result = calc.subtraction(1/5,4);
			expect(result).to.be.equal(-3.8);
		});
	});
});