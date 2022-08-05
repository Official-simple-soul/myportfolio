const blogRecent = [
    {
        image: 'img/blog1.png',
        title: 'How to Inspect Websites on Mobile Devices with Chrome DevTools',
        text: 'In this article, we’ll show you how to debug a website on mobile devices.',
        read: '<span>I was recently designing a website and testing it on my mobile device. I wanted to inspect an element but there is no way to do that, Yes, of course, there are few applications in the market who provided services to inspect your website on various mobile and different browsers, but yeah it is obvious we have to pay for this services to use. <br><br><b>1. Enable USB Debugging</b><br><br>Open the Developer Options screen on your Android. See Configure On-Device Developer Options.<br><br>Select Enable USB Debugging.<br><br><b>2. Connect Mobile Device to Computer</b><br><br>Connect your mobile device to your laptop/computer via USB Cable.<br><br>Change the option from Charging device to File Transfer.<br><br>Press Allow in the Allow User Debugging? popup<br><br><img src="img/article-image.png" alt="article-image" class="w-75"><br><br><b>3. Inspect Website from Laptop</b><br><br>Open your development machine, open chrome<br><br>Go to chrome://inspect#devices.<br><br>Make sure that the Discover USB devices checkbox is enabled.<br><br><img src="img/article-image-2.png" alt="article-image" class="w-75"><br><br>4. Under Remote Target, the sites you opened in your mobile browser will be listed. You can click inspect to debug the site.<br><br><img src="img/article-image-2.png" alt="article-image-3" class="w-75"><br><br><br>In the screen above, you can see our website is running on localhost, as now we can inspect this website on mobile devices in our chrome browser.</span>',
        date: 'Aug. 03. 2022',
        button: 'Read Article'

    }
]

const blogFeatured = [
    {
        image: 'img/kodecampfinal.png',
        title: 'Completed Front-End Web Development Training at Kodecamp',
        read: 'It wasnt an easy journey, but with hardwork, commitmment and most especialy Grit. I was able to start the training, performed to my best ability and completed the program successfully.<br><br> One of the things i learnt while taking this program was to never give up, you have to keep trying and be consistent in your efforts. <br><br> I am very happy to be able to share this experience with you. <br><br> Thank you for reading this article.',
        date: 'July. 24. 2022',
        button: 'Read Article'

    },
    {
        image: 'img/kodecamp.jfif',
        title: 'Kodecamp final Ceremony<br><br>Kodecamp final ceremony was really amazing',
        read: 'So, kodecamp final ceremoney was held in four different location(Lagos, Abuja, Port-Harcort and Eket).<br><br>I was able to attend the Lagos venue. Was fantastic nad memorable. I was able to meet with some great persons, likes of <b>Mubarak, Morenikeji, Titilayo, Merit, Salam, Tolu, Clint, and more</b><br><br>. I only wish that day will never end, but what can i do. I also met with mento <b>Phemmyblaze and Imoleayo</b> who were very helpful and supportive.<br><br>I wish all the best to all the participants and I hope that you will be able to attend the next kodecamp final ceremony.',
        date: 'Aug. 03. 2022',
        button: 'Read Article'

    },
    {
        image: 'img/blog4.png',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ullamcorper sit elementum.',
        read: ' but with the lookof things, lorem is still nt on the verge of the parastatal and cliche Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ullamcorper sit elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ullamcorper sit elementum.',
        date: 'Aug. 03. 2022',
        button: 'Read Article'

    },
]

const blogPopular = [
    {
        image: 'img/blog1.png',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ullamcorper sit elementum.',
        date: 'Aug. 03. 2022',
        button: 'Read Article'

    },
    {
        image: 'img/blog1.png',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ullamcorper sit elementum.',
        date: 'Aug. 03. 2022',
        button: 'Read Article'

    },
    {
        image: 'img/blog1.png',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ullamcorper sit elementum.',
        date: 'Aug. 03. 2022',
        button: 'Read Article'

    },
]

const blogHeadlineOne = [
    {
        image: 'img/blog9.png',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ullamcorper sit elementum.',
        date: 'Aug. 03. 2022',
        button: 'Read Article'

    },
    {
        image: 'img/blog8.png',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ullamcorper sit elementum.',
        date: 'Aug. 03. 2022',
        button: 'Read Article'

    },
]

const blogHeadlineTwo = [
    {
        image: 'img/blog7.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget est amet a, ac, pellentesque tellus, aliquam mauris. Bibendum massa massa nisi, luctus risus nascetur sit. Massa quam integer leo ac amet cursus leo. Lorem ut et ut nulla rutrum fames arcu.',
        button: 'Continue'

    },
    {
        image: 'img/blog6.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget est amet a, ac, pellentesque tellus, aliquam mauris. Bibendum massa massa nisi, luctus risus nascetur sit. Massa quam integer leo ac amet cursus leo. Lorem ut et ut nulla rutrum fames arcu.',
        button: 'Continue'

    },
    {
        image: 'img/blog5.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget est amet a, ac, pellentesque tellus, aliquam mauris. Bibendum massa massa nisi, luctus risus nascetur sit. Massa quam integer leo ac amet cursus leo. Lorem ut et ut nulla rutrum fames arcu.',
        button: 'Continue'

    },
]


let blogRecentRow = document.querySelector('.blog-recent-row');
let blogFeaturedRow = document.querySelector('.blog-featured-row');
let blogRowPopular = document.querySelector('.row-popular');
let blogHeadlineOneRow = document.querySelector('.row-headline-one');
let blogHeadlineTwoRow = document.querySelector('.row-headline-two')
let mode = document.querySelectorAll('.blog-mode');
let switchMode = document.querySelector('.switch');
// let cards = document.querySelectorAll('.card');




// blog recent

function getBlogRecent() {
    

    let blogRecentItem =  blogRecent.map(item => {

        return `
                <div class="bg-transparent">
                    <div class="card bg-transparent border-0">
                        <img src="${item.image}" alt="" class="image-fluid">
                    </div>
                    <p class="text-muted mt-2" style="font-size: 14px;">03 - 08 - 2022</p>
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
                                    <p class="text-muted mb-1" style="font-size: 15px;">${items.date}</p>
                                    <p class="rem-featured" style="font-size: 13px;">${items.title}</p>
                                    <p class="pik-featured hidden" style="font-size: 13px;">${items.read}</p>
                                </div>
                                <button class="btn btn-light btn-outline-dark view-featured" style="font-size: 13px;">${items.button}</button>
                            </div>`
    blogFeaturedRow.innerHTML += blogFeaturedItem;
    
    let hidden = document.querySelectorAll('.pik-featured');
    let viewButton = document.querySelectorAll('.view-featured');
    let rem = document.querySelectorAll('.rem-featured');

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
                            <img src="${item.image}" alt="">
                        </div>
                        <div class="card-body ps-0">
                            <p class="text-muted" style="font-size: 14px;">${item.date}</p>
                            <h6 class="card-title mb-3">${item.title}</h6>
                            <a href="#" class="btn btn-outline-dark btn-light" style="font-size: 13px;">${item.button}</a>
                        </div>
                    </div>
                </div>`
    }).join('')
    blogRowPopular.innerHTML = blogRecentItem;
}
getBlogPopular();

// blog headline one

for (let i = 0; i < blogHeadlineOne.length; i++) {
    let items = blogHeadlineOne[i];
    let blogHeadlineOneItem = `
                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="card bg-transparent border-0 shadow p-2">
                                    <div class="card bg-transparent border-0">
                                        <img src="${items.image}" alt="">
                                    </div>
                                    <div class="card-body ps-0">
                                        <p class="text-muted" style="font-size: 14px;">${items.date}</p>
                                        <h6 class="card-title mb-3">${items.title}</h6>
                                        <a href="#" class="btn  btn-light btn-outline-dark mb-3" style="font-size: 13px;">${items.button}</a>
                                    </div>
                                </div>
                            </div>`
    blogHeadlineOneRow.innerHTML += blogHeadlineOneItem;
}

// blog headline two

for (let i = 0; i < blogHeadlineTwo.length; i++) {
    let items = blogHeadlineTwo[i];
    let blogHeadlineTwoItem = `
                            <div class="col-lg-4 col-md-6 col-12">
                                <div class="card bg-transparent border-0 shadow p-2">
                                    <div class="card bg-transparent border shadow">
                                        <img src="${items.image}" alt="">
                                    </div>
                                    <div class="card-body ps-0">
                                        <h5 class="card-title text-muted" style="font-size: 12px;">${items.text} <span class="fw-bold"><u>${items.button}</u></span></h5>
                                    </div>
                                </div>
                            </div>`
    blogHeadlineTwoRow.innerHTML += blogHeadlineTwoItem;
}

switchMode.addEventListener('click', () => {
    for (let i = 0; i < mode.length; i++) {
        mode[i].classList.toggle('bg-dark');
        mode[i].classList.toggle('text-light');

    }
    
})
