function computerPlay(){
  var items = ['Rock', 'Paper', 'Scissors'];
  var item = items[Math.floor(Math.random() * items.length)]; document.write(item);
}
computerPlay();
