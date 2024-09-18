document.querySelectorAll('.image-container img').forEach(image => {    //select all image
    image.onclick = () => {     //onclick event listener
        document.querySelector('.popup-image').style.display = 'block';    //make visible
        document.querySelector('.popup-image img').src = image.getAttribute('src');
        document.querySelector('.popup-image .popup-text').textContent = image.getAttribute('data-text');
    }
});

document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
}
