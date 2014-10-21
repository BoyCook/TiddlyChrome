// Saves options to localStorage.
function save_options() {
   var space = document.getElementById("space").value;
   localStorage["space"] = space;

   var tag = document.getElementById("tag").value;
   localStorage["tag"] = tag;

   var visibility = get_radio_value("visibility");
   localStorage["visibility"] = visibility;

   var type = document.getElementById("type").value;
   localStorage["type"] = type;

   console.log({space: space, tag: tag, visibility: visibility, type: type})
}

// Restores select box state to saved value from localStorage.
function restore_options() {
   restore_option("space");
   restore_option("tag");
   restore_radio("visibility");
   restore_option("type");
}

function get_radio_value(name) {
   var radio = document.getElementsByName(name);
   if (radio[0].checked) {
      return radio[0].value;
   } else {
      return radio[1].value;
   }
}

function restore_option(name) {
	var val = localStorage[name];
	if (!val) {
		return
	}
	document.getElementById(name).value = val;
}

function restore_radio(name) {
   var val = localStorage[name];
   var radio = document.getElementsByName(name);
   if (radio[0].value == val) {
      radio[0].checked = true;
   } else {
      radio[1].checked = true;
   }
}

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);
