const aboutText = [
    {
        image: '<i class="fa-solid fa-laptop-code fs-1"></i>',
        title: 'Web Devevelopement',
        text: 'Web developemnt'
    },

    {
        image: '<i class="fa-solid fa-laptop-code fs-1"></i>',
        title: 'Web Creation',
        text: 'Bringing your design ideas to life'
    },

    {
        image: '<i class="fa-solid fa-laptop fs-1"></i>',
        title: 'Web Management',
        text: 'Manage your website'
    },

    {
        image: '<i class="fa-solid fa-laptop-code fs-1"></i>',
        title: 'Frontend Mentorship',
        text: 'Mentoring your front-end skills'
    },

    {
        image: '<i class="fa-solid fa-laptop fs-1"></i>',
        title: 'Trainings',
        text: 'help you build your skills by constructive training'
    },

    {
        image: '<i class="fa-solid fa-laptop-code fs-1"></i>',
        title: 'Consulting',
        text: 'Answering to your calls when you need it'
    }
]

const worksDetails = [
    {
        image: 'img/kodeblog.png',
        link: 'https://official-simple-soul.github.io/TeamKodecampBlog/',
        code: 'https://github.com/Official-simple-soul/TeamKodecampBlog'
    },

    {
        image: 'img/portfolio.png',
        link: 'https://official-simple-soul.github.io/myportfolio/',
        code: 'https://github.com/Official-simple-soul/myportfolio'
    },

    {
        image: 'img/daura.png',
        link: 'https://official-simple-soul.github.io/TeamZeusPage/',
        code: 'https://github.com/Official-simple-soul/TeamZeusPage'
    },

    {
        image: 'img/foodmania.png',
        link: 'https://official-simple-soul.github.io/foodmania.com/',
        code: 'https://github.com/Official-simple-soul/foodmania.com'
    },

    {
        image: 'img/restcountry.png',
        link: 'https://official-simple-soul.github.io/restCountry/',
        code: 'https://github.com/Official-simple-soul/restCountry'
    },

    {
        image: 'img/finsweet.png',
        link: 'https://official-simple-soul.github.io/KodeCampTask5/',
        code: 'https://github.com/Official-simple-soul/KodeCampTask5'
    }
]

const successStory = [
    {
        image: '<i class="fa-solid fa-hourglass-end fs-2"></i>',
        title: '5',
        text: 'Completed project',
    },
    {
        image: '<i class="fa-solid fa-face-laugh fs-2"></i>',
        title: '15',
        text: 'Happy clients',
    },
    {
        image: '<i class="fa-solid fa-code fs-2"></i>',
        title: '10k+',
        text: 'Line codes written',
    },
    {
        image: '<i class="fa-solid fa-spinner fs-2"></i>',
        title: '10',
        text: 'Projects in progress',
    },
]



let rowWrap = document.querySelector('.row-wrap');
let numberOne = document.querySelector('.number-one');
let numberTwo = document.querySelector('.number-two');
let numberThree = document.querySelector('.number-three');
let numberFour = document.querySelector('.number-four');
let workRow = document.querySelector('.swiper-wrapper');
let successStoryRow = document.querySelector('.success-story-row');
let changeText = document.querySelector('.change-text');
let mode = document.querySelectorAll('.mode');
let switchMode = document.querySelector('.switch');
let ads = document.querySelector('.ads');
let email = document.querySelector('.email');
let subscribeBtn = document.querySelector('.get-content');
let subscribeContent = document.querySelector('.modal-row-one');
let closeBtn = document.querySelector('.close-btn');
let windowCloseBtn = document.querySelector('.window-close-btn');
let subscribeText = document.querySelector('.subscribe-text');
let moon = document.querySelector('.moon');
let darkLight = document.querySelector('.dark-light');
let backText = document.querySelectorAll('.back-text');
let windowRow = document.querySelector('.window-row');

let changeCount = 0;


// About Section
for (let i = 0; i < aboutText.length; i++) {
    let aboutItem = ''
    aboutItem += `  <div class="col-md-4">
                        <div class="card pt-3 my-3 bg-transparent border-0 shadow about-hover">
                            ${aboutText[i].image}
                            <div class="card-body">
                                <h6 class="fw-bold">${aboutText[i].title}</h6>
                                <p class="" style="font-size: 13px;">${aboutText[i].text}</p>
                            </div>
                        </div>
                    </div>`
    rowWrap.innerHTML += aboutItem;
}

// works Section
function getWork() {
    let works =  worksDetails.map(item => {
        return `
                <div class="swiper-slide">
                        <div class=" card mb-4 bg-transparent border-0 work-hover" data-aos="zoom-in" data-aos-duration="1000">
                            <img src="${item.image}" alt="" class="img-fluid imagee">
                            <a href="${item.link}" target="_blank"><button class="btn btn-dark shadow btn-outline-light position-absolute me-3 mb-3 end-0 bottom-0 work-title">Go Live</button></a>
                            <a href="${item.code}" target="_blank"><button class="btn btn-dark shadow btn-outline-light position-absolute ms-3 mt-3 start-0 top-0 work-title">View Code</button></a>
                        </div>
                </div>`
    }).join('')
    workRow.innerHTML = works;
}
getWork();

// success story
for (let i = 0; i < successStory.length; i++) {
    let successStoryItem = ''
    successStoryItem += `   <div class="col-lg-3 col-md-6">
                                <div class="card about-hover mb-2 border-0 border-5 border-secondary border-top border-start shadow bg-transparent text-center py-3">
                                    <div class="d-flex justify-content-center align-items-center">
                                        ${successStory[i].image}
                                        <h2 class="mx-4 fw-bold mb-0">${successStory[i].title}</h2>
                                    </div>
                                    <h5 class="pt-3">${successStory[i].text}</h5>
                                </div>
                            </div>`
    successStoryRow.innerHTML += successStoryItem;
}

setInterval(() => {

    changeCount++

    if (changeCount == 100) {
        changeText.textContent = 'WEB DEVELOPER';
        changeText.classList.add('fade-in');
    }

    if (changeCount == 150) {
        changeText.classList.remove('fade-in');
    }

    if (changeCount == 200) {
        changeText.textContent = 'I BRING DESIGN TO LIFE';
        changeText.classList.add('fade-in');
    }

    if (changeCount == 250) {
        changeText.classList.remove('fade-in');
    }

    if (changeCount == 300) {
        changeText.textContent = 'CREATIVE WEB DEVELOPER';
        changeText.classList.add('fade-in');
    }

    if (changeCount == 350) {
        changeText.classList.remove('fade-in');
    }

    else if (changeCount == 400) {
        changeCount -= 400;
        changeText.textContent = 'PASSION';
        changeText.classList.add('fade-in');
    }

    if (changeCount == 50) {
        changeText.classList.remove('fade-in');
    }

} , 30);

// dark mode
switchMode.addEventListener('click', () => {

    for (let i = 0; i < mode.length; i++) {
        mode[i].classList.toggle('bg-dark');
        mode[i].classList.toggle('text-light');
        ads.classList.toggle('btn-outline-light');
        ads.classList.toggle('ads2')

        if (mode[i].classList.contains('bg-white')) {
            mode[i].classList.remove('bg-white');
        }
    }
    for (let i = 0; i < backText.length; i++) {
        backText[i].classList.toggle('text-light');
    }
})

moon.addEventListener('click', () => {
    console.log(darkLight);
    darkLight.classList.toggle('fa-sun');
    moon.classList.toggle('light');
})

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

// swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    autoplay: {
        delay: 5000,
      },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

//   window onload modal
window.onload = function() {
    console.log('windowRow');
    windowRow.classList.remove('hidden');

    setTimeout(() => {
        windowRow.classList.add('hidden');
    } , 7000);
}

windowCloseBtn.addEventListener('click', () => {
    windowRow.classList.add('hidden');
})

// console.log(document.body.innerHTML);




