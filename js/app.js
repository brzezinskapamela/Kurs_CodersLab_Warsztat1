
const pictures = document.querySelectorAll('.gallery_picture li');

const prevBtn = document.querySelector('.navigation-button.left');

const nextBtn = document.querySelector('.navigation-button.right');

let counter = 0;


function nextPic(event) {
    event.preventDefault();

    pictures[counter].classList.remove('visible');

    if(counter === pictures.length - 1) {
        counter = 0;
    } else {
        counter++;
    }

    pictures[counter].classList.add('visible');
}

function prevPic(event) {
    event.preventDefault();

    pictures[counter].classList.remove('visible');

    if(counter === 0) {
        counter = pictures.length - 1;
    } else {
        counter--;
    }

    pictures[counter].classList.add('visible');
}

pictures[counter].classList.add('visible');
nextBtn.addEventListener('click', nextPic);
prevBtn.addEventListener('click', prevPic);
