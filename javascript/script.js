// hamburger & navlist
const menuIcon =  document.querySelector('.hamburger');
const nav = document.getElementById('nav');
const titleStyle = document.querySelector('.header .title');
const subtitleStyle = document.querySelector('.header .sub-title');

menuIcon.addEventListener('click',()=>{
  menuIcon.classList.toggle('change');
  nav.classList.toggle('active');
  titleStyle.classList.toggle("hidden");
  subtitleStyle.classList.toggle("hidden");
});


// image slideshow start
const slideShowImage = document.querySelectorAll('.slideshow .slideshow_image');
const nextImageShowUp = 500;
let currentImageTimer = 0;


function openingPhotoanimation() {
  setInterval(nextImage, nextImageShowUp);
  slideShowImage[currentImageTimer].style.opacity = "1";
  
  function nextImage() {
    if (currentImageTimer != 5) {
      slideShowImage[currentImageTimer].style.opacity = 0;
      currentImageTimer = (currentImageTimer + 1) % slideShowImage.length;
      slideShowImage[currentImageTimer].style.opacity = 1;
    } else {
      return;
    }
    }
}

// image slideshow end


//opening animation start
const textDiv = document.querySelector('.opening_animation');
const text = document.querySelector('.opening_text_title');

const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

const subText = document.querySelector('.opening_text_subtitle');
const strSubText = subText.textContent;
const splitSubText = strSubText.split("");
subText.textContent = "";
for (let j = 0; j < splitSubText.length; j++) {
  subText.innerHTML += "<span>" + splitSubText[j] + "</span>";
}

function subTextAction() { 
  let timerTwo = setInterval(onTickTwo, 200);
  function onTickTwo() {
    const span = subText.querySelectorAll('.opening_text_subtitle span')[charTwo];
    span.classList.add('fade2');
    charTwo++;
    if (charTwo === splitSubText.length) {
      setTimeout(()=> {
        openingPhotoanimation();
        }, 800);   
      complete();
      return;
    }
  }
  
  function complete() {
    clearInterval(timerTwo);
    timerTwo = null;
  } 
}

let char = 0;
let timer = setInterval(onTick, 200);
let charTwo = 0;



function onTick() {
  const span = text.querySelectorAll('.opening_text_title span')[char];
  span.classList.add('fade');
  char++;
  if (char === splitText.length) {
    subTextAction();
    setTimeout(()=> {
      textDiv.style.display = "none";
      }, 8500);    
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}

const skipBtn = document.querySelector('.skip_btn');

function skipAnimation() {
  setTimeout(()=> {
    textDiv.style.display = "none";
    }, 300);   
}


// opening animation end