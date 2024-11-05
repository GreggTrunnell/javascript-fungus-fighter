// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

//need a starting health value for fungus
let fungusHp=100;
let myAP=100;

//writing some dummy variables to test things will probably turn into object var's
let arcaneSepterHp=14;//ap=12
let entangleHp=9;//ap=23
let dragonBladeHp=47;//ap=38
let starFireHp=25;//ap=33



// function attack(event){
//     let fungusTotal = fungusHp;
//     let apTotal = myAP;
//     let scepterCost= apTotal-12;
//     fungusHp=fungusTotal-arcaneSepterHp;
//     myAP = apTotal - scepterCost;
//     console.log('my fungus total', )
// }

//atticking function will take a one of the buttons and have it reduce our aP and hP
function attacking(weapon){
    console.log("weapon is", weapon);
if (weapon === 'arcane-scepter'){
    fungusHp-=14;
    myAP-=12;
    console.log('this is the new fungusHp',fungusHp,'new ap is:',myAP)
}
else if (weapon === 'entangle'){
    fungusHp-=9;
    myAP-=23;
    console.log('this is the new fungusHp',fungusHp,'new ap is:',myAP)
}
else if (weapon === 'dragon-blade'){
    fungusHp-=47;
    myAP-=38;
    console.log('this is the new fungusHp',fungusHp,'new ap is:',myAP)
}
else if ('star-fire'){
    fungusHp-=25;
    myAP-=33;
    console.log('this is the new fungusHp',fungusHp,'new ap is:',myAP)}

//need code to reduce fungus hP

}//*end of attacking function
      


 
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