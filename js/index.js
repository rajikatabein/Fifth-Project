let balance = 10000;
function handleDonation(cardId) {
    const donationInput = document.getElementById(`donationAmount${cardId}`);
    const donationAmount = parseInt(donationInput.value);

if(isNaN(donationAmount)|| donationAmount <= 0){
    alert('Please enter a valid donation amount');
    return;

}
if (donationAmount > balance){
    alert("You don't have enough balance to donate this amount")
    return;
}
 updateBalance(cardId,donationAmount);
 addToHistory(`Donated ${donationAmount} BDT for card ${cardId}`);
 showModel(`You Succesfully donated ${donationAmount} BDT.`);




}

function addToHistory(message){
    const historyList = document.getElementById('historyList');

const newItem = document.createElement('li');
newItem.innerText = message +'-'+ new Date().toLocaleString();
historyList.appendChild(newItem);

}
function toggleActiveButton(activeBtnId, showSectionId, hideSectionId) {
    document.getElementById(showSectionId).classList.remove('hidden');
    document.getElementById(hideSectionId).classList.add('hidden');
    document.getElementById(activeBtnId).classList.add('bg-pea');
}

document.getElementById('donatetogbtn').addEventListener('click', function(){
    toggleActiveButton('donatetogbtn','donateSection','historySection');
});
document.getElementById('historytogbtn').addEventListener('click',function(){
    toggleActiveButton('historytogbtn','historySection','donateSection')
})


