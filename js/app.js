const aboutText = [
    {
        image: 'img/dev-1.png',
        title: 'Web Development',
        text: 'Sed odio cursus felis dolor pellentesque.dolordolor pe pellentesque.'
    },

    {
        image: 'img/dev-2.png',
        title: 'Web Development',
        text: 'Sed odio cursus felis dolor pellentesque.dolordolor pe pellentesque.'
    },

    {
        image: 'img/dev-1.png',
        title: 'Web Development',
        text: 'Sed odio cursus felis dolor pellentesque.dolordolor pe pellentesque.'
    },

    {
        image: 'img/dev-1.png',
        title: 'Web Development',
        text: 'Sed odio cursus felis dolor pellentesque.dolordolor pe pellentesque.'
    },

    {
        image: 'img/dev-2.png',
        title: 'Web Development',
        text: 'Sed odio cursus felis dolor pellentesque.dolordolor pe pellentesque.'
    },

    {
        image: 'img/dev-1.png',
        title: 'Web Development',
        text: 'Sed odio cursus felis dolor pellentesque.dolordolor pe pellentesque.'
    }
]

const educationText = [
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
    },
    {
        image: '/img/list-style.png',
        title: 'Web Development',
        text: 'Sed odio cursus felis dolor pellentesque. dolordolor pe Sed odio cursus felis dolor pellentesque.dolordolor pe pellentesque.pellentesque.',
        date: '2018 - 2019',
        institution: 'University'
    }
]

const experienceText = [
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
        image: '/img/works2.png',
        title: 'E-Commerce',
    },

    {
        image: '/img/works3.png',
        title: 'Car Dealing',
    },

    {
        image: '/img/works5.png',
        title: 'Fintech',
    },

    {
        image: '/img/works4.png',
        title: 'E-Commerce',
    },

    {
        image: '/img/works1.png',
        title: 'Fintech',
    }
]


let rowWrap = document.querySelector('.row-wrap');
let rowEdu = document.querySelector('.row-edu');
let rowExp = document.querySelector('.row-exp');
let numberOne = document.querySelector('.number-one');
let numberTwo = document.querySelector('.number-two');
let numberThree = document.querySelector('.number-three');
let numberFour = document.querySelector('.number-four');
let workRow = document.querySelector('.work-row');

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;


// About Section
for (let i = 0; i < aboutText.length; i++) {
    let aboutItem = ''
    aboutItem += `  <div class="col-md-4">
                        <div class="card pt-3 my-3 bg-transparent">
                            <img src="${aboutText[i].image}" alt="" class="w-25 mx-auto">
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
                                        <p class="paragraph text-muted">${educationText[i].text}</p>
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
                                <p class="paragraph text-muted">${item.text}</p>
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
                    <div class=" card mb-4 bg-transparent border-0" data-aos="zoom-in" data-aos-duration="1000">
                        <img src="${item.image}" alt="" class="img-fluid">
                        <button class="btn btn-transparent btn-outline-light position-absolute me-3 mb-3 end-0 bottom-0">${item.title}</button>
                    </div>
                </div>`
    }).join('')
    workRow.innerHTML = works;
}
getWork();





