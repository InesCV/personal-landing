function createNumbers() {
  // Get dynamic number of lines for the coding content
  var codeContent = document.getElementById('coding-content');
  // Leave more space for mobile devices
  let extraHeight = 24;
  const screenWidth = screen.width;
  if (screenWidth < 500) {
    extraHeight = 240; 
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
