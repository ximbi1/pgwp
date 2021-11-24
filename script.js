textBox.addEventListener('click', function(e) {
    e.preventDefault();
    textBox.style.position = 'absolute';
    textBox.style.left = e.clientX + 'px';
    textBox.style.top = e.clientY + 'px';
});