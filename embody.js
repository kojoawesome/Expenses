 

// ############################################################
// ############################################################

let day = document.getElementsByClassName('days');
console.log(day);


// loop for week-days
for( let i = 0; i < pbox.length; i++){
    day[i].addEventListener("mouseenter", eHovereffect);
    day[i].addEventListener("mouseleave", lHovereffect);
};


//grabbing amount
let prices = document.querySelectorAll("#pbox"); 
console.log(day[1].id);


function eHovereffect(e){

    // if ( day[0].getAttribute('id') == 'monday' ){
    //     prices[0].style.display = 'inline';
    //    } 
    //    else if (day[1].getAttribute('id') == 'tuesday' ){
    //     prices[1].style.display = 'inline';
    //    }

    if(e.target.getAttribute('id') ==  'monday'){
        prices[0].style.display = 'inline';
    }
    else if (e.target.getAttribute('id') ==  'tuesday'){
        prices[1].style.display = 'inline';
    }
    else if (e.target.getAttribute('id') ==  'wednesday'){
        prices[2].style.display = 'inline';
    }
    else if (e.target.getAttribute('id') ==  'thursday'){
        prices[3].style.display = 'inline';
    }
    else if (e.target.getAttribute('id') ==  'friday'){
        prices[4].style.display = 'inline';
    }
    else if (e.target.getAttribute('id') ==  'saturday'){
        prices[5].style.display = 'inline';
    }
    else if (e.target.getAttribute('id') ==  'sunday'){
        prices[6].style.display = 'inline';
    }



  
};

function lHovereffect(e){
    for( let i = 0; i < pbox.length; i++){
        pbox[i].style.display = 'none';
    };
}

