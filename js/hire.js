let faMoon = document.querySelector('.fa-moon');
let mode = document.querySelectorAll('.mode');
let switchMode = document.querySelector('.switch');
let backText = document.querySelectorAll('.back-text');
let hireSubmit = document.querySelector('.hire-submit');
let hireSelect = document.querySelectorAll('.hire-select');
let hireForm = document.querySelector('.hire-form');
// console.log(hireForm);

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
    hireForm.classList.toggle('hire-form2');
})


// select
for (let i = 0; i < hireSelect.length; i++) {
    hireSelect[i].addEventListener('click', (e) => {
        e.preventDefault();
        let hire = e.currentTarget.innerHTML
        console.log(hire);
        
        hireSelect[i].classList.toggle('hire-select-change');
        if (hireSelect[i].classList.contains('hire-select-change')) {
            hireSelect[i].innerHTML = hire + '<i class="fas fa-check"></i>';
        }
    } )
}
// submit
hireSubmit.addEventListener('click', () => {
    alert('Thank you for your interest in my services. I will get back to you soon.');
}
)
