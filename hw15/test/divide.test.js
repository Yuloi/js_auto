const chai = require('chai');
const expect = chai.expect;
const Calculator = require('../application/calculator.js');

describe('Testing Divide method from calculator class', function () {
    let calc = new Calculator();
	describe('Positive cases for Divide method', function () {
		it('Function is able to divide two possitive integers without remainder', async function () {
			let result = calc.divide(12,4);
			expect(result).to.be.equal(3);
		});
        it('Function is able to divide two possitive integers with remainder', async function () {
			let result = calc.divide(12,5);
			expect(result).to.be.equal(2.4);
		});
		it('Function is able to divide two negative integers without remainder', async function (){
			let result = calc.divide(-20,-2);
			expect(result).to.equal(10);
		});
        it('Function is able to divide two negative integers with remainder', async function () {
			let result = calc.divide(-4,-5);
			expect(result).to.be.equal(0.8);
		});
		it('Function is able to divide positive int and negative int', async function (){
			let result = calc.divide(6,-2);
			expect(result).to.be.equal(-13);
		});
		it('Function is able to divide two positive float with the same amount of numbers after dot', async function (){
			let result = calc.divide(4.28, 0.20);
			expect(result).to.be.equal(21.4);
		});
		it('Function is able to divide two negative float with different amount of numbers after dot', async function (){
			let result = calc.divide(-10.2,-2.0);
			expect(result).to.be.equal(5.1);
		});
		it('Function is able to divide zero and positive float', async function (){
			let result = calc.divide(0,0.3434);
			expect(result).to.be.equal(0);
		});
		it('Function is able to divide zero and negative float', async function (){
			let result = calc.divide(0,-12.23);
			expect(result).to.be.equal(0);
		});
		it('Function is able to divide zero and positive int', async function (){
			let result = calc.divide(0,10);
			expect(result).to.be.equal(0);
		});
		it('Function is able to divide zero and negative int', async function (){
			let result = calc.divide(0,-1);
			expect(result).to.be.equal(0);
		});
		it('Function is returning result for int as type number', async function () {
			let result = calc.divide(1,2);
			expect(result).to.be.a('number');
		});
        it('Function is returning result for float as type number', async function () {
			let result = calc.divide(1.12,2.345);
			expect(result).to.be.a('number');
		});
	});
	describe('Negative cases for divide method', function () {
		it('Dividing 0 by zero returns Nan', async function () {
			let result = calc.divide(0,0);
			expect(result).to.be.NaN;
		});
        it('Dividing positive int by zero returns +Infinity', async function () {
			let result = calc.divide(3,0);
			expect(result).to.be.finite;
		});
        it('Dividing negative int by zero returns -Infinity', async function () {
			let result = calc.divide(-3,0);
			expect(result).to.be.finite;
		});
		it('Function is able to return correct result with actions inside brackets', async function () {
			let result = calc.divide((3*2),2+3);
			expect(result).to.be.equal(1.2);
		});
		it('Function is able to divide float without 0 in the beginning .01 type', async function () {
			let result = calc.divide(.10, .10);
			expect(result).to.be.equal(1);
		});
		it('Function is returning 0 when no params passed', async function () {
			let result = calc.divide();
			expect(result).to.be.equal(0);
		});
        it('Function is able to divide untransformed fraction', async function () {
			let result = calc.divide(1/5,4);
			expect(result).to.be.equal(0.05);
		});
	});
});