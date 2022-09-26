/* START Typerwriter effect on header */
document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = [ "Hi there!", "Benvingut!", "Hola!", "Hello world,"];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to presentation id tag
     document.getElementById("presentation").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});
/* END Typerwriter effect on header */

/* START Create dynamic list of numbers */
function createNumbers() {
  // Get dynamic number of lines for the coding content
  var codeContent = document.getElementById('coding-content');
  // Leave more space for mobile devices
  let extraHeight = 24;
  const screenWidth = screen.width;
  if (screenWidth < 500) {
    extraHeight = 24 * 17; 
  }
  var divHeight = codeContent.offsetHeight + extraHeight;
  var lineHeight = 24;
  var lines = divHeight / lineHeight;
  // Add the number of pertinent lines to the numbers div
  // 1. Get the dic element
  var codeLines = document.getElementById('coding-lines');
  // 2. Create the dynamic object
  let textBlock = document.createElement('p')
  let textNumbers = ""
  for (let i = 0; i < lines; i++) {
    textNumbers += 1 + i + "<br>";
  }
  textBlock.innerHTML = textNumbers;
  // 3. Add dynamic block into website
  codeLines.appendChild(textBlock);
}
/* END Create dynamic list of numbers */


/* START Knowledge list animation */
// Create the observer
const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      for (let i = 0; i < 12; i++) {
        let item_id = 'item-' + [i+1];
        let delay = 'delay-' + [i+1];
        item_id = document.getElementById(item_id);
        item_id.classList.add(delay);
      }
      entry.target.classList.add('knowledge-animate');
      knowledgeList = document.getElementById('knowledge-list-2');
      knowledgeList.classList.add('knowledge-animate');
    }
  });
});

observer.observe(document.getElementById('knowledge-list'));
/* END Knowledge list animation */