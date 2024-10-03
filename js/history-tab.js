const btnHistory = document.getElementById('btn-history')
const btnDonation = document.getElementById('btn-donation')
btnHistory.addEventListener('click', function () {

    btnHistory.classList.add('hover:bg-[#B4F461]', 'bg-[#B4F461]', 'font-bold')

    btnDonation.classList.remove('hover:bg-[#B4F461]', 'bg-[#B4F461]', 'font-bold')

    document.getElementById('card-box').classList.add('hidden')
    document.getElementById('history-section').classList.remove('hidden')


});

const btnHistoryTab = document.getElementById('btn-history')
const btnDonationTab = document.getElementById('btn-donation')
btnDonationTab.addEventListener('click', function () {

    btnDonationTab.classList.add('hover:bg-[#B4F461]', 'bg-[#B4F461]', 'font-bold')

    btnHistoryTab.classList.remove('hover:bg-[#B4F461]', 'bg-[#B4F461]', 'font-bold')

    document.getElementById('card-box').classList.remove('hidden')
    document.getElementById('history-section').classList.add('hidden')

});