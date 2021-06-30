

function calcTax(){
    const taxRate = .07
    const tesla = 1245000
    console.log('the function has run')

    return (tesla * taxRate).toFixed(2)
}

console.log(calcTax())
