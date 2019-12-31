// Create function to select elements
const selectElement = (element) => document.querySelector(element);

//Open and close nav on click
selectElement('.menu-icons').addEventListener('click', () => {
    selectElement('nav').classList.toggle('active');
})

let links = document.querySelector('.nav-list');
links.addEventListener('click', function(e) {
    if(e.target.getAttribute('data-link')) {
        selectElement('nav').classList.remove('active');
    }
})








// let links = document.querySelectorAll('nav ul');

// console.log(links);
// for(let i = 11; i <= 14; i++) {
//     links[i].addEventListener('click', function() {
//         selectElement('nav').classList.remove('active');
//     })
// }
