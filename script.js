const bee = document.getElementById('bee');
let x = 0;
let y = 0;

function flyBee() {
    const randomX = Math.random() * 5;
    const randomY = Math.random() * 5;

    x += randomX;
    y += randomY;

    bee.style.left = x + 'px';
    bee.style.top = y + 'px';

    requestAnimationFrame(flyBee);
}

flyBee();