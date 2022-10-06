function myFunctions() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('I\'m resolved');
        }, 2000);
    });
}

async function asyncTest() {
    console.log('coming...');
    const result = await myFunctions();
    console.log(result);
    // expected output: "resolved"
}
asyncTest();
// function will wait 2second then output "im resolved". in the mean time, other work will continue without stoping.