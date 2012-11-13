communicator.on('iconClicked', function(obj) {
  console.log('Icon was clicked. Received following data:', obj);

  // confirm that the data was received (send a 'request' to the background)
  communicator.request('confirm', { received: true });
});