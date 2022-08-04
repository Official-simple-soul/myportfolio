let blogRecent = [
    {
        image: 'img/blog1.png',
        title: 'ALorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ullamcorper sit elementum.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget est amet a, ac, pellentesque tellus, aliquam mauris. Bibendum massa massa nisi, luctus risus nascetur sit. Massa quam integer leo ac amet cursus leo. Lorem ut et ut nulla rutrum fames arcu.',
        read: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget est amet a, ac, pellentesque tellus, aliquam mauris. Bibendum massa massa nisi, luctus risus nascetur sit. Massa quam integer leo ac amet cursus leo. Lorem ut et ut nulla rutrum fames arcu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget est amet a, ac, pellentesque tellus, aliquam mauris. Bibendum massa massa nisi, luctus risus nascetur sit. Massa quam integer leo ac amet cursus leo. Lorem ut et ut nulla rutrum fames arcu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget est amet a, ac, pellentesque tellus, aliquam mauris. Bibendum massa massa nisi, luctus risus nascetur sit. Massa quam integer leo ac amet cursus leo. Lorem ut et ut nulla rutrum fames arcu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget est amet a, ac, pellentesque tellus, aliquam mauris. Bibendum massa massa nisi, luctus risus nascetur sit. Massa quam integer leo ac amet cursus leo. Lorem ut et ut nulla rutrum fames arcu.',
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
let mode = document.querySelectorAll('.blog-mode');
let switchMode = document.querySelector('.switch');
let ads = document.querySelectorAll('.ads-blog');



// let hidden = document.querySelectorAll('.pik')[0];

// hidden = 'hiddensss';
// console.log(hidden);

// let ddd = hidden.classList;
// console.log(ddd);



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
                    <p class="card-text text-muted">${item.text.substring(0, 10)}</p>
                    <p class="card-text text-muted pik hidden">${item.read}</p>
                    <button class="btn btn-light btn-outline-dark" onclick="clickMe()" style="font-size: 13px;">${item.button}</button>
                </div>`
    }).join('')
    blogRecentRow.innerHTML = blogRecentItem;


}
getBlogRecent();


for (let i = 0; i < blogFeatured.length; i++) {
    let items = blogFeatured[i];
    let blogFeaturedItem = `
                            <div class="col-lg-6 col-md-6 col-12 mb-5">
                                <div class="card bg-transparent border-0">
                                    <img src="${items.image}" alt="" class="image-fluid">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-12 mb-5">
                                <div class="card bg-transparent border-0">
                                    <p class="text-muted mb-1" style="font-size: 15px;">03 - 08 - 2022</p>
                                    <p class="" style="font-size: 13px;">${items.title}</p>
                                </div>
                                <button class="btn btn-light btn-outline-dark" style="font-size: 13px;">${items.button}</button>
                            </div>`
    blogFeaturedRow.innerHTML += blogFeaturedItem;
}

// blog popular

function getBlogPopular() {
    let blogRecentItem =  blogPopular.map(item => {
        return `
                <div class="col-lg-4 col-md-6 col-12">
                    <div class="card bg-transparent border shadow p-2">
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
                                <div class="card bg-transparent border shadow p-2">
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
                                <div class="card bg-transparent border shadow p-2">
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

    for (let i = 0; i < ads.length; i++) {
        ads[i].classList.add('btn-light');
        ads[i].classList.remove('btn-dark');
        // ads[i].classList.toggle('text-dark');
    }

    
})

// read more

// function clickMe() {
//     for (let i = 0; i < hidden.length; i++) {
//         hidden[i].classList.toggle('hidden');
//     }
//     // hidden.classList.remove('hidden');
// }




// console.log(blogRecent)
// blogRecent[1].splice(0, 1);

// console.log(blogRecent[1])

// function clickMe() {
//     console.log('clicked')
// }

// let vehicleDetails = [
//     {
//         name: 'Toyota',
//         model: 'Corolla',
//         year: '2019',
//         price: '$10,000',
//     },

//     {
//         name: 'Benz',
//         model: 'Texa',
//         year: '2015',
//         price: '$20,000',
//     }
// ]


// vehicleDetails[0].name = 'aaaaaaa';

// console.log(vehicleDetails[0])
