module.exports = {
    build: {
        options: {
            urls: [
                'tests/qunit/template.html',
                'tests/qunit/formTests.html',
                'tests/qunit/utilitiesTest.html'
            ]
        }
    },
    all: ['tests/**/*.html', '!tests/qunit/fitnesseFormValidationTests.html']
}