const btnDonateCard2 = document.getElementById('btn-card-2');
btnDonateCard2.addEventListener('click', function(){
    // console.log('connected')
    const mainBalance = getTextFieldValueById('main-balance');
    const donateInput = getInputFieldValueById('input-btn-card-2');
    const donationCollected = getTextFieldValueById('donated-money-added');
    // validation for input donation 
    if (isNaN(donateInput) || donateInput <= 0) { 
        return alert('Please enter a valid donation amount'); 
    } 
     
    
    // Show modal 
    my_modal_2.showModal();
    // console.log(donateInput, donationCollected)

    const newDonatedCollected = donationCollected + donateInput;
    // console.log(newDonatedCollected)
    document.getElementById('donated-money-added').innerText = newDonatedCollected;

    const newBalance = mainBalance - donateInput;
    // validation for new main balance in top right 
    if (newBalance < 0) { 
        return alert('Insufficient balance, please try again later.'); 
    } 
    document.getElementById('main-balance').innerText = newBalance;

    const location = document.getElementById("btn-card-2").parentElement.querySelector("h2").textContent;

    const historyItem = document.createElement("div"); 
    historyItem.className = 'bg[#FFFFFF] p-3 gap-6 border-2 border-black'; 
 
    historyItem.innerHTML = ` 
     
    <p class="text-xl font-bold mb-3"> ${donateInput} Taka is  ${location}. </p> 
    <p> Date: ${new Date().toString()} </p> 
     
    `; 
 
    document.getElementById('history-container').appendChild(historyItem); // Assuming there's a container to append the history
});