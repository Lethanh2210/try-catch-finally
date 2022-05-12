var number = 5;
var de_number = 0;
try {
    if (de_number === 0) {
        throw new Error("division is zero error");
    }
    else {
        var sol = number / de_number;
    }
}
catch (e) {
    console.log(e);
}
try {
    // ab();
    // We have not declared the
    // function ab anywhere
}
catch (e) {
    console.log("Error không khai báo hàm : " + e.name);
}
try {
    eval("alert('ES6 Exception Handling)");
}
catch (e) {
    console.log("Error : " + e.name);
}
