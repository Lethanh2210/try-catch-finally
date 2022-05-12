function doOrThrow(error) {
    if (Math.random() > .5) {
        console.log('true');
        return true;
    }
    else {
        throw error;
    }
}
try {
    doOrThrow('err1');
    doOrThrow('err2');
    doOrThrow('err3');
}
catch (e) {
    console.log(e, 'error');
}
finally {
    console.log("Terminated");
}
function checkNumber(value) {
    if (value > 1) {
        throw new Error('Value must be 1 or below');
    }
    return true;
}
console.log(checkNumber(2));
