document.getElementById('login-btn').addEventListener('click', function(){
const loginNumberInput = document.getElementById('login-number');
const loginNumber = loginNumberInput.value;
console.log(loginNumber);

const pinNumberInput = document.getElementById('login-pin');
const pinNumber = pinNumberInput.value;
console.log(pinNumber);
if(pinNumber === '123*'){
    alert('Login Successfull ANIK')
  window.location.href = ('home.html'); 
}
else{
    alert('Invalid Pin ANIK !')
}
});