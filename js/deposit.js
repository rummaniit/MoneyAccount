function getInputValuesById(inputId) {
    let input = document.getElementById(inputId)
    let inputValue = input.value
    let inputValueNumber = parseFloat(inputValue)
    input.value = ''
    return inputValueNumber
}

function getInputElementsById(elementId) {
    let total = document.getElementById(elementId)
    let totalElement = total.innerText
    let totalElementNumber = parseFloat(totalElement)
    return totalElementNumber
}
function setValues(id, values) {
    let totalDeposite = document.getElementById(id)
    totalDeposite.innerText = values
}

document.getElementById('deposite-btn').addEventListener('click', function () {

    // taking value from input (deposite)
    // let depositeInput = document.getElementById('deposite-input')
    // let depositeInputValue = depositeInput.value
    // let depositeInputValueNumber = parseFloat(depositeInputValue)
    // depositeInput.value = ''
    let depositeInputValueNumber = getInputValuesById('deposite-input')

    // taking value from deposite total box
    // let totalDeposite = document.getElementById('total-deposite')
    // let totalDepositeElement = totalDeposite.innerText
    // let totalDepositeElementNumber = parseFloat(totalDepositeElement)
    let totalDepositeElementNumber = getInputElementsById('total-deposite')

    // adding total money and push to deposite total box
    let totalDepositeMoney = depositeInputValueNumber + totalDepositeElementNumber
    setValues('total-deposite', totalDepositeMoney)
    // totalDeposite.innerText = totalDepositeMoney

    // get total Money
    // let totalPreviousMoney = document.getElementById('total-money')
    // let totalMoneyElement = totalPreviousMoney.innerText
    // let totalMoneyElementNumber = parseFloat(totalMoneyElement)
    let totalMoneyElementNumber = getInputElementsById('total-money')

    // add deposite money with previous total money and push to total money box
    let totalMoney = totalMoneyElementNumber + depositeInputValueNumber
    setValues('total-money', totalMoney)
    // totalPreviousMoney.innerText = totalMoney
})