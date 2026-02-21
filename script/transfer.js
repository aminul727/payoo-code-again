document.getElementById('money-t-btn').addEventListener('click', function(){
const moneyTransferNumberInput = document.getElementById('money-t-number');
const moneyTransferNumber = moneyTransferNumberInput.value;
console.log(moneyTransferNumber);
if(moneyTransferNumber.length !== 11){
    alert('Invalid Number! ANIK');
    return;
}
const moneyTransferAmountInput = document.getElementById('money-t-amount');
const moneyTransferAmount = moneyTransferAmountInput.value;
console.log(moneyTransferAmount);

const balanceElement = document.getElementById('balance');
const balance = balanceElement.innerText;
console.log(balance);
const newBalance = Number(balance) - Number(moneyTransferAmount);
console.log(newBalance);

const moneyTransferPinInput = document.getElementById('money-t-pin');
const moneyTransferPin = moneyTransferPinInput.value;
console.log(moneyTransferPin);
if(moneyTransferPin === '123*'){
    alert('Transfer successful! ANIK');
    console.log(newBalance);
    balanceElement.innerText = newBalance;
}
else{
    alert('Invalid Pin')
    return;
}

});