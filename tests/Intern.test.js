const Intern = require("../lib/Intern")

test('Adding a string to the first paramater creates a value for the property school name of the object', () => {
    const testObj = new Intern('testschool')

    expect(testObj.school).toBe('testschool')
})

test('Adding a string to the first paramater creates a value for the school name function of the object', () => {
    const testObj = new Intern('testschool')

    expect(testObj.getSchool()).toBe('testschool')
})

test('Adding a string to the first paramater creates a value for the role function of the object', () => {
    const testObj = new Intern('Intern')

    expect(testObj.getRole()).toBe('Intern')
})