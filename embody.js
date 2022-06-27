
let monday = document.getElementById('monday');

console.log(monday.nodeType);

monday.onmouseenter = function(){
    // monday.style.backgroundColor = 'blue';
}

// grabbing inner_self

const flasher = document.createElement('span');
const flasher_pikin = document.createTextNode("$500");

flasher.appendChild(flasher_pikin);

document.getElementsByClassName('.inner_self').appendChild(flasher);


// ### FIRTS TRY ##### 

// for( var i = 0; i < bars.length; i++){
//     bars[i].addEventListener('mouseover', hoverEffects );
//   };

// function hoverEffects(e){
     
//     // for( var i = 0; i < bars.length; i++){
//     //     bars[i].style.backgroundColor = 'green';
//     //   };
     
//     let mon = document.getElementById('monday')
      
// };

