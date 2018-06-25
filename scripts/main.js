var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/20180526_224609.jpg20180526_224558-2.jpg') {
      myImage.setAttribute ('src','images/20180526_224609.jpg');
    } else {
      myImage.setAttribute ('src','images/20180526_224558-2.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'This GSX-R 1000 Belongs to, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'This GSX-R 1000 Belongs to, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}