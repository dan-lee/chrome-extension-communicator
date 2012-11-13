// this script relies on bgCommunicator.js. That provides the connection outside to the content script

// as easy example, the content script should be notified when the extensions icon is clicked:
chrome.browserAction.onClicked.addListener(function() {
  // notify all registered tabs
  communicator.notify('iconClicked', { data: 'someValue' });
});