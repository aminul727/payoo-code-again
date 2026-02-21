document.getElementById('add-money-btn').addEventListener('click', function(){
const addMoneyBankInput = document.getElementById('add-money-bank');
const addmoneyBank = addMoneyBankInput.value;
console.log(addmoneyBank);
if(addmoneyBank === 'select a bank'){
    alert('please select a bank ! ANIK');
    return;
}
const addMoneyNumberInput = document.getElementById('add-money-number');
const addMoneyNumber = addMoneyNumberInput.value;
console.log(addMoneyNumber);
if(addMoneyNumber.length !== 11){
    alert('Invalid number! ANIK');
    return;
}
const addmoneyAmountInput = document.getElementById('add-money-amount');
const addMoneyAmount = addmoneyAmountInput.value;
console.log(addMoneyAmount);

const balanceElement = document.getElementById('balance');
const balance = balanceElement.innerText;
console.log(balance);
const newBalance = Number(balance) + Number(addMoneyAmount);
console.log('new balance =', newBalance);

const addMoneyPinInput = document.getElementById('add-money-pin');
const addMoneyPin = addMoneyPinInput.value;
console.log(addMoneyPin);
if(addMoneyPin === '123*'){
    alert(`add money ANIK successfull 
        from ${addMoneyNumber},
        TAKA ${addMoneyAmount}, 
        at ${new Date()}`);
    console.log('new balance', newBalance);
    balanceElement.innerText = newBalance;
    const history = document.getElementById('history-container');
    const newHistory = document.createElement('div');
    newHistory.innerHTML = `
     <div class="history-card p-5 bg-base-100">
        add money successfull
        from ${addMoneyNumber},
        TAKA ${addMoneyAmount},
        at ${new Date()}      
    </div>
    `
    history.append(newHistory);
}
else{
    alert('Invalid Pin! Anik');
    return;
}
});