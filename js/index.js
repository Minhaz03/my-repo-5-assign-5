const btnDonate = document.getElementById('btn-card-1');
btnDonate.addEventListener('click', function(){
    // console.log('testing')
    const donationAmount = parseFloat(document.getElementById('donation-input').value);
    console.log(donationAmount)
    
    const prevAmount = parseFloat(document.getElementById('donated-money').innerText);
    // console.log(prevAmount)

    const newBalance = prevAmount + donationAmount;
    // console.log(newBalance)
    document.getElementById('donated-money').innerText = newBalance;
});