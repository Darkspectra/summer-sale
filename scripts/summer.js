

function prod1() {
    const price = getInputValue('prod1');
    if (price>0){
        document.getElementById('modal').removeAttribute('disabled');
    }
    addProducts(document.getElementById('pron1').innerText)
    calculation(price);

}
function prod2() {
    const price = getInputValue('prod2');
    if (price>0){
        document.getElementById('modal').removeAttribute('disabled');
    }
    addProducts(document.getElementById('pron2').innerText)
    calculation(price);
}
function prod3() {
    const price = getInputValue('prod3');
    if (price>0){
        document.getElementById('modal').removeAttribute('disabled');
    }
    addProducts(document.getElementById('pron3').innerText)
    calculation(price);
}
function prod4() {
    const price = getInputValue('prod4');
    if (price>0){
        document.getElementById('modal').removeAttribute('disabled');
    }
    addProducts(document.getElementById('pron4').innerText)
    calculation(price);
}
function prod5() {
    const price = getInputValue('prod5');
    if (price>0){
        document.getElementById('modal').removeAttribute('disabled');
    }
    addProducts(document.getElementById('pron5').innerText)
    calculation(price);
}
function prod6() {
    const price = getInputValue('prod6');
    if (price>0){
        document.getElementById('modal').removeAttribute('disabled');
    }
    addProducts(document.getElementById('pron6').innerText)
    calculation(price);
}

function go_home(){
    window.location.href = 'https://admirable-sopapillas-4cd84b.netlify.app';
    // document.getElementById('prev_total').innerText = '0.00';
    // document.getElementById('discount').innerText = '0.00';
    // document.getElementById('final_total').innerText = '0.00';
    // document.getElementById('products').remove('p');
}



function coupon(){
    if (document.getElementById('pon').value == "SELL200"){
        let prev_total = getInputValue('prev_total');
        const disco = prev_total*0.2;
        document.getElementById('discount').innerText = disco.toFixed(2);

        prev_total -= disco;
        document.getElementById('final_total').innerText = prev_total.toFixed(2);
        document.getElementById('pon').value = "";
    }
    else{
        alert('Wrong Coupon');
        document.getElementById('pon').value = "";
    }
}



// reusable code

function getInputValue(fieldID){
    const inputField = document.getElementById(fieldID);
    const total = parseFloat(inputField.innerText);
    return parseFloat(inputField.innerText);

}

function calculation(price){
    const prev_total = getInputValue('prev_total');
    let total = price + prev_total;

    const prev = document.getElementById('prev_total');
    prev.innerText = total.toFixed(2);

    if (total>=200){
        document.getElementById('disabled').removeAttribute('disabled');
    }

    document.getElementById('final_total').innerText = total.toFixed(2);
}




function addProducts(name){
    const pro = document.getElementById('products');
    const p =document.createElement('p');

    const count = pro.childElementCount;

    p.innerHTML = `${count+1}. ${name}`;
    pro.appendChild(p);
}

