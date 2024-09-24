const btnDonateCard2 = document.getElementById('btn-card-2');
btnDonateCard2.addEventListener('click', function(){
    // console.log('connected')
    const mainBalance = getTextFieldValueById('main-balance');
    const donateInput = getInputFieldValueById('input-btn-card-2');
    const donationCollected = getTextFieldValueById('donated-money-added');
    if (donateInput < 0 ){
        return alert('Try Valid Number')
    }
    else{
        const click = document.getElementById('btn-card-2');
        click.onclick = my_modal_2.showModal();
    }
    // console.log(donateInput, donationCollected)

    const newDonatedCollected = donationCollected + donateInput;
    // console.log(newDonatedCollected)
    document.getElementById('donated-money-added').innerText = newDonatedCollected;

    const newBalance = mainBalance - donateInput;
    if(newBalance < 0){
        return alert('Something Wrong Please Try Again Later')
    }
    document.getElementById('main-balance').innerText = newBalance;
});