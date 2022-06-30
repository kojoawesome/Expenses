

// ############################################################
// ############################################################

let pbox = document.getElementsByClassName('days');
console.log(pbox);



for( let i = 0; i < pbox.length; i++){
    pbox[i].addEventListener("mouseenter", eHovereffect);
    pbox[i].addEventListener("mouseleave", lHovereffect)
};



function eHovereffect(e){
    let prices = document.querySelectorAll("#pbox")[3];
    prices.style.display = 'inline';
};

function lHovereffect(e){
    let prices = document.querySelectorAll("#pbox")[3];
    prices.style.display = 'none';
}

