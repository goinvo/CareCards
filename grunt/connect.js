module.exports = {
    build: {
        options: {
            port: '1337',
            hostname: "localhost",
            base: "tests/qunit"
        }
    },
    qunit: {
        options: {
            port: '8011',
            hostname: "localhost",
            base: "tests/qunit"
        }
    },
    server: { /* http://localhost:8002/tests/qunit/test.html */
        options: {
            port: '8002',
            hostname: "localhost",
            base: ".",
            keepalive: true
        }
    }
}