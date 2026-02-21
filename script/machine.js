function showOnly(id){
    const addMoney = document.getElementById('add-money');
    const cashout = document.getElementById('cashout');
    const payBill = document.getElementById('pay-b');
    const bonus = document.getElementById('bonus');
    const transfer = document.getElementById('money-t');
    // const history = document.getElementById('history')
    addMoney.classList.add('hidden');
    cashout.classList.add('hidden');
    payBill.classList.add('hidden');
    bonus.classList.add('hidden');
    transfer.classList.add('hidden');
    // history.classList.add('hidden');

    const selected = document.getElementById(id);
    selected.classList.remove('hidden');
};