
// var appBtn = document.getElementById("appBtn");
var numOfBackgrounds = 11;
	var n = Math.floor((Math.random() * numOfBackgrounds) + 1);
	document.body.style.backgroundImage = "url('bg/"+n+".jpg')";

	// appBtn.addEventListener("click", function(){
	// 	chrome.tabs.update({
 //            url:'chrome://apps'
 //        });
	// });



function boxsize() {
  var docWidth = $(window).width();
  var boxWidth = (docWidth/2)-10;
  console.log(docWidth, boxWidth);

  var boxes = document.getElementsByClassName("box")
  for(var i=0; i<boxes.length; i++){
  	boxes[i].style.width = boxWidth + "px";
  }
}

boxsize();
