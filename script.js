// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

//need a starting health value for fungus
//let fungusHp=document.querySelector("#hp-text");
let myAP=100;

//writing some dummy variables to test things will probably turn into object var's
let arcaneSepterHp=14;//ap=12
let entangleHp=9;//ap=23
let dragonBladeHp=47;//ap=38
let starFireHp=25;//ap=33

function attacking(event){
document.querySelector("#hp-meter").value-=dragonBladeHp;
//line below will affect hp text but fills with nan
document.querySelector("#hpText").innerText-=dragonBladeHp;
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