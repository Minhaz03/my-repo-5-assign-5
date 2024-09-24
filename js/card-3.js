const btnDonateCard3 = document.getElementById('btn-card-3')
btnDonateCard3.addEventListener('click', function(){
    // console.log('connected')
    const mainBalance = getTextFieldValueById('main-balance');
    const inputDonate = getInputFieldValueById('input-btn-card-3');
    const donatedTotalMoney = getTextFieldValueById('donated-add-money');

    if(inputDonate <= 0){
        return alert('Try Valid Number')
    }
    else{
        const click = document.getElementById('btn-card-3');
        click.onclick = my_modal_3.showModal();
    }

    const newDonatedMoney = donatedTotalMoney + inputDonate;
    document.getElementById('donated-add-money').innerText = newDonatedMoney;

    const newBalance = mainBalance - inputDonate;
    if(newBalance < 0){
        return alert('Something Wrong Please Try Again Later')
    }
    document.getElementById('main-balance').innerText = newBalance;
});