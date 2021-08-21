// global veriable 
const finalPrice = document.getElementById('grand-total');

const grandTotal = document.getElementById('finalTotal');


// global veriable

// no ideo what to do
function addPromoCode(){
    const promoInputText = document.getElementById('promoText');
    const promoInput = promoInputText.value;

    const discount = (getTotal() * 20) / 100;

    if(promoInput.toLowerCase() == 'stevekaku'){
        grandTotal.innerText = getTotal() - discount;
        promoInputText.value = '';
        document.getElementById('matched').innerText = 'You got 20% Cash Back!';
        document.getElementById('matched').value = '';
    }else{
        document.getElementById('error').innerText = 'Invalid Promo code!';
        promoInputText.value = '';
        document.getElementById('erron').value = '';
       
    }
}
// function
function getServiceNumber(value, input) {
    document.getElementById(value).innerText = input;
}
// total function

function getTotal() {
const bestPriceNumber = parseInt(bestPrice.innerText);
const momoryCost = parseInt(memoryCost.innerText);
const storageCost = parseInt(StorageCost.innerText);
    const shippingCost = parseInt(deliveryCost.innerText);
    const totalPrice = bestPriceNumber + momoryCost + storageCost + shippingCost;
    finalPrice.innerText = totalPrice;

    const grandTotalPrice = totalPrice;
    grandTotal.innerText = grandTotalPrice;
    return grandTotalPrice;


}




// event 
document.getElementById('memory').addEventListener('click', function () {
    getServiceNumber('memoryCost', 0);

    getTotal()
})
document.getElementById('customMemory').addEventListener('click', function () {
    getServiceNumber('memoryCost', 180);

    getTotal()

})
document.getElementById('storageOne').addEventListener('click', function () {
    getServiceNumber('StorageCost', 0);

    getTotal()
})
document.getElementById('storageTwo').addEventListener('click', function () {
    getServiceNumber('StorageCost', 100);

    getTotal()
})
document.getElementById('storageThree').addEventListener('click', function () {
    getServiceNumber('StorageCost', 180);

    getTotal()
})
document.getElementById('freeDelivery').addEventListener('click', function () {
    getServiceNumber('deliveryCost', 0);

    getTotal()
})
document.getElementById('costDelivery').addEventListener('click', function () {
    getServiceNumber('deliveryCost', 20);

    getTotal()
})
document.getElementById('apply').addEventListener('click', function () {
    addPromoCode()
})