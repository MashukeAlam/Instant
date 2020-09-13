// var p = document.getElementById("damn");
// chrome.runtime.sendMessage("www.facebook.com");
// var b = chrome.extension.getBackgroundPage();
// p.innerHTML = b.word;

// console.log('aaaaaaa');

const input = document.getElementById("url_bar");
input.focus();
// const search = document.getElementById("search");    	
    	
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
  	// console.log("aaaaaaa");
  	// search.innerHTML = "AAAAAAAAA";
   event.preventDefault();
      chrome.extension.sendMessage(`https://google.com/search?q=${document.getElementById("url_bar").value}`);

     }
});
