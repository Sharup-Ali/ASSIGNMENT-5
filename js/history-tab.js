const btnHistory = document.getElementById('history-btn')
const btnDonation = document.getElementById('donation-btn')
btnHistory.addEventListener('click', function () {

    btnHistory.classList.add('hover:bg-[#B4F461]', 'bg-[#B4F461]', 'font-bold');

    btnDonation.classList.remove('hover:bg-[#B4F461]', 'bg-[#B4F461]', 'font-bold');

    document.getElementById('card-box').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');


});

const btnHistoryTab = document.getElementById('history-btn')
const btnDonationTab = document.getElementById('donation-btn')
btnDonationTab.addEventListener('click', function () {

    btnDonationTab.classList.add('hover:bg-[#B4F461]', 'bg-[#B4F461]', 'font-bold');

    btnHistoryTab.classList.remove('hover:bg-[#B4F461]', 'bg-[#B4F461]', 'font-bold');

    document.getElementById('card-box').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');

});