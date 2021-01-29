//photo garallery
const lightbox = document.createElement('div');
const images = document.querySelectorAll('img');
const closeIcon = document.querySelector('.fa-times');
const twitterIcon = document.getElementById('twitter2');
const modalTxt = document.querySelector('.modalTxt');


//create lightbox(photo click and show up) 
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

images.forEach(image => {
  image.addEventListener('click', e => {

  document.body.style.overflow = "hidden";

  lightbox.classList.add('showup');
  closeIcon.classList.add('visible');
  twitterIcon.classList.add('visible');
  modalTxt.classList.add('visible');

  const img = document.createElement('img');
  img.src = image.src;
  while (lightbox.firstChild) {
    lightbox.removeChild(lightbox.firstChild);
  }
  lightbox.appendChild(img);
  })
})

closeIcon.addEventListener('click', e => {
  if(e.target !== e.currentTarget) return;
  lightbox.classList.remove('showup');
  closeIcon.classList.remove('visible');
  twitterIcon.classList.remove('visible');
  modalTxt.classList.remove('visible');
  document.body.style.overflow = "visible";
})

//End of create lightbox(photo click and show up) 
function checkSlide(e) {
  images.forEach(sliderImage => {
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    if(isHalfShown) {
      sliderImage.classList.add('active_img');
    } else {
      sliderImage.classList.remove('active_img');
    }
  })
}
window.addEventListener('scroll', checkSlide);