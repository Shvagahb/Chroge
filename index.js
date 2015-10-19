
// var appBtn = document.getElementById("appBtn");
var numOfBackgrounds = 11;
	var n = Math.floor((Math.random() * numOfBackgrounds) + 1);
	document.body.style.backgroundImage = "url('bg/"+n+".jpg')";

	// appBtn.addEventListener("click", function(){
	// 	chrome.tabs.update({
 //            url:'chrome://apps'
 //        });
	// });



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






var ostream;

var file = Cc["@mozilla.org/file/local;1"].createInstance(Ci.nsILocalFile);
file.initWithPath('/home/rob/Desktop/');
file.append('Test.txt');



try{        

    if (file.exists() === false) {file.create(Ci.nsIFile.NORMAL_FILE_TYPE, 420);}

    ostream = FileUtils.openFileOutputStream(file, FileUtils.MODE_WRONLY | FileUtils.MODE_APPEND);

    var converter = Cc["@mozilla.org/intl/scriptableunicodeconverter"].createInstance(Ci.nsIScriptableUnicodeConverter);
    converter.charset = "UTF-8";

    var istream = converter.convertToInputStream('This is my string of text');

    // The last argument (the callback) is optional.
    NetUtil.asyncCopy(istream, ostream, function(status) {

        if (!components.isSuccessCode(status)) {

            alert('error');                 

        }else{

            alert('success');
        }
    });
} catch (e) {
    return false;
}
