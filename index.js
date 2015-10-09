
// var appBtn = document.getElementById("appBtn");
var numOfBackgrounds = 11;
	var n = Math.floor((Math.random() * numOfBackgrounds) + 1);
	document.body.style.backgroundImage = "url('bg/"+n+".jpg')";

	// appBtn.addEventListener("click", function(){
	// 	chrome.tabs.update({
 //            url:'chrome://apps'
 //        });
	// });




//allocate size of boxes
function boxsize() {
  //find width
  var docWidth = $(window).width();
  var boxWidth = (docWidth/2)-25;
  //console.log(docWidth, boxWidth);

  //find height
  var docHeight = $(window).height();
  var boxHeight = docHeight-100;

  var boxes = document.getElementsByClassName("box")
  for(var i=0; i<boxes.length; i++){
    boxes[i].style.width = boxWidth + "px";
    boxes[i].style.height = boxHeight + "px";
  }
}
boxsize();
window.onresize = function(event) {
  boxsize();
}