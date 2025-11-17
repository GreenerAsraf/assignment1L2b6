type Result = 'pass' | 'fail'

function verify(result: Result) {
  if (result === 'pass') {
    console.log('Passed')
  } else {
    console.log('Failed in verification step')
  }
}
console.log(verify('pass')) // Output: Passed
console.log(verify('fail')) // Output: Failed
