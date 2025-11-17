"use strict";
function verify(result) {
    if (result === 'pass') {
        console.log('Passed');
    }
    else {
        console.log('Failed');
    }
}
console.log(verify('pass')); // Output: Passed
console.log(verify('fail')); // Output: Failed
