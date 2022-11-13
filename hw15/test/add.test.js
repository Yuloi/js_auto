const chai = require('chai');
const expect = chai.expect;
const Calculator = require('../application/calculator.js');

describe('Testing Add method from calculator class', function() {
    let calc = new Calculator();
	describe('Positive cases for Add method', function() {
		it('Function is able to sum two possitive integers', async function() {
			let result = calc.add(1,2);
			expect(result).to.be.equal(3);
		});
		it('Function is able to sum two negative integers', function(){
			let result = calc.add(-10, -4);
			expect(result).to.equal(-14);
		});
		it('Function is able to sum positive int and negative int', function(){
			let result = calc.add(4,-1);
			expect(result).to.be.equal(3);
		});
		it('Function is able to sum two positive float with the same amount of numbers after dot', function(){
			let result = calc.add(4.28, 0.14);
			expect(result).to.be.equal(4.42);
		});
		it('Function is able to sum two negative float with different amount of numbers after dot', function(){
			let result = calc.add(-10.1, -2.245);
			expect(result).to.be.equal(-12.345);
		});
		it('Function is able to sum negative float and positive int', function(){
			let result = calc.add(-2.245, 1);
			expect(result).to.be.equal(-1.245);
		});
		it('Function is able to sum zero', function(){
			let result = calc.add(0);
			expect(result).to.be.equal(0);
		});
		it('Function is able to sum zero and float', function(){
			let result = calc.add(0,0.34);
			expect(result).to.be.equal(0.34);
		});
		it('Function is able to sum zero and positive float', function(){
			let result = calc.add(0,0.34);
			expect(result).to.be.equal(0.34);
		});
		it('Function is able to sum zero and negative float', function(){
			let result = calc.add(-14.980, 0);
			expect(result).to.be.equal(-14.980);
		});
		it('Function is able to sum zero and positive int', function(){
			let result = calc.add(0,10);
			expect(result).to.be.equal(10);
		});
		it('Function is able to sum zero and negative int', function(){
			let result = calc.add(0,-1);
			expect(result).to.be.equal(-1);
		});
		it('Function is able to sum big numbers', function(){
			let result = calc.add(10e5,50e2,32e2);
			expect(result).to.be.equal(1008200);
		});
		it('Function is able to sum floats with big amount of numbers after dot', function(){
			let result = calc.add(0.10, -0.1345, 34.12);
			expect(result).to.be.equal(34.0855);
		});
		it('Function is returning number as type number', async function() {
			let result = calc.add(1,2);
			expect(result).to.be.a('number');
		});
	});
	describe('Negative cases for Add method', function() {
		it('Function is able to return correct result when params passed as array', async function() {
			let result = calc.add([1,2]);
			expect(result).to.be.equal(3);
		});
		it('Function is able to return correct result with with actions inside brackets', async function() {
			let result = calc.add((1+2),3);
			expect(result).to.be.equal(6);
		});
		it('Function is able to return correct result when passed only 1 param', async function() {
			let result = calc.add(10);
			expect(result).to.be.equal(10);
		});
		it('Function is able to sum float without 0 in the beginning .01 type', async function() {
			let result = calc.add(.10, .10);
			expect(result).to.be.equal(0.20);
		});
		it('Function is returning 0 when no params passed', async function() {
			let result = calc.add();
			expect(result).to.be.equal(0);
		});
	});
});