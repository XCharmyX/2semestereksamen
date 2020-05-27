// Knap til top
//Get the button
var mybutton = document.getElementById("myBtn");  //var mybotton er objekt

// Array
let pickTemplate = ['create', 'template2', 'template3', 'template4', 'template5', 'template6', 'template7', 'template8']
pickTemplate[7] = 'template8';
console.log(pickTemplate.length);


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
