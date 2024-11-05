// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

//need a starting health value for fungus
let fungusHp=100;
let myAP=100;

let arcaneSepterHp=14;

function attacking(event){
 let newFungus=document.querySelector("#hp-meter").value-=arcaneSepterHp;
    console.log('attacking');
}
//need to subtractHp from fungus based on weaponsHP 
//will need to subtract weapon cost from myAP
//could maybe use an array for myAp



function onReady() {
    console.log("Ready to go!")
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}


onReady()

// function addingDivs(event){
//     //need a variable to access where I want the div to go
//     let divPlacement= document.querySelector('#divWrapper');
//     counting++;
  
 
//     divPlacement.innerHTML+=`
//     <div class="redFill">
//     <p>
//      ${counting}
     
//     <button onClick="yellowFill(event)">Yellow</button>
//     <button onClick="deleteDiv(event)">Delete</button>    </p>
//     </div>
//     `