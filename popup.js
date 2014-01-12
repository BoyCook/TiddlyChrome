
// Run our kitten generation script as soon as the document's DOM is ready.
// document.addEventListener('DOMContentLoaded', function () {
//   // kittenGenerator.requestKittens();
// });

function saveTiddler() {
   var baseURL = 'http://boycook.tiddlyspace.com/';
   var spaceName = 'boycook';
   var space = new Space(baseURL, spaceName, this);

this.space.saveTiddler(tiddler, this.addedTiddler, this.ajaxError);

   space.saveTiddler(tiddler, success, error)

}

function readTiddler() {
   var typeElem = document.getElementById('type');
   var type = typeElem.options.selectedIndex[typeElem.options.selectedIndex].value;

   var tiddler = {};
   tiddler.title = document.getElementById('title').value;
   tiddler.text = document.getElementById('text').value;
   tiddler.tags = document.getElementById('tags').value;
   tiddler.type = type;
   tiddler.bag = this.spaceName + '_' + 'public';
}
