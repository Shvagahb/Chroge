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