// Create function to select elements
const selectElement = (element) => document.querySelector(element);

//Open and close nav on click
selectElement('.menu-icons').addEventListener('click', () => {
    selectElement('nav').classList.toggle('active');
})

let links = document.querySelectorAll('nav a');

for(let i = 11; i <= 14; i++) {
    links[i].addEventListener('click', function() {
        selectElement('nav').classList.remove('active');
    })
}
