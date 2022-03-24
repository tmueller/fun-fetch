const tests = [
    import("./fetch.test")
];

Promise.all(tests)
    .then(() => process.exitCode = 0)
    .catch(e => {
        console.error(e);
        process.exitCode = 2;
    });
