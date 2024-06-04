document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header__nav').classList.toggle('open');
    document.querySelector('body').classList.toggle('hiden');
})
