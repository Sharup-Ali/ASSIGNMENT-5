const btnDonate = document.getElementById('btn-card-1'); 
btnDonate.addEventListener('click', function () { 
    const donationAmount = parseFloat(document.getElementById('donation-input').value); 
     const location = document.getElementById("btn-card-1").parentElement.querySelector("h2").textContent; 
    // validation for input donation 
    if (isNaN(donationAmount) || donationAmount <= 0) { 
        return alert('Please enter a valid donation amount'); 
    } 
     
    // Show modal 
    my_modal_1.showModal(); 
 
    const prevAmount = parseFloat(document.getElementById('donated-money').innerText); 
 
    const newBalance = prevAmount + donationAmount; 
    console.log(newBalance) 
    document.getElementById('donated-money').innerText = newBalance; 
 
    const mainBalance = parseFloat(document.getElementById('main-balance').innerText); 
 
    const newMainBalance = mainBalance - donationAmount; 
    // validation for new main balance in top right 
    if (newMainBalance < 0) { 
        return alert('Insufficient balance, please try again later.'); 
    } 
 
    document.getElementById('main-balance').innerText = newMainBalance; 
 
    const historyItem = document.createElement("div"); 
    historyItem.className = 'bg[#FFFFFF] p-3 gap-6 border-2 border-black'; 
 
    historyItem.innerHTML = ` 
     
    <p class="text-xl font-bold mb-3"> ${donationAmount} Taka is  ${location}. </p> 
    <p> Date: ${new Date().toString()} </p> 
     
    `; 
 
    document.getElementById('history-container').appendChild(historyItem); // Assuming there's a container to append the history 
});