document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('response').classList.remove('hidden');
    document.getElementById('bgMusic').play();
});

document.getElementById('noBtn').addEventListener('mouseover', function() {
    let x = Math.random() * window.innerWidth - 100;
    let y = Math.random() * window.innerHeight - 100;
    this.style.left = x + 'px';
    this.style.top = y + 'px';
});
