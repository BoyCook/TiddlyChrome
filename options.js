// Saves options to localStorage.
function save_options() {
   var space = document.getElementById("space").value;
   localStorage["space"] = space;

   var tag = document.getElementById("tag").value;
   localStorage["tag"] = tag;

   // var space = document.getElementById("visibility").value;
   // localStorage["visibility"] = visibility;

   var space = document.getElementById("type").value;
   localStorage["type"] = type;         
}

// Restores select box state to saved value from localStorage.
function restore_options() {
   restore_option("space");
   restore_option("tag");
   // restore_option("visibility");
   restore_option("type");
}

function restore_option(name) {
	var val = localStorage[name];
	if (!val) {
		return
	}
	document.getElementById(name).value = val;
}

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);
