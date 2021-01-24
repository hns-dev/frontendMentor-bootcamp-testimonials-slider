const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const testimonial = document.querySelectorAll('.testimonial');

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

function nextSlide(){
    const active = document.querySelector('.active');
    active.classList.remove('active');

    if(active.nextElementSibling){
        active.nextElementSibling.classList.add('active');
    } else{
        testimonial[0].classList.add('active');
    }
}

function prevSlide(){
    const active = document.querySelector('.active');
    active.classList.remove('active');

    if(active.previousElementSibling){
        active.previousElementSibling.classList.add('active');
    } else{
        testimonial[testimonial.length-1].classList.add('active');
    }
}
