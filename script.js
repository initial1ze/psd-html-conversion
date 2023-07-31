// Navbar
let defaultActiveNavbarItem = document.querySelector('.active-navbar');
let activeNavbarItem = defaultActiveNavbarItem;

function toggleClassNavbar(clickedNavbarItem) {
    if (activeNavbarItem == clickedNavbarItem) {
        return;
    }
    activeNavbarItem.classList.remove('active-navbar');

    clickedNavbarItem.classList.toggle('active-navbar');

    activeNavbarItem = clickedNavbarItem;
};

// Blog Category
let defaultActiveBlogItem = document.querySelector('.active-blog-category');
let activeBlogItem = defaultActiveBlogItem;

function toggleClassBlogCategory(clickedBlogItem) {
    if (activeBlogItem == clickedBlogItem) {
        return;
    }
    activeBlogItem.classList.remove('active-blog-category');

    clickedBlogItem.classList.toggle('active-blog-category');

    activeBlogItem = clickedBlogItem;
};



function resizeImageContainer2() {
    const sliderMainContainer = document.querySelector('.slider-main-container');
    const imageSliderContainer = document.querySelector('.image-slider-container');

    const numberOfCopies = 2;

    for (let i = 0; i < numberOfCopies; i++) {
        const imageSliderCopy = imageSliderContainer.cloneNode(true);
        imageSliderCopy.classList.add('duplicated');
        sliderMainContainer.appendChild(imageSliderCopy);
    }
}

window.addEventListener('load', resizeImageContainer2);
