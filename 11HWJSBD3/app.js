

     
   
const box = document.querySelector('.box');

const images = Array.from(document.querySelectorAll('.box img'));


if(localStorage.activeSrc){
  document.body.style.backgroundImage = `url(${localStorage.activeSrc})`;
}  else{ document.body.style.backgroundImage = `url(${images[0].getAttribute('src')})`}


box.addEventListener('click', (e) => {
  if(e.target.matches('img')){
    const activeImage = e.target;
    images.forEach(img => img.classList.remove('active'));
    
    activeImage.classList.add('active');
    
    const activeSrc = activeImage.getAttribute('src');
    localStorage.activeSrc = activeSrc;
    document.body.style.backgroundImage = `url(${activeSrc})`;

  }
})
