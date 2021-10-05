// const { test } = require("@jest/globals");
const Employee = require("../lib/Employee");

test('If we create a "new" Employee is should make a new object', () => {
    const testObj = new Employee()

    expect(typeof(testObj)).toBe('object')
})

test('Adding a string to the first paramater creates a value for the property name of the object', () => {
    const testObj = new Employee('Haley')

    expect(testObj.name).toBe('Haley')
})

test('Adding a string to the first paramater creates a value for the property id of the object', () => {
    const testObj = new Employee('1234')

    expect(testObj.id).toBe('1234')
})

test('Adding a string to the first paramater creates a value for the property email of the object', () => {
    const testObj = new Employee('haley@gmail.com')

    expect(testObj.email).toBe('haley@gmail.com')
})

test('Adding a string to the first paramater creates a value for the property name function of the object', () => {
    const testObj = new Employee('Haley')

    expect(testObj.getName()).toBe('Haley')
})

test('Adding a string to the first paramater creates a value for the property id of the object', () => {
    const testObj = new Employee('Haley')

    expect(testObj.getId()).toBe('1234')
})

test('Adding a string to the first paramater creates a value for the property id of the object', () => {
    const testObj = new Employee('haley@gmail.com')

    expect(testObj.getEmail()).toBe('haley@gmail.com')
})

