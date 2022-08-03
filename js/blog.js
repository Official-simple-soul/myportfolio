const blogRecent = [
    {
        image: 'img/blog1.png',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ullamcorper sit elementum.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget est amet a, ac, pellentesque tellus, aliquam mauris. Bibendum massa massa nisi, luctus risus nascetur sit. Massa quam integer leo ac amet cursus leo. Lorem ut et ut nulla rutrum fames arcu.',
        date: 'Aug. 03. 2022',
        button: 'Read Article'

    }
]

const blogFeatured = [
    {
        image: 'img/blog2.png',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ullamcorper sit elementum.',
        date: 'Aug. 03. 2022',
        button: 'Read Article'

    },
    {
        image: 'img/blog3.png',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ullamcorper sit elementum.',
        date: 'Aug. 03. 2022',
        button: 'Read Article'

    },
    {
        image: 'img/blog4.png',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ullamcorper sit elementum.',
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
// let mode = document.querySelectorAll('.mode');
// let switchMode = document.querySelector('.switch');
// let ads = document.querySelectorAll('.ads');


// blog recent

function getBlogRecent() {
    console.log(blogRecent)
    let blogRecentItem =  blogRecent.map(item => {
        console.log(item);
        return `
                <div class="bg-transparent">
                    <div class="card bg-transparent border-0">
                        <img src="${item.image}" alt="" class="image-fluid">
                    </div>
                    <p class="text-muted mt-2" style="font-size: 14px;">03 - 08 - 2022</p>
                </div>
                <div class="card-body ps-0">
                    <h5 class="card-title text-light">${item.title}</h5>
                    <p class="card-text text-muted">${item.text}</p>
                    <button class="btn btn-light">${item.button}</button>
                </div>`
    }).join('')
    blogRecentRow.innerHTML = blogRecentItem;
}
getBlogRecent();

// blog featured

for (let i = 0; i < blogFeatured.length; i++) {
    let items = blogFeatured[i];
    let blogFeaturedItem = `
                            <div class="col-lg-6 mb-4">
                                <div class="card bg-transparent border-0">
                                    <img src="${items.image}" alt="" class="image-fluid">
                                </div>
                            </div>
                            <div class="col-lg-6 mb-4">
                                <div class="card bg-transparent border-0">
                                    <p class="text-muted" style="font-size: 15px;">03 - 08 - 2022</p>
                                    <p class="text-light">${items.title}</p>
                                </div>
                                <button class="btn btn-transparent btn-outline-light">${items.button}</button>
                            </div>`
    blogFeaturedRow.innerHTML += blogFeaturedItem;
}

// blog popular

function getBlogPopular() {
    let blogRecentItem =  blogPopular.map(item => {
        return `
                <div class="col-lg-4">
                    <div class="card bg-transparent border-0">
                        <div class="card border-0 bg-transparent">
                            <img src="${item.image}" alt="">
                        </div>
                        <div class="card-body ps-0">
                            <p class="text-muted" style="font-size: 14px;">${item.date}</p>
                            <h5 class="card-title text-light mb-3">${item.title}</h5>
                            <a href="#" class="btn btn-outline-light">${item.button}</a>
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
                            <div class="col-lg-6">
                                <div class="card bg-transparent border-0 px-3">
                                    <div class="card bg-transparent border-0">
                                        <img src="${items.image}" alt="">
                                    </div>
                                    <div class="card-body ps-0">
                                        <p class="text-muted" style="font-size: 14px;">${items.date}</p>
                                        <h5 class="card-title mb-3">${items.title}</h5>
                                        <a href="#" class="btn btn-dark ads">${items.button}</a>
                                    </div>
                                </div>
                            </div>`
    blogHeadlineOneRow.innerHTML += blogHeadlineOneItem;
}

// blog headline two

for (let i = 0; i < blogHeadlineTwo.length; i++) {
    let items = blogHeadlineTwo[i];
    let blogHeadlineTwoItem = `
                            <div class="col-lg-4">
                                <div class="card bg-transparent border-0">
                                    <div class="card bg-transparent border-0">
                                        <img src="${items.image}" alt="">
                                    </div>
                                    <div class="card-body ps-0">
                                        <h5 class="card-title text-muted" style="font-size: 14px;">${items.text} <span class="fw-bold text-dark"><u>${items.button}</u></span></h5>
                                    </div>
                                </div>
                            </div>`
    blogHeadlineTwoRow.innerHTML += blogHeadlineTwoItem;
}

// switchMode.addEventListener('click', () => {

//     for (let i = 0; i < mode.length; i++) {
//         mode[i].classList.toggle('bg-dark');
//         mode[i].classList.toggle('text-light');
//         ads.classList.toggle('btn-outline-light');
//         ads.classList.toggle('ads2')

//         // if (mode[i].classList.contains('bg-white')) {
//         //     mode[i].classList.remove('bg-white');
//         // }
//     }
// })