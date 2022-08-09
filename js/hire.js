let moon = document.querySelector('.moon');
let darkLight = document.querySelector('.dark-light');
let mode = document.querySelectorAll('.mode');
let switchMode = document.querySelector('.switch');
let backText = document.querySelectorAll('.back-text');
let hireSubmit = document.querySelector('.hire-submit');
let hireSelect = document.querySelectorAll('.hire-select');
let hireForm = document.querySelectorAll('.hire-form');


// dark mode
switchMode.addEventListener('click', () => {

    for (let i = 0; i < mode.length; i++) {
        mode[i].classList.toggle('bg-dark');
        mode[i].classList.toggle('text-light');
    }

    for (let i = 0; i < backText.length; i++) {
        backText[i].classList.toggle('text-light');
    }
    faMoon.classList.toggle('fa-moon-new');

    hireSubmit.classList.toggle('hire-submit-change');

    for (let i = 0; i < hireForm.length; i++) {
        hireForm[i].classList.toggle('hire-form2');
    }
})

moon.addEventListener('click', () => {
    console.log(darkLight);
    darkLight.classList.toggle('fa-sun');
    moon.classList.toggle('light');
})


// select one option
hireSelect.forEach(function(item) {
    item.addEventListener('click', function() {
        let itemText = item.innerText;
        hireSelect.forEach(btn => btn.classList.remove('hire-select-change'));
        this.classList.add('hire-select-change');
    })
});