const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftbtn = document.getElementById('left');
const rightbtn = document.getElementById('right');

let activeslide = 0;

function setbgbody(){

    body.style.backgroundImage = slides[activeslide].style.backgroundImage;
}

setbgbody();

rightbtn.addEventListener('click',()=>{
    
    activeslide++;

    if(activeslide > slides.length - 1){
        activeslide = 0;
    }

    console.log(activeslide);

    setbgbody();
    setactiveslide();
})

leftbtn.addEventListener('click',()=>{
    // console.log('left')

    activeslide--;

    if(activeslide < 0){
        activeslide = slides.length - 1;
    }

    console.log(activeslide)

    setbgbody();
    setactiveslide()
})

function setactiveslide(){
    slides.forEach(slide=>slide.classList.remove('active'));

    slides[activeslide].classList.add('active');
}