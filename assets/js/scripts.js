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

  positionDraggables();
});

function addClass() { 
  var element = document.getElementById("entry_sb_3_img2"); 
  element.classList.toggle("draggable");
  element.classList.toggle("img_hidden");
}

const findPostLinks = () => {
  // Finds all entry images
  const entryImages = document.querySelectorAll('[id^=E]');
  const contentImages = document.querySelectorAll('[id*=C],[id*=D],[id*=A]');

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

const positionDraggables = () => {
  // To-Do: Update to more reusable and less brute force function here
  const draggablePosts = document.querySelectorAll('div[id^=entry_].draggable');
  console.log(draggablePosts);

  // const exampleImg = document.querySelector('[id=entry_41]');
  // const output = exampleImg.getBoundingClientRect();
  // const draggableImg = document.querySelector('[id=entry_40');
  
  // draggableImg.style.left = (output.left - 200) + 'px';

  // Chap. 5 Draggable Posts
  // Chap. 5 Draggable Posts
  
  const e57 = document.querySelector('[id=entry_57]');
  const e57Rect = e57.getBoundingClientRect();
  const e56 = document.querySelector('[id=entry_56');
  
  e56.style.left = (e57Rect.left - 200) + 'px';

  const e73 = document.querySelector('[id=entry_73]');
  const e73Rect = e73.getBoundingClientRect();
  const e72 = document.querySelector('[id=entry_72');
  
  e72.style.left = (e73Rect.left - 200) + 'px';

  //console.log(output.top, output.right, output.bottom, output.left);
}

const rotatePost = () => {
  /**
   * TO-DO: Create a reusable function that adds a click event listener to rotate
   * post plus a timeout of 20 seconds to re rotate into it's inital spot
   * NOTE: I believe we want for this to be floating, so we'll have to do some repositioning as well
   */
}




// </script>