const aboutText = [
    {
        image: '<i class="fa-solid fa-laptop-code fs-1"></i>',
        title: 'Web Dev',
        text: 'Sed odio cursus felis dolor pellentesque.dolordolor pe pellentesque.'
    },

    {
        image: '<i class="fa-solid fa-laptop-code fs-1"></i>',
        title: 'Web Design',
        text: 'Sed odio cursus felis dolor pellentesque.dolordolor pe pellentesque.'
    },

    {
        image: '<i class="fa-solid fa-laptop fs-1"></i>',
        title: 'Web Flow',
        text: 'Sed odio cursus felis dolor pellentesque.dolordolor pe pellentesque.'
    },

    {
        image: '<i class="fa-solid fa-laptop-code fs-1"></i>',
        title: 'Web Dev',
        text: 'Sed odio cursus felis dolor pellentesque.dolordolor pe pellentesque.'
    },

    {
        image: '<i class="fa-solid fa-laptop fs-1"></i>',
        title: 'Web Design',
        text: 'Sed odio cursus felis dolor pellentesque.dolordolor pe pellentesque.'
    },

    {
        image: '<i class="fa-solid fa-laptop-code fs-1"></i>',
        title: 'Web Flow',
        text: 'Sed odio cursus felis dolor pellentesque.dolordolor pe pellentesque.'
    }
]

const educationText = [
    {
        image: 'img/list-style.png',
        title: 'Front-End Developement',
        text: 'Sed odio cursus felis dolor pellentesque. dolordolor pe Sed odio cursus felis dolor pellentesque.dolordolor pe pellentesque.pellentesque.',
        date: '2022 - 2022',
        institution: 'KodeCamp Bootcamp'
    },
    {
        image: 'img/list-style.png',
        title: 'Front-End Development',
        text: 'Sed odio cursus felis dolor pellentesque. dolordolor pe Sed odio cursus felis dolor pellentesque.dolordolor pe pellentesque.pellentesque.',
        date: '2020 - 2021',
        institution: 'SimpliLearn Online Institute'
    },
    {
        image: 'img/list-style.png',
        title: 'Estate Management',
        text: 'Sed odio cursus felis dolor pellentesque. dolordolor pe Sed odio cursus felis dolor pellentesque.dolordolor pe pellentesque.pellentesque.',
        date: '2013 - 2019',
        institution: 'Federal University of Technology, Minna'
    }
]

const experienceText = [
    {
        image: '/img/list-style.png',
        title: 'KodeCamp Blog website',
        text: 'Sed odio cursus felis dolor pellentesque. dolordolor pe Sed odio cursus felis dolor pellentesque.dolordolor pe pellentesque.pellentesque.',
        date: '2022 - 2022',
        institution: 'KodeCamp Bootcamp'
    },
    {
        image: '/img/list-style.png',
        title: 'Web Development',
        text: 'Sed odio cursus felis dolor pellentesque. dolordolor pe Sed odio cursus felis dolor pellentesque.dolordolor pe pellentesque.pellentesque.',
        date: '2018 - 2019',
        institution: 'University'
    },
    {
        image: '/img/list-style.png',
        title: 'Web Development',
        text: 'Sed odio cursus felis dolor pellentesque. dolordolor pe Sed odio cursus felis dolor pellentesque.dolordolor pe pellentesque.pellentesque.',
        date: '2018 - 2019',
        institution: 'University'
    }
]

const worksDetails = [
    {
        image: 'img/works2.png',
        title: 'E-Commerce',
    },

    {
        image: 'img/works3.png',
        title: 'Car Dealing',
    },

    {
        image: 'img/works5.png',
        title: 'Fintech',
    },

    {
        image: 'img/works4.png',
        title: 'E-Commerce',
    },

    {
        image: 'img/works1.png',
        title: 'Fintech',
    }
]

const successStory = [
    {
        image: '<i class="fa-solid fa-hourglass-end fs-2"></i>',
        title: '200',
        text: 'Completed project',
    },
    {
        image: '<i class="fa-solid fa-face-laugh fs-2"></i>',
        title: '150',
        text: 'Happy clients',
    },
    {
        image: '<i class="fa-solid fa-code fs-2"></i>',
        title: '10k',
        text: 'Line codes written',
    },
    {
        image: '<i class="fa-solid fa-spinner fs-2"></i>',
        title: '30',
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

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;


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

// console.log(experienceText);
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

// count increase

setInterval(() => {
    if (count1 == 90) {
        clearInterval();
    }
    else{
        count1++;
        numberOne.innerHTML = count1 + '%';
    }
} , 20);

setInterval(() => {
    if (count2 == 80) {
        clearInterval();
    }
    else{
        count2++;
        numberTwo.innerHTML = count2 + '%';
    }
} , 20);

setInterval(() => {
    if (count3 == 70) {
        clearInterval();
    }
    else{
        count3++;
        numberThree.innerHTML = count3 + '%';
    }
} , 20);

setInterval(() => {
    if (count4 == 60) {
        clearInterval();
    }
    else{
        count4++;
        numberFour.innerHTML = count4 + '%';
    }
} , 20);

// works Section
function getWork() {
    let works =  worksDetails.map(item => {
        return `
                <div class="col-lg-4">
                    <div class=" card mb-4 bg-transparent border-0 work-hover" data-aos="zoom-in" data-aos-duration="1000">
                        <img src="${item.image}" alt="" class="img-fluid">
                        <button class="btn btn-transparent btn-outline-light position-absolute me-3 mb-3 end-0 bottom-0 work-title">${item.title}</button>
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

let changeText = document.querySelector('.change-text');
let changeCount = 0;

setInterval(() => {

    changeCount++

    if (changeCount == 100) {
        changeText.textContent = 'SIMPLE_SOUL IS A WEB DEVELOP';
        changeText.classList.toggle('fade-in');
    }

    if (changeCount == 200) {
        changeText.textContent = 'I BRING YOUR DESIGN TO LIVE';
        changeText.classList.toggle('fade-in');
    }

    if (changeCount == 300) {
        changeText.textContent = 'HE IS THE PERFECT DEVELOPER TO CONTACT';
        changeText.classList.toggle('fade-in');
    }

    else if (changeCount == 400) {
        changeCount -= 400;
        changeText.textContent = 'SIMPLE_SOUL NEED A CONTENTS WRITER';
        changeText.classList.toggle('fade-in');
    }

} , 40);




