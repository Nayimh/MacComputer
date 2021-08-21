// global veriable 
const finalPrice = document.getElementById('grand-total');

const grandTotal = document.getElementById('finalTotal');


// global veriable
// function
function getServiceNumber(value, input) {
    document.getElementById(value).innerText = input;
}
// total function

function getTotal() {
const bestPriceNumber = parseInt(bestPrice.innerText);
const momoeryCost = parseInt(memoryCost.innerText);
const storageCost = parseInt(StorageCost.innerText);
    const shippingCost = parseInt(deliveryCost.innerText);
    const totalPrice = bestPriceNumber + momoeryCost + storageCost + shippingCost;
    finalPrice.innerText = totalPrice;

    const grandTotalprice = totalPrice;
    grandTotal.innerText = grandTotalprice;
    return grandTotalprice;


}

// no ideo what to do
// function addPromoCode(){
//     const promoInput = document.getElementById('promoText');
//     const promoInput = promoInput.value;

//     const discount = (getTotal() * 20) / 100;

//     if(promoInput.toLowerCase() == 'stevekaku'){
//         finalTotal.innerText = getTotal() - discount;
//         promoInput.value = '';
//         // document.getElementById('matched').innerText = 'You got 20% Cash Back!';
//     }else{
//         // document.getElementById('error').innerText = 'Invalid Promo code!';
//         promoInput.value = '';
//         document.getElementById('matched').innerText = '';
//     }
// }


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