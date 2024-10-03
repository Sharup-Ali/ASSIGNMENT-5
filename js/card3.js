const btnDonateCard3 = document.getElementById('btn-card-3')
btnDonateCard3.addEventListener('click', function(){
    // console.log('connected')
    const mainBalance = getTextFieldValueById('main-balance');
    const inputDonate = getInputFieldValueById('input-btn-card-3');
    const donatedTotalMoney = getTextFieldValueById('donated-add-money');

    if (isNaN(inputDonate) || inputDonate <= 0) { 
        return alert('Please enter a valid donation amount'); 
    } 
     
    // Show modal 
    my_modal_3.showModal();

    const newDonatedMoney = donatedTotalMoney + inputDonate;
    document.getElementById('donated-add-money').innerText = newDonatedMoney;

    const newBalance = mainBalance - inputDonate;
    // validation for new main balance in top right 
    if (newBalance < 0) { 
        return alert('Insufficient balance, please try again later.'); 
    } 
    document.getElementById('main-balance').innerText = newBalance;


    const location = document.getElementById("btn-card-3").parentElement.querySelector("h2").textContent;

    const historyItem = document.createElement("div"); 
    historyItem.className = 'bg[#FFFFFF] p-3 gap-6 border-2 border-black'; 
 
    historyItem.innerHTML = ` 
     
    <p class="text-xl font-bold mb-3"> ${inputDonate} Taka is  ${location}. </p> 
    <p> Date: ${new Date().toString()} </p> 
     
    `; 
 
    document.getElementById('history-container').appendChild(historyItem); // Assuming there's a container to append the history
});