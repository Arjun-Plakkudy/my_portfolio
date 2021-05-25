// Typewriter
const TypeWriter = function(txtElement, words, wait=3000){
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait,10);
    this.type();
    this.isDeleting = false;
}
// Init On DOM Load
document.addEventListener('DOMContentLoaded',init);
// Type method
TypeWriter.prototype.type = function(){
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];

    if(this.isDeleting){
        this.txt = fullTxt.substring(0,this.txt.length-1);
    }
    else{
        this.txt = fullTxt.substring(0,this.txt.length+1);
    }

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`
    let typeSpeed = 300;

    if(this.isDeleting){
        typeSpeed/=2;
    }

    //If word is complete
    if(!this.isDeleting && this.txt===fullTxt){
        typeSpeed = this.wait;
        this.isDeleting = true;
    }
    else if(this.isDeleting && this.txt===''){
        this.isDeleting = false;
        this.wordIndex++;

        typeSpeed = 500;
    }

    setTimeout(()=>this.type(),typeSpeed);
}



// Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    new TypeWriter(txtElement, words, wait);
  }

  // Typewriter



// Scroll down event

const arrowDown = document.querySelector('.scroll-down');
const abt = document.querySelector('#abt');
const exp = document.querySelector('#exp');
const achieve = document.querySelector('#achieve');
const cont = document.querySelector('#cont');

// Arrow scroll down Event
arrowDown.addEventListener('click',()=>{
    window.scrollBy({
        top:500,
        behavior:'smooth'
    })
});

// Arrow scroll down Event
abt.addEventListener('click',()=>{
    window.scrollBy({
        top:700,
        behavior:'smooth'
    })
});

// Arrow scroll down Event
exp.addEventListener('click',()=>{
    window.scrollBy({
        top:1300,
        behavior:'smooth'
    })
});

// Arrow scroll down Event
achieve.addEventListener('click',()=>{
    window.scrollBy({
        top:1950,
        behavior:'smooth'
    })
});

// Arrow scroll down Event
cont.addEventListener('click',function(){
    window.scrollBy({
        top:2550,
        behavior:'smooth'
    })
});
// Scroll down event





//   Image slider
var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

// Javascript for image slider manual navigation
var manualNav = function(manual){
    slides.forEach((slide) => {
    slide.classList.remove('active');

    btns.forEach((btn) => {
        btn.classList.remove('active');
    });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
    });
});

// Javascript for image slider autoplay navigation
var repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {
    setTimeout(function(){
        [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('active');
        });

    slides[i].classList.add('active');
    btns[i].classList.add('active');
    i++;

    if(slides.length == i){
        i = 0;
    }
    if(i >= slides.length){
        return;
    }
    repeater();
    }, 3000);
    }
    repeater();
}
repeat();

// changeSlide();
//   Image slider