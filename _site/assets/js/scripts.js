// target elements with the "draggable" class
interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    // modifiers: [
    //   interact.modifiers.restrictRect({
    //     restriction: 'parent',
    //     endOnly: true
    //   })
    // ],
    // enable autoScroll
    autoScroll: true,

    listeners: {
      // call this function on every dragmove event
      move: dragMoveListener,

      // call this function on every dragend event
      end (event) {
        var textEl = event.target.querySelector('p')
      }
    }
  })

function dragMoveListener (event) {
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)'

  // update the posiion attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}

// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener

// function to add and remove class for green asterisk blockquotes
// <script type="text/javascript">

window.addEventListener('DOMContentLoaded', (event) => {
  var element = document.getElementById("entry_sb_3_img2");
  // simple fix to stop console log errors for now
  if(element != null) {
    element.classList.toggle("img_hidden"); 
  }

  findPostLinks();
});

function addClass() { 
  var element = document.getElementById("entry_sb_3_img2"); 
  element.classList.toggle("draggable");
  element.classList.toggle("img_hidden");
}

const findPostLinks = () => {
  // Finds all entry images
  const entryImages = document.querySelectorAll('[id^=E]');
  const contentImages = document.querySelectorAll('[id*=C]');

  const filteredImgs = [...entryImages].filter(img => ![...contentImages].includes(img));

  console.group('Entry Images and Content Images');
  console.log('Entry Images');
  console.log(entryImages); // logs nodelist
  console.log('Content Images');
  console.log(contentImages);
  console.log('Filtered Images');
  console.log(filteredImgs);
  console.groupEnd()



  filteredImgs.forEach(entry => {
    if(entry.tagName != 'A' ) {
      // for all non-a tag images/hide them
      entry.classList.add("img_hidden");
    }
    // find the anchorLinkID and print it
    const anchorLinkId = entry.id;
    console.log(`Img ID: ${anchorLinkId}`);

    // will need to do the same for blockquotes as well
    const anchorTag = document.querySelector(`a[class*=${anchorLinkId}]`);
    
    if(anchorTag != null) {
      console.log(anchorTag);
      anchorTagRect = anchorTag.getBoundingClientRect();
      console.log('AnchorTag x-coord is: ' + anchorTagRect.x);
      anchorTag.addEventListener('mouseover', () => {
        entry.classList.toggle("img_hidden");
      });
    }
  });
}




// </script>