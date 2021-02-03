const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const profileImgs = document.querySelectorAll('.profile-pic');
const quotes = document.querySelectorAll('.quote-block');

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

document.addEventListener("keydown", (e) =>{
    if(e.code === 'ArrowLeft'){
        console.log('wow! prev.');
        prevSlide();
    }
});

document.addEventListener('keyup', (e) =>{
    if(e.code === 'ArrowRight'){
        console.log('wow! prev.');
        nextSlide();
    }
});

function nextSlide(){
    const activeImg = document.querySelector('.active-img');
    const activeQuote = document.querySelector('.active-quote');
    activeImg.classList.remove('active-img');
    activeQuote.classList.remove('active-quote');

    if(activeImg.nextElementSibling){
        activeImg.nextElementSibling.classList.add('active-img');
    } else{
        profileImgs[0].classList.add('active-img');
    }

    if(activeQuote.nextElementSibling){
        activeQuote.nextElementSibling.classList.add('active-quote');
    } else{
        quotes[0].classList.add('active-quote');
    }
}

function prevSlide(){
    const activeImg = document.querySelector('.active-img');
    const activeQuote = document.querySelector('.active-quote');
    activeImg.classList.remove('active-img');
    activeQuote.classList.remove('active-quote');

    if(activeImg.previousElementSibling){
        activeImg.previousElementSibling.classList.add('active-img');
    } else{
        profileImgs[profileImgs.length-1].classList.add('active-img');
    }

    if(activeQuote.previousElementSibling){
        activeQuote.previousElementSibling.classList.add('active-quote');
    } else{
        quotes[profileImgs.length-1].classList.add('active-quote');
    }
}
