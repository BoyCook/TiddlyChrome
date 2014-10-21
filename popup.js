
// Run our kitten generation script as soon as the document's DOM is ready.
// document.addEventListener('DOMContentLoaded', function () {
//   // kittenGenerator.requestKittens();
// });

function TiddlyChrome() {
   TiddlyChrome.spaceName = localStorage["space"];
   TiddlyChrome.tag = localStorage["tag"];
   TiddlyChrome.type = localStorage["type"];
   TiddlyChrome.visibility = localStorage["visibility"];
   TiddlyChrome.baseURL = 'http://' + TiddlyChrome.spaceName + '.tiddlyspace.com';
}

TiddlyChrome.saveTiddler = function() {
   // var space = new Space(baseURL, spaceName, this);
   var tiddler = TiddlyChrome.readTiddler();
   console.log(tiddler);
   TiddlyChrome.putTiddler(tiddler);
};

TiddlyChrome.openSpace = function() {
   var url = 'http://' + TiddlyChrome.spaceName + '.tiddlyspace.com';
   chrome.tabs.create({'url': url});   
};

TiddlyChrome.show = function(module) {
   TiddlyChrome.hideAll();
   document.getElementsByClassName(module)[0];
   // TODO: add/remove hide class
};

TiddlyChrome.hideAll = function() {
   var modules = document.getElementsByClassName('module');
   for (var i=0,len=modules.length; i<len; i++) {
      var module = modules[i];
      module.className
   }
   document.getElementsByClassName('tiddler-title')[0].value
};

TiddlyChrome.getTiddlers = function(url) {
// http://boycook.tiddlyspace.com/search?select=tag:git
   // TODO: add/remove hide class
   TiddlyChrome.doAjax(TiddlyChrome.baseURL + '/' + url, undefined, 'GET', callBack);      
};

TiddlyChrome.readTiddler = function() {
   var typeElem = document.getElementById('type');
   var type = typeElem.options[typeElem.options.selectedIndex].value;

   var tiddler = {};
   tiddler.title = document.getElementById('title').value;
   tiddler.text = document.getElementById('text').value;
   tiddler.tags = document.getElementById('tags').value;
   tiddler.type = type;
   tiddler.bag = TiddlyChrome.spaceName + '_' + 'public';
   return tiddler;
};

TiddlyChrome.putTiddler = function(tiddler) {
   var callBack = function() {
      if (xhr.readyState == 4) {
         console.log(xhr.responseText);
      }
   };
   TiddlyChrome.doAjax(TiddlyChrome.baseURL + '/bags/' + tiddler.bag + '/tiddlers/' + tiddler.title,
                       'PUT', tiddler, callBack);   
};

TiddlyChrome.doAjax = function(url, method, data, callBack) {
   var xhr = new XMLHttpRequest();
   xhr.open(method, url, true);
   xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
   xhr.onreadystatechange = callBack;
   if (data) {
      xhr.send(JSON.stringify(data));   
   } else {
      xhr.send();
   }
};

var app = new TiddlyChrome();
document.getElementById('save').onclick = TiddlyChrome.saveTiddler;
document.getElementById('showEditTiddler').onclick = TiddlyChrome.openSpace;
document.getElementById('showFavourites').onclick = TiddlyChrome.openSpace;
document.getElementById('showMySpace').onclick = TiddlyChrome.openSpace;
