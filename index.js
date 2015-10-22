
// var appBtn = document.getElementById("appBtn");
var numOfBackgrounds = 28;
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
Quotation[1] = "All men are created equal.  Some work harder in preseason.";
Quotation[2] = "You are never too old to set another goal or to dream a new dream.";
Quotation[3] = "dare you to fail..";
Quotation[4] = "You quitting and you aint even tried yet.";
Quotation[5] = "Entrepreneurs average 3.8 failures before final success. What sets the successful ones apart is their amazing persistence.";
Quotation[6] = "What do YOU WANT TO DO?";
Quotation[7] = "Success usually comes to those who are too busy to be looking for it.";
Quotation[8] = "Love the river's \"beauty\", but live on a hill.";
Quotation[9] = "Strength does not come from winning. Your struggles develop your strengths. When you go through hardships and decide not to surrender, that is strength.";

// ======================================
// Do not change anything below this line
// ======================================
var Q = Quotation.length;
var whichQuotation=Math.round(Math.random()*(Q-1));

document.body.style.color = "white";


// insert quotes into div
var quoteContainer = document.getElementById('quoteBox');
var quote = "<span class='quote'>" + Quotation[whichQuotation] + "</span>";
quoteContainer.innerHTML += quote;

// thanks, matt
      var storage = {};
      var stor = true;
      var lineNum = 0;
      var ulCont = document.getElementsByClassName('list'); // all lists to an array

      // put text into storage
      // console.log(ulCont[0]);
      window.onkeypress = function(event){

          // get an array of just the txt elements
          var array1 = ulCont[0].getElementsByTagName("li");
          
          // reset and refill storage
          storage = {};
          for(var i=0, j=0; i < array1.length; i++) {
            var text = array1[i].innerText;
            if (text != "\n" && text != '' && text != ' '){
              storage[j] = text;
              j++;
            }
          }
          
          localStorage.setItem('list', JSON.stringify(storage));
          console.log(JSON.stringify(storage));
      }

      // find storage or set to nothing in order to render
      if (localStorage && localStorage.getItem('list')) {
        storage = JSON.parse(localStorage.getItem('list'));
        console.log(storage);
      }
      else {
        storage = {
          "0": ""
        }
        stor = false;
      }

      // loop through storage and render each line approriately
      var length = Object.keys(storage).length;
      for(var i=0; i <= length; i++) {
        var li = document.createElement("li");
        li.setAttribute("id", lineNum);

        //var btn = createBtn(lineNum);
        var txt = createTxt(lineNum);

        // create last line
        if (i == length) {
          if(stor) {
            li.setAttribute("class", "last");
            li.addEventListener("click", function(){
              li.setAttribute("class", "");
            });
            txt.appendChild(document.createTextNode(""));
          } else 
            break;
        } else {
          txt.appendChild(document.createTextNode(storage[i]));
        }
        ulCont[0].appendChild(txt);
        lineNum++;
      }
      

      // returns a editable text element
      function createTxt(line) {
        var txt = document.createElement("li");
        txt.setAttribute("id", line);
        txt.setAttribute("contentEditable", true);
        txt.setAttribute("class", "txt");

        return txt;
      }

      
      




//allocate size of boxes
function boxsize() {
  //find width
  var docWidth = $(window).width();
  var boxWidth = (docWidth/2)-25;
  //console.log(docWidth, boxWidth);

  //find height
  var docHeight = $(window).height();
  var boxHeight = docHeight-200;

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







// var ostream;

// var file = Cc["@mozilla.org/file/local;1"].createInstance(Ci.nsILocalFile);
// file.initWithPath('/home/rob/Desktop/');
// file.append('Test.txt');



// try{        

//     if (file.exists() === false) {file.create(Ci.nsIFile.NORMAL_FILE_TYPE, 420);}

//     ostream = FileUtils.openFileOutputStream(file, FileUtils.MODE_WRONLY | FileUtils.MODE_APPEND);

//     var converter = Cc["@mozilla.org/intl/scriptableunicodeconverter"].createInstance(Ci.nsIScriptableUnicodeConverter);
//     converter.charset = "UTF-8";

//     var istream = converter.convertToInputStream('This is my string of text');

//     // The last argument (the callback) is optional.
//     NetUtil.asyncCopy(istream, ostream, function(status) {

//         if (!components.isSuccessCode(status)) {

//             alert('error');                 

//         }else{

//             alert('success');
//         }
//     });
// } catch (e) {
//     return false;
// }

