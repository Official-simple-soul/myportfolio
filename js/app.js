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

const educationText = [
    {
        image: 'img/list-style.png',
        title: 'Front-End Developement',
        text: 'Manage all team members from different to achieve the project goal of developing a blog website application for Kodehauz. Coordinate and assign tasks to the frontend team, review their submission and give feedback. As well as creating some UI/UX designs.',
        date: '2022 - 2022',
        institution: 'KodeCamp Bootcamp'
    },
    {
        image: 'img/list-style.png',
        title: 'Front-End Development',
        text: 'HTML, CSS, Bootstrap, Javascript and React',
        date: '2022 - 2022',
        institution: 'SimpliLearn Online Institute'
    },
    {
        image: 'img/list-style.png',
        title: 'Estate Management',
        text: 'Property Valuation, Property Management, Letting and Sales, Rating and Taxation',
        date: '2013 - 2019',
        institution: 'Federal University of Technology, Minna'
    }
]

const experienceText = [
    {
        image: '/img/list-style.png',
        title: 'KodeCamp Blog website',
        text: 'Manage all team members to achieve the project goal of developing a blog website application. Coordinate and assign tasks to the frontend team, review their submission and give feedback.',
        date: '2022 - 2022',
        institution: 'KodeCamp Bootcamp'
    },
    {
        image: '/img/list-style.png',
        title: 'Administrative Assitant/ IT Personnel,',
        text: 'Administrative activities Staff management, social media management, data analysis, website management (WordPress)',
        date: '2020 - Till Date',
        institution: 'Land of Hope (ACAEDF)'
    },
    {
        image: '/img/list-style.png',
        title: 'Interim Surveyor',
        text: 'Property Valuation, Property Management, Letting and Sales, Rating and Taxation',
        date: '2019 - 2020',
        institution: 'Jide Taiwo & Co.'
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
let rowEdu = document.querySelector('.row-edu');
let rowExp = document.querySelector('.row-exp');
let numberOne = document.querySelector('.number-one');
let numberTwo = document.querySelector('.number-two');
let numberThree = document.querySelector('.number-three');
let numberFour = document.querySelector('.number-four');
let workRow = document.querySelector('.work-row');
let successStoryRow = document.querySelector('.success-story-row');
let changeText = document.querySelector('.change-text');
let mode = document.querySelectorAll('.mode');
let switchMode = document.querySelector('.switch');
let ads = document.querySelector('.ads');
let email = document.querySelector('.email');
let subscribeBtn = document.querySelector('.get-content');
let subscribeContent = document.querySelector('.modal-row-one');
let closeBtn = document.querySelector('.close-btn');
let subscribeText = document.querySelector('.subscribe-text');
let faMoon = document.querySelector('.fa-moon');

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

// education Section
for (let i = 0; i < educationText.length; i++) {
    let educationItem = ''
    educationItem += `  <li>
                            <div class="row pe-5 my-2">
                                <div class="col-md-3">
                                    <div class="card border-0 bg-transparent">
                                        <p class="text-muted mb-1">${educationText[i].date}</p>
                                        <p class="fw-bold">${educationText[i].institution}</p>
                                    </div>
                                </div>
                                <div class="col-md-9">
                                    <div class="card border-0 bg-transparent">
                                        <p class="fw-bold mb-1">${educationText[i].title}</p>
                                        <p class="text-muted">${educationText[i].text}</p>
                                    </div>
                                </div>
                            </div>
                        </li>`
    rowEdu.innerHTML += educationItem;
}

// experience Section
function getExperience() {
    let experience =  experienceText.map(item => {
        return `
                <li>
                    <div class="row pe-5 my-2">
                        <div class="col-md-3">
                            <div class="card border-0 bg-transparent">
                                <p class="text-muted mb-1">${item.date}</p>
                                <p class="fw-bold">${item.institution}</p>
                            </div>
                        </div>
                        <div class="col-md-9">
                            <div class="card border-0 bg-transparent">
                                <p class="fw-bold mb-1">${item.title}</p>
                                <p class="text-muted">${item.text}</p>
                            </div>
                        </div>
                    </div>
                </li>`
    }).join('')
    rowExp.innerHTML = experience;
}
getExperience();

// works Section
function getWork() {
    let works =  worksDetails.map(item => {
        return `
                <div class="col-lg-4">
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
    faMoon.classList.toggle('fa-moon-new');
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



