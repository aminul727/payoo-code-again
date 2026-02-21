document.getElementById('pay-b-btn').addEventListener('click', function(){
    const payBillBankInput = document.getElementById('pay-b-bank');
    const payBillBank = payBillBankInput.value;
    console.log(payBillBank);
    if(payBillBank === 'select back'){
        alert('please select a bank');
        return;
    }
    const payBillNumberInput = document.getElementById('pay-b-number');
    const payBillNumber = payBillNumberInput.value;
    console.log(payBillNumber);

    const payBillAmountInput = document.getElementById('pay-b-amount');
    const payBillAmount = payBillAmountInput.value;
    console.log(payBillAmount);

    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    console.log(balance);
    const newBalance = Number(balance) - Number(payBillAmount);
    console.log(newBalance);

    const payBillPinInput = document.getElementById('pay-b-pin');
    const payBillPin = payBillPinInput.value;
    console.log(payBillPin);
    if(payBillPin === '123*'){
        alert('bill paid Successfill! ANIK');
        console.log(newBalance);
        balanceElement.innerText = newBalance;
        const history = document.getElementById('history-container');
        const newHistory = document.createElement('div');
        newHistory.innerHTML = `
        <div class="history-card p-5 bg-base-100">
        pay bill successfull
        from ${payBillNumber},
        TAKA ${payBillAmount},
        at ${new Date()}      
        </div>
        `
        history.append(newHistory);
    }
    
    else{
        alert('Invalid Pin! ANIK');
        return;
    }

});