
function toggleActiveButton(activeBtnId, showSectionId, hideSectionId) {
    document.getElementById(showSectionId).classList.remove('hidden');
    document.getElementById(hideSectionId).classList.add('hidden');
    document.getElementById(activeBtnId).classList.add('bg-pea');
}



function updateBalance(cardId,donationAmount){
    const donatedAmountElement = document.getElementById(`donatedAmount${cardId}`);
    balance -= donationAmount;
    document.getElementById('balance').innerText = balance;

    const currentDonatedAmount = parseInt(donatedAmountElement.innerText);
    donatedAmountElement.innerText = currentDonatedAmount + donationAmount;

    function showModel(message){
        const model = document.getElementById('model');
        document.getElementById('modelMessage').innerText = message;
    
        model.classList.remove('hidden');
    }

}

function showModel(message){
    const model = document.getElementById('model');
    document.getElementById('modelMessage').innerText = message;

    model.classList.remove('hidden');
}

function closeModel() {
    document.getElementById('model').classList.add('hidden');
}