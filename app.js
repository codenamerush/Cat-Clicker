let count = 0;
var elem = document.getElementById('cat-img');
elem.addEventListener('click', function(){
	count = count+1;
	document.getElementById("counter").innerHTML = count;
}, false);