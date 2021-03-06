const Intern = require("../lib/Intern")

test('If we create a "new" Intern is should make a new object', () => {
    const testObj = new Intern()

    expect(typeof(testObj)).toBe('object')
})

test('Adding a string to the first paramater creates a value for the property school name of the object', () => {
    const testObj = new Intern('school')

    expect(testObj.school).toBe('school')
})

test('Adding a string to the first paramater creates a value for the school name function of the object', () => {
    const testObj = new Intern('school')

    expect(testObj.getSchool()).toBe('school')
})

test('Adding a string to the first paramater creates a value for the role function of the object', () => {
    const testObj = new Intern('Intern')

    expect(testObj.getRole()).toBe('Intern')
})