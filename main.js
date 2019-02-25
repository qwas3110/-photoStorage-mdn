const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
(function () {
    for (let x = 1; x <= 5; x++) {
        const newImage = document.createElement('img');
        newImage.setAttribute('src', `images/pic${x}.jpg`);
        thumbBar.appendChild(newImage);
    }
    thumbBar.addEventListener('click', function (e) {
        const img = e.target.getAttribute('src');
        displayedImage.setAttribute('src', img);
    });
    btn.onclick = function () {
        const text = (this.textContent === '变暗') ? ('变亮') : ('变暗');
        const classNameText = (this.textContent === '变暗') ? ('light') : ('dark');
        const color = (this.textContent === '变暗') ? ("rgba(0,0,0,0.5)") : ('rgba(0,0,0,0)');
        btn.setAttribute('class',classNameText);
        btn.textContent = text;
        overlay.style.backgroundColor = color;
    }
}());
