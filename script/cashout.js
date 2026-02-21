document.getElementById('cashout-btn').addEventListener('click', function(){
const cashoutNumberInput = document.getElementById('cashout-number');
const cashoutNumber = cashoutNumberInput.value;
console.log(cashoutNumber);
if(cashoutNumber.length !== 11){
    alert('Invalid Number !');
    return;
}
const cashoutAmountInput = document.getElementById('cashout-amount');
const cashoutAmount = cashoutAmountInput.value;
console.log(cashoutAmount);

const balanceElement = document.getElementById('balance');
const balance = balanceElement.innerText;
console.log(balance);
const newBalance = Number(balance) - Number(cashoutAmount);
console.log('new available balance =',newBalance);
if(newBalance < 0){
    alert('Insufficient balance');
    return;
}
const cashoutPinNUmber = document.getElementById('cashout-pin');
const cashoutPin = cashoutPinNUmber.value;
console.log(cashoutPin);
if(cashoutPin === '123*'){
    alert(`cashout ANIK successfull 
    from ${cashoutNumber},
    TAKA ${cashoutAmount},
    at ${new Date()}`);
    console.log('new balance =', newBalance);
    balanceElement.innerText = newBalance;
    const history =document.getElementById('history-container');
    const newHistory = document.createElement('div');
    newHistory.innerHTML= `
    <div class="history-card p-5 bg-base-100">
        cashout successfull
        from ${cashoutNumber},
        TAKA ${cashoutAmount},
        at ${new Date()}      
    </div>
    `
    history.append(newHistory);
}
else{
    alert('Invaild pin!!! ANIK');
    return;
}
});