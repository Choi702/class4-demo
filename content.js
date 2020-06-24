'use strict'


var age = calculateAge("02/24/1991", "02/24/2010");

var greeting;

alert('Are You Over 21?');




var calculateAge = prompt('Welcome To My Site!')
calculateAge = parseInt(hourNow)





// calculateAge = 21
// prompt = ''

function calculateAge (birthDate, otherDate) {
    birthDate = new Date(birthDate);
    otherDate = new Date(otherDate);

    var years = (otherDate.getFullYear() - birthDate.getFullYear());

    if (otherDate.getMonth() < birthDate.getMonth() || 
        otherDate.getMonth() == birthDate.getMonth() && otherDate.getDate() < birthDate.getDate()) {
        years--;
    }

    return years;
}




if (calculateAge > 18)  {
    prompt = 'Welcome!';
}   else if (calculateAge > 12)  {
    prompt = 'Dont Even Think About it!';
}   else if (calculateAge >= 0)  {
    prompt = 'No Way Jose!';
}   else {
   


}


document.write('<h3>' + prompt + '</h3>');

'21' === 21
