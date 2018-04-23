let counts = [0,0,0,0,0];
const images = ["cat.jpg", "cat2.jpeg", "cat.jpg", "cat2.jpeg", "cat.jpg"]
const names = ["Leo", "Scorpio", "Virgo", "Cancer", "Saggitarius"];

function process(clicked_id) {
	document.getElementById("name").innerHTML = names[clicked_id];
	document.getElementById("image").src = images[clicked_id];
	document.getElementById("counter").innerHTML = counts[clicked_id];
	var elem = document.getElementById('image');
	/* elem.onclick = (function(clicked_id){
			return function(){
				counts[clicked_id] = counts[clicked_id]+1;
				document.getElementById("counter").innerHTML = counts[clicked_id];
				console.log(counts.toString());
			}		
		})(clicked_id); */
		elem.onclick = function(){
				counts[clicked_id] = counts[clicked_id]+1;
				document.getElementById("counter").innerHTML = counts[clicked_id];
				console.log(clicked_id, counts.toString());
			}	;
}

function reply_click(clicked_id)
{
	process(clicked_id);
}

// for (var i=0; i< 100; i++){
// 	setTimeout((function(i){
// 		return function(){
// 			console.log(i);
// 		}
// 	})(i), 500);
// }

// var elem = document.getElementById('catsul');
// elem.addEventListener('click', function(){
// 	alert("list");
// }, false);
// document.getElementById("nameone").innerHTML = "Oranges";
// document.getElementById("nametwo").innerHTML = "Apples";

// var elem = document.getElementById('cat-img');
// elem.addEventListener('click', function(){
// 	count = count+1;
// 	document.getElementById("counter").innerHTML = count;
// }, false);

// var element = document.getElementById('cat-img-2');
// element.addEventListener('click', function(){
// 	counts = counts + 1;
// 	document.getElementById("counters").innerHTML = counts;
// }, false);