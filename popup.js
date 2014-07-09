//var background = chrome.extension.getBackgroundPage();

chrome.tabs.query({
    active: true,               // Select active tabs
    lastFocusedWindow: true     // In the current window
}, function(array_of_Tabs) {
    // Since there can only be one active tab in one active window, 
    //  the array has only one element
    var tab = array_of_Tabs[0];
    // Example:
    var url = tab.url;
	
    // get video id from url
	var expr = /(?:v=)([^&]+)/;
	var videoid = url.match(expr)[1];	
	console.log("video id is: " + videoid);
	
	//loop throuhg links and add videoid
	var links = document.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
        (function () {
            var ln = links[i];
            links[i].href = ln.href + videoid;
        })();
    }
});

//wait for popup to complete loading
document.addEventListener('DOMContentLoaded', function () {

    var links = document.getElementsByTagName("a");
	//loop through all links and add click action
    for (var i = 0; i < links.length; i++) {
        (function () {
            var ln = links[i];
            ln.onclick = function () {
                chrome.tabs.create({active: true, url: ln.href});
            };
        })();
    }
});
