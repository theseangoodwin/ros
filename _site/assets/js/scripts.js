
// Get the element
var elem = document.querySelector('#entry_12');
// Create a copy of it
var clone = elem.cloneNode(true);
// Update the ID and add a class
clone.id = 'entry_12b';
clone.classList.add('rotate_entry_b');
// Inject it into the DOM
elem.after(clone);
