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

let rowEdu = document.querySelector('.row-edu');
let rowExp = document.querySelector('.row-exp');
let email = document.querySelector('.email');
let subscribeBtn = document.querySelector('.get-content');
let subscribeContent = document.querySelector('.modal-row-one');
let closeBtn = document.querySelector('.close-btn');
let subscribeText = document.querySelector('.subscribe-text');
let mode = document.querySelectorAll('.mode');
let switchMode = document.querySelector('.switch');
let btnMode = document.querySelector('.btn-mode');
let faMoon = document.querySelector('.fa-moon');



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

// dark mode
switchMode.addEventListener('click', () => {

    for (let i = 0; i < mode.length; i++) {
        mode[i].classList.toggle('bg-dark');
        mode[i].classList.toggle('text-light');
        btnMode.classList.toggle('btn-outline-light');

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

    setInterval(() => {
        subscribeContent.classList.add('hidden');
    }, 5000);
})

closeBtn.addEventListener('click', () => {
    subscribeContent.classList.add('hidden');
})

// download resume
// document.querySelector('.download-resume').addEventListener('click', () => {
//     window.open('https://drive.google.com/file/d/1WpDlinuyDFlPWN8v94lg3CmSazO-de_u/view?usp=sharing');
// }
// )
