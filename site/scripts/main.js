/* Alternate images when clicked */

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/bombay-cat.jpg') {
        myImage.setAttribute('src', 'images/bombay-cat2.jpg');
    } else {
        myImage.setAttribute('src', 'images/bombay-cat.jpg');
    }
}

/* Personalized welcome message */
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Bombay cats are cool, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Bombay cats are cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}