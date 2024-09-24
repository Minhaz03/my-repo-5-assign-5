const btnDonate = document.getElementById('btn-card-1');
btnDonate.addEventListener('click', function(){
    const donationAmount = parseFloat(document.getElementById('donation-input').value);
    
    // validation for input donation
    if (donationAmount <= 0){
        return alert('Please enter a valid donation amount');
    }

    // Show modal
    my_modal_1.showModal();

    const prevAmount = parseFloat(document.getElementById('donated-money').innerText);

    const newBalance = prevAmount + donationAmount;
    document.getElementById('donated-money').innerText = newBalance;

    const mainBalance = parseFloat(document.getElementById('main-balance').innerText);

    const newMainBalance = mainBalance - donationAmount;
    // validation for new main balance in top right
    if (newMainBalance < 0){
        return alert('Insufficient balance, please try again later.');
    }

    document.getElementById('main-balance').innerText = newMainBalance;

    const historyItem = document.createElement("div");
    historyItem.className = 'bg-white p-3 w-full border-2 border-black';

    historyItem.innerHTML = `
    
    <p> ${donationAmount} Taka Date: ${new Date().toLocaleDateString()} Time: ${new Date().toLocaleTimeString()} </p>
    
    `;
    
    

    document.getElementById('history-container').appendChild(historyItem); // Assuming there's a container to append the history
});