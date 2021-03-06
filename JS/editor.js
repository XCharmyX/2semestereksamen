//Pop up
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

//Tabs
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

//Hightlight active tab
var btns = document.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

//Array
let selectedTab = ['template', 'style', 'script', 'data', 'query'];
console.log(selectedTab.length);

//If else
let hour = 12;

if (hour >= 6 && hour < 12)
console.log('Good morning!');

else if (hour >= 12 && hour < 18)
console.log('Good afternoon!');

else
console.log('Good evening!');
