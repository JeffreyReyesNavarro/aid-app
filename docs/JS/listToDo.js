// close button
var myNodelist = document.getElementById("ul__listTasks");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// hide li
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// checked symbol
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("header__textInput").value;
    var t = document.createTextNode(inputValue);
    var displayModal = document.querySelector('.modal')
    
    li.appendChild(t);
    if (inputValue === '') {
    displayModal.style.display = 'block';

    document.getElementById("modal").in
    } else {
      document.getElementById("ul__listTasks").appendChild(li);
    }
    document.getElementById("header__textInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
//exit modal btn
  var modalBtn = document.querySelector('.modal__btn__ok');
  var displayModal = document.querySelector('.modal');

  modalBtn.addEventListener('click', function() {
      displayModal.style.display = 'none';
  })