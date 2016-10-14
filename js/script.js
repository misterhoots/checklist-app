var items = document.getElementsByTagName('li');
var btn = document.querySelector('.btn');
var initList = document.getElementById('list');
var initState = initList.innerHTML;
btn.addEventListener("click", reStore);

window.onload = function() {
   if(localStorage.getItem('firstVisit') != 'false') {
      localStorage.setItem('session', initState);
      document.getElementById('list').innerHTML = initState;
      localStorage.setItem('firstVisit', 'false');
   }
   else if (localStorage.getItem('session') != initState){
      document.getElementById('list').innerHTML = localStorage.getItem('session');
   }
   watch();
}

function watch(){
   for(var i = 0; i < items.length; i++) {
      items[i].onclick = closeItem;
   }
}

function closeItem() {
   this.style.visibility = 'hidden';
   this.style.height = '0';
   this.style.padding = '0';
   updateState();
}

function updateState() {
   var newList = document.getElementById('list');
   newState = newList.innerHTML;
   localStorage.setItem('session', newState);
}

function reStore() {
   localStorage.setItem('session', initState);
   document.getElementById('list').innerHTML = initState;
   watch();
}
