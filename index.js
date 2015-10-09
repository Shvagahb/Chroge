
// var appBtn = document.getElementById("appBtn");
var numOfBackgrounds = 11;
	var n = Math.floor((Math.random() * numOfBackgrounds) + 1);
	document.body.style.backgroundImage = "url('bg/"+n+".jpg')";

	// appBtn.addEventListener("click", function(){
	// 	chrome.tabs.update({
 //            url:'chrome://apps'
 //        });
	// });




var Quotation=new Array() // do not change this!

// Set up the quotations to be shown, below.
// To add more quotations, continue with the
// pattern, adding to the array.  Remember
// to increment the Quotation[x] index!

Quotation[0] = "Don't watch the clock; do what it does. Keep going";
Quotation[1] = "ll men are created equal.  Some work harder in preseason.";
Quotation[2] = "You are never too old to set another goal or to dream a new dream.";
Quotation[3] = "dare you to fail..";
Quotation[4] = "You quitting and you ain’t even tried yet.";
Quotation[5] = "Entrepreneurs average 3.8 failures before final success. What sets the successful ones apart is their amazing persistence.";
Quotation[6] = "O! Youth! What a pain in the backside.";
Quotation[7] = "Success usually comes to those who are too busy to be looking for it.";
Quotation[8] = "Love the river's \"beauty\", but live on a hill.";
Quotation[9] = "Strength does not come from winning. Your struggles develop your strengths. When you go through hardships and decide not to surrender, that is strength.";

// ======================================
// Do not change anything below this line
// ======================================
var Q = Quotation.length;
var whichQuotation=Math.round(Math.random()*(Q-1));
function showQuotation(){document.write(Quotation[whichQuotation]);}
showQuotation();
// </script>






//size of boxes
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