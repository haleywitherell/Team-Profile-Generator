const Manager = require("../lib/Manager")

test('If we create a "new" Manager is should make a new object', () => {
    const testObj = new Manager()

    expect(typeof(testObj)).toBe('object')
})

test('Adding a string to the first paramater creates a value for the property office number of the object', () => {
    const testObj = new Manager('testofficenum')

    expect(testObj.school).toBe('testofficenum')
})

test('Adding a string to the first paramater creates a value for the role function of the object', () => {
    const testObj = new Manager('Manager')

    expect(testObj.getRole()).toBe('Manager')
})