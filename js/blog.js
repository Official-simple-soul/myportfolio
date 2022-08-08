const blogRecent = [
    {
        image: 'img/blog1.png',
        name: 'Simple_soul',
        title: 'How to Inspect Websites on Mobile Devices with Chrome DevTools',
        text: 'In this article, we’ll show you how to debug a website on mobile devices.',
        read: '<span>I was recently designing a website and testing it on my mobile device. I wanted to inspect an element but there is no way to do that, Yes, of course, there are few applications in the market who provided services to inspect your website on various mobile and different browsers, but yeah it is obvious we have to pay for this services to use. <br><br><b>1. Enable USB Debugging</b><br><br>Open the Developer Options screen on your Android. See Configure On-Device Developer Options.<br><br>Select Enable USB Debugging.<br><br><b>2. Connect Mobile Device to Computer</b><br><br>Connect your mobile device to your laptop/computer via USB Cable.<br><br>Change the option from Charging device to File Transfer.<br><br>Press Allow in the Allow User Debugging? popup<br><br><img src="img/article-image.png" alt="article-image" class="w-75"><br><br><b>3. Inspect Website from Laptop</b><br><br>Open your development machine, open chrome<br><br>Go to chrome://inspect#devices.<br><br>Make sure that the Discover USB devices checkbox is enabled.<br><br><img src="img/article-image-2.png" alt="article-image" class="w-75"><br><br>4. Under Remote Target, the sites you opened in your mobile browser will be listed. You can click inspect to debug the site.<br><br><img src="img/article-image-2.png" alt="article-image-3" class="w-75"><br><br><br>In the screen above, you can see our website is running on localhost, as now we can inspect this website on mobile devices in our chrome browser.</span>',
        date: 'Aug. 03. 2022',
        button: 'Read Article'

    }
]

const blogFeatured = [
    {
        image: 'img/kodecamp.jfif',
        name: 'Simple_soul',
        title: 'Kodecamp final Ceremony<br><br>Kodecamp final ceremony was really amazing',
        read: 'So, kodecamp final ceremoney was held in four different location(Lagos, Abuja, Port-Harcort and Eket).<br><br>I was able to attend the Lagos venue. Was fantastic nad memorable. I was able to meet with some great persons, likes of <b>Mubaraq, Morenikeji, Titilayo, Merit, Samad, tmd, Tolu, Clint, and more</b><br><br>I only wish that day will never end, but what can i do. I also met with mento <b>Phemmyblaze and Imoleayo</b> who were very helpful and supportive.<br><br>I wish all the best to all the participants and I hope that you will be able to attend the next kodecamp final ceremony.',
        date: 'July. 25. 2022',
        button: 'Read Article'

    },
    {
        image: 'img/kodecampfinal.png',
        name: 'Simple_soul',
        title: 'Completed Front-End Web Development Training at Kodecamp',
        read: 'It wasnt an easy journey, but with hardwork, commitmment and most especialy Grit. I was able to start the training, performed to my best ability and completed the program successfully.<br><br> One of the things i learnt while taking this program was to never give up, you have to keep trying and be consistent in your efforts. <br><br> I am very happy to be able to share this experience with you. <br><br> Thank you for reading this article.',
        date: 'July. 24. 2022',
        button: 'Read Article'

    },
    {
        image: 'img/simplilearn.png',
        name: 'Simple_soul',
        title: 'Declaration of frontend development training completion with Simplilearn',
        read: 'I started like i wasnt going to finish. But God has always been their with me all along. I was able to complete the training with Simplilearn. <br><br> I was able to learn a lot of things and I am very happy to be able to share this experience with you. <br><br> Thank you for reading this article.',
        date: 'April. 13. 2022',
        button: 'Read Article'

    },
]

const blogPopular = [
    {
        image: '../img/javascript.png',
        name: 'Simple_soul',
        title: 'Javascript, Understanding javascript as a programming Language',
        read: 'JavaScript (/ˈdʒɑːvəskrɪpt/), often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users devices. <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">Read More</a>',
        date: 'Aug. 02. 2022',
        button: 'Read Article'

    },
    {
        image: 'img/css.png',
        name: 'Simple_soul',
        title: 'CSS, Understanding Cascading Style Sheet as a programming styling Language',
        read: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript<br><br>CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts. <a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets" target="_blank">Read More</a>',
        date: 'Aug. 03. 2022',
        button: 'Read Article'

    },
    {
        image: 'img/bootstrap.png',
        name: 'Simple_soul',
        title: 'Bootstrap, Understanding bootstrap as a cascading style sheet(CSS) framework',
        read: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components<br><br>As of July 2022, Bootstrap is the eighth most starred project on GitHub, with over 158,000 stars <a href="https://getbootstrap.com/" target="_blank">Read More</a>',
        date: 'Aug. 04. 2022',
        button: 'Read Article'

    },
]

const blogHeadlineOne = [
    {
        image: 'img/bun.png',
        name: 'Simple_soul',
        title: 'bun is a new: All in one fast & easy-to-use tool. Instead of 1,000 node_modules for development, you only need bun.',
        read: 'Bun is a JavaScript runtime with Web APIs like fetch, WebSocket, and several more builtin. bun embeds JavaScriptCore, which tends to be faster and more memory efficient than more popular engines like V8 (though harder to embed). It is meant to make the whole JavaScript development even faster. It is an all-batteries included tooling. It does not just speed compilation and parsing but provides its dependency manager tooling and bundling.<a href="https://bun.sh/" target="_blank">Read More</a>',
        date: 'Aug. 05. 2022',
        button: 'Read Article'

    },
    {
        image: 'img/arnold.jpg',
        name: 'Darren Lewis and Ben Morse, CNN',
        title: 'Trent Alexander-Arnold: The Premier League winner who still lives at home and helps his parents with the dishes',
        read: 'Premier League, Champions League, FA Cup, League Cup, UEFA Super Cup and FIFA Club World Cup -- he has won them all.At 23 years of age, Trent Alexander-Arnold is already supremely successful.The Liverpool and England defender has developed into one of Europe is elite right-backs, displaying athleticism and playmaking abilities that are rare to find in his position.However, away from the pitch, Alexander-Arnold is grounding has proved key for him remaining level-headed, despite being a vital cog in one of the best football teams in the world.While many in his position might be out spending their newfound wealth on cars, houses or entertainment, Alexander-Arnold is focus is much closer to home. <a href="https://edition.cnn.com/2022/08/04/football/trent-alexander-arnold-liverpool-premier-league-spt-intl/index.html" target="_blank">Read More</a>',
        date: 'Aug. 04. 2022',
        button: 'Read Article'

    },
]

const blogHeadlineTwo = [
    {
        image: 'img/american war.jpeg',
        name: 'Rick Ayes',
        text: '<b>The wages of exile — American war resisters in Canada</b><br><br>I turned in my draft card and sent it back to my draft board in October of 1967. The anti-war movement was large and growing — our protests escalating and our militancy escalating — but nothing we did stopped our government’s genocidal aggression against the people of Vietnam. On this National Day of Resistance, many of us who were university students, protected from the draft by the privilege of a 2-S deferment, declared that we would no longer accept that exemption. We would gum up the system with our bodies, refuse to fight in the war.',
        button: '<a href="https://rick-ayers.medium.com/the-wages-of-exile-american-war-resisters-in-canada-cc949d9708df" target="_blank" class="text-dark">Continue</a>'

    },
    {
        image: 'img/Adebayo-Shittu.webp',
        name: 'Adebayo Folorunsho-Francis',
        text: '<b>Tinubu-Shettima: Babachir biting finger that fed him, says Ex-Minister, Shittu</b><br><br>The former Minister of Communications and Director General of the Asiwaju Tinubu-Shettima Coalition for Good Governance, Adebayo Shittu, in this interview with ADEBAYO FOLORUNSHO-FRANCIS,  relives the intrigues that led to his non-reappointment for second time as minister, the contentious Muslim-Muslim ticket and why some All Progressives Congress politicians are still angry with Tinubu. How will you react to the protest of the APC Northern Christians over Asiwaju Bola Tinubu’s Muslim-Muslim ticket?',
        button: '<a href="https://punchng.com/tinubu-shettima-babachir-biting-finger-that-fed-him-says-ex-minister-shittu/" target="_blank" class="text-dark">Continue</a>'

    },
    {
        image: 'img/China.webp',
        name: 'Michael Olugbode',
        text: '<b>China Cuts Ties with US Over Pelosi’s Visit to Taiwan</b><br><br>China has announced cutting of ties with the United States to protest recent visit of the Speaker of United States House of Representatives, Nancy Pelosi to Taiwan.<br><br>Taiwan, which has been advocating for a break up from China, has been drawing the ire of China which said there is no sacrificing a United China<br><br>The Chinese government has equally been able to get support from the United Nations and subsequently many nations on her United China stand.',
        button: '<a href="https://www.arise.tv/china-cuts-ties-with-us-over-pelosis-visit-to-taiwan/" target="_blank" class="text-dark">Continue</a>'

    },
]


let blogRecentRow = document.querySelector('.blog-recent-row');
let blogFeaturedRow = document.querySelector('.blog-featured-row');
let blogRowPopular = document.querySelector('.row-popular');
let blogHeadlineOneRow = document.querySelector('.row-headline-one');
let blogHeadlineTwoRow = document.querySelector('.row-headline-two')
let mode = document.querySelectorAll('.blog-mode');
let switchMode = document.querySelector('.switch');
let email = document.querySelector('.email');
let subscribeBtn = document.querySelector('.get-content');
let subscribeContent = document.querySelector('.modal-row-one');
let closeBtn = document.querySelector('.close-btn');
let subscribeText = document.querySelector('.subscribe-text');
let faMoon = document.querySelector('.fa-moon');




// blog recent

function getBlogRecent() {
    

    let blogRecentItem =  blogRecent.map(item => {

        return `
                <div class="bg-transparent">
                    <div class="card bg-transparent border-0">
                        <img src="${item.image}" alt="" class="image-fluid">
                    </div>
                    <p class="text-muted mt-2" style="font-size: 14px;">${item.date}</p>
                    <p class="text-muted mb-1" style="font-size: 13px;">By: ${item.name}</p>
                </div>
                <div class="card-body ps-0">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text text-muted rem">${item.text}</p>
                    <p class="card-text text-muted pik hidden">${item.read}</p>
                    <button class="btn btn-light btn-outline-dark view" style="font-size: 13px;">${item.button}</button>
                </div>`
    }).join('')
    blogRecentRow.innerHTML = blogRecentItem;

    let hidden = document.querySelector('.pik');
    let viewButton = document.querySelector('.view');
    let rem = document.querySelector('.rem');

    viewButton.addEventListener('click', function() {
        hidden.classList.toggle('hidden');
        rem.classList.toggle('hidden');

        if (hidden.classList.contains('hidden')) {
            viewButton.innerHTML = 'Read Article';
        }
        else {
            viewButton.innerHTML = 'Read Less';
        }
    })
    
}
getBlogRecent();

// blog featured
for (let i = 0; i < blogFeatured.length; i++) {
    let items = blogFeatured[i];
    let blogFeaturedItem = `
                            <div class="col-lg-6 col-md-6 col-12 mb-4">
                                <div class="card bg-transparent border-0">
                                    <img src="${items.image}" alt="" class="image-fluid">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-12 mb-4">
                                <div class="card bg-transparent border-0">
                                    <p class="text-muted mb-1" style="font-size: 14px;">${items.date}</p>
                                    <p class="text-muted mb-1" style="font-size: 13px;">By: ${items.name}</p>
                                    <p class="rem-featured" style="font-size: 13px;">${items.title}</p>
                                    <p class="pik-featured hidden" style="font-size: 13px;">${items.read}</p>
                                </div>
                                <button class="btn btn-light btn-outline-dark view-featured" style="font-size: 13px;">${items.button}</button>
                            </div>`
    blogFeaturedRow.innerHTML += blogFeaturedItem;
    
    let hidden = document.querySelectorAll('.pik-featured');
    let viewButton = document.querySelectorAll('.view-featured');

    for (let i = 0; i < viewButton.length; i++) {
        viewButton[i].addEventListener('click', function() {
            hidden[i].classList.toggle('hidden');

            if (hidden[i].classList.contains('hidden')) {
                viewButton[i].innerHTML = 'Read Article';
            }
            else {
                viewButton[i].innerHTML = 'Read Less';
            }
        }
        )
    }
}

// blog popular

function getBlogPopular() {
    let blogRecentItem =  blogPopular.map(item => {
        return `
                <div class="col-lg-4 col-md-6 col-12">
                    <div class="card bg-transparent border-0 shadow p-2">
                        <div class="card border-0 bg-transparent">
                            <img src="${item.image}" alt="" style="height:250px">
                        </div>
                        <div class="card-body ps-0">
                            <p class="text-muted" style="font-size: 14px;">${item.date}</p>
                            <p class="text-muted mb-1" style="font-size: 13px;">By: ${item.name}</p>
                            <h6 class="card-title mb-3">${item.title}</h6>
                            <h6 class="card-title mb-3 pik-popular hidden text-muted lh-base" style="font-size: 13px;">${item.read}</h6>
                            <button class="btn btn-outline-dark btn-light view-popular" style="font-size: 13px;">${item.button}</button>
                        </div>
                    </div>
                </div>`
    }).join('')
    blogRowPopular.innerHTML = blogRecentItem;

    let hidden = document.querySelectorAll('.pik-popular');
    let viewButton = document.querySelectorAll('.view-popular');

    for (let i = 0; i < viewButton.length; i++) {
        viewButton[i].addEventListener('click', function() {
            hidden[i].classList.toggle('hidden');

            if (hidden[i].classList.contains('hidden')) {
                viewButton[i].innerHTML = 'Read Article';
            }
            else {
                viewButton[i].innerHTML = 'Read Less';
            }
        }
        )
    }
}
getBlogPopular();

// blog headline one

for (let i = 0; i < blogHeadlineOne.length; i++) {
    let items = blogHeadlineOne[i];
    let blogHeadlineOneItem = `
                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="card bg-transparent border-0 shadow p-2">
                                    <div class="card bg-transparent border-0">
                                        <img src="${items.image}" alt="" style="height:250px">
                                    </div>
                                    <div class="card-body ps-0">
                                        <p class="text-muted" style="font-size: 14px;">${items.date}</p>
                                        <p class="text-muted mb-1" style="font-size: 13px;">By: ${items.name}</p>
                                        <h6 class="card-title mb-3">${items.title}</h6>
                                        <h6 class="card-title mb-3 pik-headline-one hidden text-muted lh-base" style="font-size: 13px;">${items.read}</h6>
                                        <button class="btn  btn-light btn-outline-dark mb-3 view-headline-one" style="font-size: 13px;">${items.button}</button>
                                    </div>
                                </div>
                            </div>`
    blogHeadlineOneRow.innerHTML += blogHeadlineOneItem;

    let hidden = document.querySelectorAll('.pik-headline-one');
    let viewButton = document.querySelectorAll('.view-headline-one');

    for (let i = 0; i < viewButton.length; i++) {
        viewButton[i].addEventListener('click', function() {
            hidden[i].classList.toggle('hidden');

            if (hidden[i].classList.contains('hidden')) {
                viewButton[i].innerHTML = 'Read Article';
            }
            else {
                viewButton[i].innerHTML = 'Read Less';
            }
        }
        )
    }
}

// blog headline two

for (let i = 0; i < blogHeadlineTwo.length; i++) {
    let items = blogHeadlineTwo[i];
    let blogHeadlineTwoItem = `
                            <div class="col-lg-4 col-md-6 col-12">
                                <div class="card bg-transparent border-0 shadow p-2">
                                    <div class="card bg-transparent border shadow">
                                        <img src="${items.image}" alt="" style="height:250px">
                                    </div>
                                    <div class="card-body ps-0">
                                    <p class="text-muted mb-1" style="font-size: 13px;">By: ${items.name}</p>
                                        <h5 class="card-title text-muted" style="font-size: 12px;">${items.text} <span class="fw-bold"><u>${items.button}</u></span></h5>
                                    </div>
                                </div>
                            </div>`
    blogHeadlineTwoRow.innerHTML += blogHeadlineTwoItem;
}

// swtch to dark mode
switchMode.addEventListener('click', () => {
    for (let i = 0; i < mode.length; i++) {
        mode[i].classList.toggle('bg-dark');
        mode[i].classList.toggle('text-light');

    }
    faMoon.classList.toggle('fa-moon-new');
})

// subscribe
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

// subscribe close
closeBtn.addEventListener('click', () => {
    subscribeContent.classList.add('hidden');
})
