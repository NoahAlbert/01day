

function calcTax(){
    const taxRate = .07
    const tesla = 1145000

    return (tesla * taxRate).toFixed(2)
}

console.log(calcTax())
