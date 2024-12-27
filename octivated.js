/*
  Plugin name:      Octivated
  Author:           Zubair Hasan
  Contact Author:   hello@zubairhasan.com
  Company:          Kodevite
  Contact Company:  https://kodevite.com
*/


document.addEventListener("DOMContentLoaded", function(event) { 
  let links = document.getElementsByTagName('a')  // Gets all the links in a document
  let activePath = window.location.href  // Checks the current URL & URI
  // Loop through all the links of documents to check which one is active
  for (i=0; i<links.length; i++){
      let link = links[i]
      let linkPath = link.href
      if(activePath == linkPath){
          link.classList.add('active')  // Adds .active class to the active link.
          console.log('Octivated! - https://github.com/obuxim/octivated')
      }
  }
});
