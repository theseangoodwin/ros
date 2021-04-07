// Get the element
var elem = document.querySelector('#entry_sb_12');
// Create a copy of it
var clone = elem.cloneNode(true);
// Update the ID and add a class
clone.id = 'entry_sb_12b';
clone.classList.add('rotate_entry_b');
// Inject it into the DOM
elem.after(clone);

var elem = document.querySelector('#entry_sb_12');
// Create a copy of it
var clone = elem.cloneNode(true);
// Update the ID and add a class
clone.id = 'entry_sb_12c';
clone.classList.add('rotate_entry_c');
// Inject it into the DOM
elem.after(clone);