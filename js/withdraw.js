function widrawInputValues(widrawId) {
    let input = document.getElementById(widrawId)
    let inputValue = input.value
    let inputValueNumber = parseFloat(inputValue)
    input.value = ''
    return inputValueNumber
}

function widrawInputElement(id) {
    let totalPreviousWidraw = document.getElementById(id)
    let totalWidrawElement = totalPreviousWidraw.innerText
    let totalWidrawElementNumber = parseFloat(totalWidrawElement)
    return totalWidrawElementNumber
}
function setValues(id, values) {
    let totalWithdraw = document.getElementById(id)
    totalWithdraw.innerText = values
}

document.getElementById('widraw-btn').addEventListener('click', function () {
    // let widrawInput = document.getElementById('widraw-input')
    // let widrawInputValue = widrawInput.value
    // let widrawInputValueNumber = parseFloat(widrawInputValue)
    // widrawInput.value = ''
    let widrawInputValueNumber = widrawInputValues('widraw-input')

    // let totalPreviousWidraw = document.getElementById('total-widraw')
    // let totalWidrawElement = totalPreviousWidraw.innerText
    // let totalWidrawElementNumber = parseFloat(totalWidrawElement)
    let totalWidrawElementNumber = widrawInputElement('total-widraw')

    let totalWithdraw = widrawInputValueNumber + totalWidrawElementNumber
    setValues('total-widraw', totalWithdraw)
    // totalPreviousWidraw.innerText = totalWithdraw

    // let totalPreviousMoney = document.getElementById('total-money')
    // let totalMoneyElement = totalPreviousMoney.innerText
    // let totalMoneyElementNumber = parseFloat(totalMoneyElement)
    let totalMoneyElementNumber = widrawInputElement('total-money')

    let totalMoney = totalMoneyElementNumber - widrawInputValueNumber
    setValues('total-money', totalMoney)
    // totalPreviousMoney.innerText = totalMoney
})