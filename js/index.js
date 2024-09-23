const btnDonate = document.getElementById('btn-card-1');
btnDonate.addEventListener('click', function(){
    // console.log('testing')
    const donationAmount = parseFloat(document.getElementById('donation-input').value);
    // console.log(donationAmount)
    // validation for input donation
    if (donationAmount < 0){
        return alert('Try Valid Number')
    }
    
    const prevAmount = parseFloat(document.getElementById('donated-money').innerText);
    // console.log(prevAmount)

    const newBalance = prevAmount + donationAmount;
    // console.log(newBalance)
    document.getElementById('donated-money').innerText = newBalance;

    const mainBalance = parseFloat(document.getElementById('main-balance').innerText);

    const newMainBalance = mainBalance - donationAmount;
    // validation for new main balance in top right
    if (newMainBalance < 0){
        return alert('Something Wrong Please Try Again Later')
    }
    // console.log(newMainBalance)
    document.getElementById('main-balance').innerText = newMainBalance;
});