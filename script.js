const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {

  panel.addEventListener('click', function(){

    // remove the class to all the other panels
    removeActiveClasses();

    // change this to active
    panel.classList.add('active');
  })
})

// remove the classes on all the panels
function removeActiveClasses(){
  panels.forEach( (panel) => {
    return panel.classList.remove('active');
  })
}