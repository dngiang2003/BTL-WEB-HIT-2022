var images = document.querySelectorAll('.gallery-img')
var prev = document.querySelector('.arrLeft')
var next = document.querySelector('.arrRight')
var img = document.querySelector('.main-img img')
var gallery = document.querySelector('.gallery')
var close = document.querySelector('.closeBtn')
var currIndex = 0


function showGallery(){
    // wrap-main.classList.add('bodyshow')
    if (currIndex==0) {
        prev.classList.add('hide')
    } else {
        prev.classList.remove('hide')
    }
    if (currIndex==images.length-1) {
        next.classList.add('hide')
    } else {
        next.classList.remove('hide')
    }
    img.src = images[currIndex].src
    gallery.classList.add('show-img')
    goToTop();
    document.body.style.overflow = 'hidden';
}
prev.addEventListener('click', function() {
    if (currIndex > 0){
        currIndex--;
        showGallery();
    }
})
next.addEventListener('click', function() {
    if(currIndex < images.length-1) {
        currIndex++;
        showGallery();
    }
})

images.forEach((item, index) => {
    item.onclick =  function() {
        currIndex = index
        showGallery()
    }
document.addEventListener('keydown', function(e) {
    if (e.keyCode == 27) {
        gallery.classList.remove('show-img')
        document.body.style.overflow = 'auto';
    }
})
close.onclick = function() {
    gallery.classList.remove('show-img')
    document.body.style.overflow = 'auto';
}

})