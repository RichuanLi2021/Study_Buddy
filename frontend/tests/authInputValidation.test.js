import render from "@testing-library/react-native";
import { validateEmail, validatePassword } from '@/components/auth/InputValidation/Input_validation'

it('given a properly formatted email address, validateEmail returns true', () => {
    expect(validateEmail('test@hotmail.com')).toBe(true);
});

it('given a properly formatted email address with numbers, validateEmail returns true', () => {
    expect(validateEmail('test123@gmail.com')).toBe(true);
});

it('given an email with no @, validateEmail returns false', () => {
    expect(validateEmail('testhotmail.com')).toBe(false);
});

it('given an email address with no ., validateEmail returns false', () => {
    expect(validateEmail('test@hotmailcom')).toBe(false);
});

it('given an email address ending with a ., validateEmail returns false', () => {
    expect(validateEmail('test@hotmail.')).toBe(false);
});

it('given an email address starting with an @, validateEmail returns false', () => {
    expect(validateEmail('@hotmail.com')).toBe(false);
});

it('given an email address starting with nothing between @ and ., validateEmail returns false', () => {
    expect(validateEmail('test@.com')).toBe(false);
});

it('given a properly formatted password, validatePassword returns true', () => {
    expect(validatePassword('Password123!')).toBe(true);
});

it('given a password with no symbol, validatePassword returns false', () => {
    expect(validatePassword('Password123')).toBe(false);
});

it('given a password with no numbers, validatePassword returns false', () => {
    expect(validatePassword('Password!')).toBe(false);
});

it('given a password with no capitals, validatePassword returns false', () => {
    expect(validatePassword('password123!')).toBe(false);
});

it('given a password with less than 8 characters, validatePassword returns false', () => {
    expect(validatePassword('Pass12!')).toBe(false);
});

it('given a password with 8 characters, validatePassword returns true', () => {
    expect(validatePassword('Pass123!')).toBe(true);
});