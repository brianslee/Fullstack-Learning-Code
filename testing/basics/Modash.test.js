// We write the tests for the Modash library in
// this file in the Unit Testing chapter
import Modash from './Modash';

//Truncate test original
/*const string = 'there was one catch, and that was CATCH-22';
const actual = Modash.truncate(string, 19);
const expected = 'there was one catch...';

if(actual !== expected)
{
	console.log(`[FAIL] Expected \`truncate()\` to return '${expected}', got '${actual}'`);
}
else
{
	console.log('[PASS] `truncate()`.');
}*/

//Assert Equals function
function assertEqual(description, actual, expected)
{
	if(actual === expected)
	{
		console.log(`[PASS] ${description}`);
	}
	else
	{
		console.log(`[FAIL] ${description}`);
		console.log(`\tactual: '${actual}'`);
		console.log(`\texpected: '${expected}'`);
	}
}

//Second truncate test
/*
let actual;
let expected;
let string;

string = 'there was one catch, and that was CATCH-22';
actual = Modash.truncate(string, 19);
expected = 'there was one catch...';

assertEqual('`truncate()`: truncates a string', actual, expected);

//Third truncate test
actual = Modash.truncate(string, string.length);
expected = string;

assertEqual('`truncate()`: no-ops if <= length', actual, expected);
*/
//Capitalize test
/*
actual = Modash.capitalize(string);
expected = 'There was one catch, and that was catch-22';

assertEqual('`capitalize()`: capitalizes start of string, lowercase rest', actual, expected);
*/

//Camel Case test
/*
string = 'customer responded at';
actual = Modash.camelCase(string);
expected = 'customerRespondedAt';

assertEqual('`camelCase()`: string with spaces', actual, expected);

//Camel Case underscore test
string = 'customer_responded_at';
actual = Modash.camelCase(string);
expected = 'customerRespondedAt';

assertEqual('`camelCase()`: string with underscores', actual, expected);
*/
describe('My test suite', () => {
	it('`true` should be `true`', () => {
		expect(true).toBe(true);
	});

	it('`false` should be `false`', () => {
		expect(false).toBe(false);
	});
});

//Describe block one
/*
describe('Modash', () => {
	it('`truncate()`: truncates a string', () => {
		const string = 'there was one catch, and that was CATCH-22';
		expect(
			Modash.truncate(string, 19)
		).toEqual('there was one catch...');
	});
});
*/

describe('Modash', () => {
	//Truncate specs
	describe('`truncates()`', () => {
		const string = 'there was one catch, and that was CATCH-22';

		it('truncates a string', () => {
			expect(
				Modash.truncate(string, 19)
			).toEqual('there was one catch...');
		});

		it('no-ops if <= length', () => {
			expect(
				Modash.truncate(string, string.length)
			).toEqual(string);
		});
	});

	//Capitalize specs
	describe('`capitalize()`', () => {
		it('capitalizes first letter, lowercases rest', () => {
			const string = 'there was one catch, and that was CATCH-22';
			expect(
				Modash.capitalize(string)
			).toEqual('There was one catch, and that was catch-22');
		});
	});

	//CamelCase specs
	describe('`camelCase()`', () => {
		it('capitalizes string with spaces', () => {
			const string = 'customer responded at';
			expect(
				Modash.camelCase(string)
			).toEqual('customerRespondedAt');
		});

		it('camelizes string with underscores', () => {
			const string = 'customer_responded_at';
			expect(
				Modash.camelCase(string)
			).toEqual('customerRespondedAt');
		});
	});
});