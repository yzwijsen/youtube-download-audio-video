// when a tab's url changes and matches youtube.com/watch, show the page action
function checkForValidUrl(tabId, changeInfo, tab) {
  if (tab.url.indexOf('youtube.com/watch') > -1) {
    chrome.pageAction.show(tabId);
	chrome.browserAction.setPopup({
				popup: "popup.html"
			});
  }
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);

			
			
