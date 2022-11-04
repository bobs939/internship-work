let counter=0;

// know how many times the home and respective buttons have beeen clicked
function homec(){
    counter++
    console.log('home'+counter);
}
function featurec(){
    counter++
    console.log('feature'+counter);
}
function downloadc(){
    counter++
    console.log('download'+counter);
}
function careerc(){
    counter++

    console.log('career'+counter);
}
function pricingc(){
    counter++

    console.log('pricing'+counter);
}

// for the popup event of the register form

function openpopup(){
    document.getElementById('pop-box').style.visibility="visible";

}

function closepopup(){
    document.getElementById('pop-box').style.visibility="hidden";
    

}

