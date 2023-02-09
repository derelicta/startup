let myHeading = document.querySelector('h1');
console.log(myHeading);
myHeading.textContent = 'Hello, World!';

let myImage = document.querySelector('img');
console.log(myImage);
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    console.log(mySrc);
    console.log(mySrc === 'images/pic01.png');
    (mySrc === 'images/pic01.png') ? (myImage.setAttribute('src', 'images/pic02.png')) : (myImage.setAttribute('src', 'images/pic01.png'));
    console.log(mySrc);
    /* fuck off, this used a variable what just contain the value of elemental attribute */
    console.log('What is happened? Did it got into this?');
}

let myButton = document.querySelector('button');
let welcomement = document.getElementById('welcomement');

function setUserName() {
    let myName = window.prompt('Please enter your name:');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        welcomement.textContent = 'welcome, ' + myName;
    }
}
console.log(localStorage.getItem('name'));

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    console.log(storedName);
    welcomement.textContent = 'welcome, ' + storedName;
}

myButton.addEventListener('click', setUserName);