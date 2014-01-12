
// Run our kitten generation script as soon as the document's DOM is ready.
// document.addEventListener('DOMContentLoaded', function () {
//   // kittenGenerator.requestKittens();
// });

function saveTiddler() {
   var baseURL = 'http://boycook.tiddlyspace.com/';
   var spaceName = 'boycook';
   // var space = new Space(baseURL, spaceName, this);
   var tiddler = readTiddler();
   console.log(tiddler);
   // space.saveTiddler(tiddler, success, error)
}

function readTiddler() {
   var typeElem = document.getElementById('type');
   var type = typeElem.options[typeElem.options.selectedIndex].value;

   var tiddler = {};
   tiddler.title = document.getElementById('title').value;
   tiddler.text = document.getElementById('text').value;
   tiddler.tags = document.getElementById('tags').value;
   tiddler.type = type;
   tiddler.bag = document.getElementById('space').value + '_' + 'public';
   return tiddler;
}

document.getElementById('save').onclick = saveTiddler;
