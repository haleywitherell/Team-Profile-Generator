const Engineer = require("../lib/Engineer");


test('Adding a string to the first paramater creates a value for the property github usermane of the object', () => {
    const testObj = new Engineer('testgithub')

    expect(testObj.github).toBe('testgithub')
})

test('Adding a string to the first paramater creates a value for the github usermane function of the object', () => {
    const testObj = new Engineer('testgithub')

    expect(testObj.getGithub()).toBe('testgithub')
})

test('Adding a string to the first paramater creates a value for the role function of the object', () => {
    const testObj = new Engineer('Engineer')

    expect(testObj.getRole()).toBe('Engineer')
})