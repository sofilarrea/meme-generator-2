console.log('Hello from script')
/* Open and close aside */
const asideImg = document.getElementById('aside-image')
const asideText = document.getElementById('aside-text')
const asideButtonImg = document.getElementById('openSidebarButtonImg')
const asideButtonText = document.getElementById('openSidebarButtonText')

asideButtonImg.addEventListener('click', () => {
    asideImg.style.display = 'block';
    asideText.style.display = 'none';
});

asideButtonText.addEventListener('click', () => {
    asideImg.style.display = 'none';
    asideText.style.display = 'block';
});  

