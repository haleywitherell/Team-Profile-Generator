// const { test } = require("@jest/globals");
const Employee = require("../lib/Employee");

test('If we create a "new" Employee is should make a new object', () => {
    const testObj = new Employee()

    expect(typeof(testObj)).toBe('object')
})

test('Adding a string to the first paramater creates a value for the property name of the object', () => {
    const testObj = new Employee('Haley')

    expect(testObj.getName()).toBe('Haley')
})