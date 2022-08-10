let moon = document.querySelector('.moon');
let darkLight = document.querySelector('.dark-light');
let mode = document.querySelectorAll('.mode');
let switchMode = document.querySelector('.switch');
let backText = document.querySelectorAll('.back-text');
let hireSubmit = document.querySelector('.hire-submit');
let hireSelect = document.querySelectorAll('.hire-select');
let hireForm = document.querySelectorAll('.hire-form');
let email = document.querySelector('.email');
let subscribeBtn = document.querySelector('.get-content');
let subscribeContent = document.querySelector('.modal-row-one');
let closeBtn = document.querySelector('.close-btn');
let subscribeText = document.querySelector('.subscribe-text');


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
        hireSelect.forEach(btn => btn.classList.remove('hire-select-change'));
        this.classList.add('hire-select-change');
    })
});

// subscribe to newsletter
subscribeBtn.addEventListener('click', () => {
    
    value = email.value;
    if (value == '') {
        alert('Please enter your email');
    }
    else if (value.indexOf('@') == -1) {
        alert('Please enter a valid email');
    }
    else {
        subscribeContent.classList.remove('hidden');
        subscribeText.innerHTML = `<p class="text-light text-center">Hey! ${value}, thank you for subscribing to my blog</p>`;
        email.value = '';
    }

    setTimeout(() => {
        subscribeContent.classList.add('hidden');
    }, 5000);
})

closeBtn.addEventListener('click', () => {
    subscribeContent.classList.add('hidden');
})