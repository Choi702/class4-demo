'use strict'


function calculateAge(){
    var internalAskAge = prompt('What is your age');
    document.write('<h3>' + 'welcome '+ internalAskAge + '</h3>');
    '<h1>Welcome</</h1>'
    return internalAskAge;
}

// calculateAge(); // value of internalAskAge not the variable name


// console.log(externalAskAge);

function confirmCountinue(AskAge){ //the function is accepting a paramater
    confirm(AskAge + " Awesome. A Bartendar will be with you shortly");

}

function checkAge(age){
    if(age ==='yes'){
        alert('Welcome aboard!'); 
        var internalAskName = prompt('What is your name');
        document.write('<h3>' + 'welcome '+ internalAskName + '</h3>');
    }else {

        alert('Comback when you turn 21!')
    }

}

function verify(){
    var verify;
    verify = prompt('Are you 21?');
    return verify

}

checkAge(verify())


// function adopt(verifyQuestion){
//     if(verify === 'no'){
//         var adopt = prompt('You are not allowed to proceed');

//         if(adopt === 'yes'){
//             alert('Awesome. A Bartendar will be with you shorlty');
//         } else if(adopt === 'no'){
//             alert('Comeback when you are 21.');
//         } else {
               
                
//         }
//     }
// }



// var externalAskAge  = calculateAge(); //value of internalAskAge not the variable name
// confirmCountinue(externalAskAge); //this is passing an argument
// var verifyQuestion = verify();
// checkAge(verifyQuestion);
// adopt(verifyQuestion);











