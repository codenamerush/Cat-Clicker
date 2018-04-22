let count = 0;
let counts = 0;

document.getElementById("nameone").innerHTML = "Oranges";
document.getElementById("nametwo").innerHTML = "Apples";

var elem = document.getElementById('cat-img');
elem.addEventListener('click', function(){
	count = count+1;
	document.getElementById("counter").innerHTML = count;
}, false);

var element = document.getElementById('cat-img-2');
element.addEventListener('click', function(){
	counts = counts + 1;
	document.getElementById("counters").innerHTML = counts;
}, false);