// DOM elements
const panels = document.querySelectorAll('.panel');


panels.forEach((panel) => {

  panel.addEventListener('click', () => {

    // remove the active class from all panels
    removeActiveClasses()

    // makes the panel being clicked on the active panel
    panel.classList.add('active')

  })
})


// function that removes the active class from all the panels
function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active');
  })
}
