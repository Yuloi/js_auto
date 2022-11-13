const chai = require('chai');
const expect = chai.expect;
const Calculator = require('../application/calculator.js');

describe('Testing Multiply method from calculator class', function () {
    let calc = new Calculator();
	describe('Positive cases for Multiply method', function () {
		it('Function is able to multiply two possitive integers', async function () {
			let result = calc.multiply(4,3);
			expect(result).to.be.equal(12);
		});
		it('Function is able to multiply two negative integers',async function (){
			let result = calc.multiply(-10, -4);
			expect(result).to.equal(40);
		});
		it('Function is able to multiply positive int and negative int',async function (){
			let result = calc.multiply(5,-2);
			expect(result).to.be.equal(-10);
		});
		it('Function is able to multiply two positive float with the same amount of numbers after dot',async function (){
			let result = calc.multiply(4.28, 0.14);
			expect(result).to.be.equal(0.5992);
		});
		it('Function is able to multiply two negative float with different amount of numbers after dot',async function (){
			let result = calc.multiply(-10.2,-2.51);
			expect(result).to.be.equal(25.602);
		});
		it('Function is able to multiply negative float and positive int',async function (){
			let result = calc.multiply(-0.98, 11);
			expect(result).to.be.equal(-10.78);
		});
		it('Function is able to multiply zero',async function (){
			let result = calc.multiply(0);
			expect(result).to.be.equal(0);
		});
		it('Function is able to multiply zero and positive float',async function (){
			let result = calc.multiply(0,0.3434);
			expect(result).to.be.equal(0);
		});
		it('Function is able to multiply zero and negative float',async function (){
			let result = calc.multiply(-14.980, 0);
			expect(result).to.be.equal(0);
		});
		it('Function is able to multiply zero and positive int',async function (){
			let result = calc.multiply(0,10);
			expect(result).to.be.equal(0);
		});
		it('Function is able to multiply zero and negative int',async function (){
			let result = calc.multiply(0,-1);
			expect(result).to.be.equal(0);
		});
		it('Function is able to multiply multiple floats',async function (){
			let result = calc.multiply(0.10, -0.15, 5.12);
			expect(result).to.be.equal(-0.0768);
		});
		it('Function is returning result for int as type number', async function () {
			let result = calc.multiply(1,2);
			expect(result).to.be.a('number');
		});
        it('Function is returning result for float as type number', async function () {
			let result = calc.multiply(1.12,2.345);
			expect(result).to.be.a('number');
		});
	});
	describe('Negative cases for multiply method', function () {
		it('Function is able to return correct result when params passed as array', async function () {
			let result = calc.multiply([1,2]);
			expect(result).to.be.equal(2);
		});
		it('Function is able to return correct result with actions inside brackets', async function () {
			let result = calc.multiply((3*2),3 * 3);
			expect(result).to.be.equal(54);
		});
		it('Function is able to return correct result when passed only 1 param', async function () {
			let result = calc.multiply(10);
			expect(result).to.be.equal(10);
		});
		it('Function is able to multiply float without 0 in the beginning .01 type', async function () {
			let result = calc.multiply(.10, .10);
			expect(result).to.be.equal(0.01);
		});
		it('Function is returning 0 when no params passed', async function () {
			let result = calc.multiply();
			expect(result).to.be.equal(0);
		});
        it('Function is able to multiply untransformed fraction', async function () {
			let result = calc.multiply(1/5,4);
			expect(result).to.be.equal(0.8);
		});
	});
});