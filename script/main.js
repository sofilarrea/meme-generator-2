console.log('Hello from script')
const asideImg = document.getElementById('aside-image')
const asideText = document.getElementById('aside-text')
const asideButtonImg = document.getElementById('openSidebarButtonImg')
const asideButtonText = document.getElementById('openSidebarButtonText')

/* asideButtonImg.addEventListener('click', () => {
    if (asideImg.style.display === 'none') {
        asideImg.style.display = 'block'
        asideText.style.display = 'none'
       
    } else {
        asideImg.style.display = 'none'
        asideText.style.display = 'block'
        asideButtonText.innerText = 'Show image'
    }
    }
);

asideButtonText.addEventListener('click', () => {
    if (asideImg.style.display === 'none') {
        asideImg.style.display = 'block'
        asideText.style.display = 'none'
        asideButtonText.innerText = 'Show text'
    } else {
        asideImg.style.display = 'none'
        asideText.style.display = 'block'
        asideButtonText.innerText = 'Show image'
    }
    }
); */

asideButtonImg.addEventListener('click', () => {
    asideImg.style.display = 'block';
    asideText.style.display = 'none';
});

asideButtonText.addEventListener('click', () => {
    asideImg.style.display = 'none';
    asideText.style.display = 'block';
});  

