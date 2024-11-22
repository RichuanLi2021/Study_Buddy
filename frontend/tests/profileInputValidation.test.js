import render from "@testing-library/react-native";
import { validateName, validatePhone, validateUniversity, validateMajor, validateYear } from '@/components/profile/InputValidation/Input_Validation'


{/* validateName function tests */}


it('given a properly formatted name of 3 letters, validateName returns true', () => {
    expect(validateName('Tes')).toBe(true);
});

it('given a properly formatted name of 16 letters, validateName returns true', () => {
    expect(validateName('Testtesttesttest')).toBe(true);
});

it('given a name of < 3 letters, validateName returns false', () => {
    expect(validateName('Te')).toBe(false);
});

it('given an empty name, validateName returns false', () => {
    expect(validateName('')).toBe(false);
});

it('given a name of > 16 letters, validateName returns false', () => {
    expect(validateName('Testtesttesttestt')).toBe(false);
});

it('given a name with numbers in it, validateName returns false', () => {
    expect(validateName('Test1')).toBe(false);
});

it('given a name with symbols in it, validateName returns false', () => {
    expect(validateName('Test@')).toBe(false);
});


{/* validatePhone function tests */}


it('given a properly formatted phone number, validatePhone returns true', () => {
    expect(validatePhone('0001112222')).toBe(true);
});

it('given an empty phone number, validatePhone returns false', () => {
    expect(validatePhone('')).toBe(false);
});

it('given a phone number with letters in it, validatePhone returns false', () => {
    expect(validatePhone('aaabbbcccc')).toBe(false);
});

it('given a phone number with symbols in it, validatePhone returns false', () => {
    expect(validatePhone('###@@@&&&&')).toBe(false);
});

it('given a phone number with less than 10 digits in it, validatePhone returns false', () => {
    expect(validatePhone('012345678')).toBe(false);
});


{/* validateUniversity function tests */}


it('given a properly formatted university name of 3 words less than 49 letters, validateUniversity returns true', () => {
    expect(validateUniversity('St Marys University')).toBe(true);
});

it('given a properly formatted university name of 2 words less than 49 letters, validateUniversity returns true', () => {
    expect(validateUniversity('Dalhousie University')).toBe(true);
});

it('given a properly formatted university name of 1 word less than 49 letters, validateUniversity returns true', () => {
    expect(validateUniversity('Dalhousie')).toBe(true);
});

it('given a university name of more than 49 letters, validateUniversity returns false', () => {
    expect(validateUniversity('Abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz')).toBe(false);
});

it('given a university name with numbers, validateUniversity returns false', () => {
    expect(validateUniversity('123 University')).toBe(false);
});

it('given a university name with symbols, validateUniversity returns false', () => {
    expect(validateUniversity('@ University')).toBe(false);
});

it('given an empty university name, validateUniversity returns false', () => {
    expect(validateUniversity('')).toBe(false);
});


{/* validateMajor function tests*/}


it('given a properly formatted major name of 2 words and less than 33 letters, validateMajor returns true', () => {
    expect(validateMajor('Computer Science')).toBe(true);
});

it('given a properly formatted major name of 1 word and less than 33 letters, validateMajor returns true', () => {
    expect(validateMajor('Biology')).toBe(true);
});

it('given an empty major name, validateMajor returns false', () => {
    expect(validateMajor('')).toBe(false);
});

it('given a major name with numbers, validateMajor returns false', () => {
    expect(validateMajor('Biology1')).toBe(false);
});

it('given a major name with symbols, validateMajor returns false', () => {
    expect(validateMajor('Biology@')).toBe(false);
});


{/* validateYear function tests */}


it('given a year as a single digit between 1 and 4, validateYear returns true', () => {
    expect(validateYear('1')).toBe(true);
    expect(validateYear('2')).toBe(true);
    expect(validateYear('3')).toBe(true);
    expect(validateYear('4')).toBe(true);
});

it('given an empty year, validateYear returns false', () => {
    expect(validateYear('')).toBe(false);
});

it('given a year less than 1 or greater than 4, validateYear returns false', () => {
    expect(validateYear('0')).toBe(false);
    expect(validateYear('-1')).toBe(false);
    expect(validateYear('5')).toBe(false);
});

it('given a year with a letter, validateYear returns false', () => {
    expect(validateYear('a')).toBe(false);
});

it('given a year with a symbol, validateYear returns false', () => {
    expect(validateYear('@')).toBe(false);
});

it('given a year with multiple digits, validateYear returns false', () => {
    expect(validateYear('11')).toBe(false);
});