const Manager = require("../lib/Manager")

test('Adding a string to the first paramater creates a value for the property office number of the object', () => {
    const testObj = new Manager('testofficenum')

    expect(testObj.school).toBe('testofficenum')
})

test('Adding a string to the first paramater creates a value for the role function of the object', () => {
    const testObj = new Manager('Manager')

    expect(testObj.getRole()).toBe('Manager')
})