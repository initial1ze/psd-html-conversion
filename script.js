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



let idx = 8;

function resizeImageContainer() {
    const imageSliderContainer = document.querySelector('.image-slider-container');
    const divs = imageSliderContainer.querySelectorAll('div');
    const individualWidth = 189.9;

    const divWidth = divs.length * individualWidth;
    const width = document.body.clientWidth;

    const extraSpace = width - divWidth;
    const extraDivs = Math.abs(Math.ceil(extraSpace / individualWidth));

    for (let i = 0; i < extraDivs; i++) {
        idx = (idx % 8 + 8) % 8;
        const clonedDiv = divs[idx].cloneNode(true);

        if (extraSpace > 0) {
            imageSliderContainer.appendChild(clonedDiv);
            idx++;
        }
        else {
            imageSliderContainer.removeChild(imageSliderContainer.lastChild);
            idx--;
        }
    }

    const currScreenWidth = document.body.clientWidth;
    const numberOfDivs = imageSliderContainer.children.length;
    const newIndividualWidth = currScreenWidth / numberOfDivs;

    imageSliderContainer.querySelectorAll('div').forEach(div => div.style.width = `${newIndividualWidth}px`);
}

window.addEventListener('load', resizeImageContainer);

window.addEventListener('resize', resizeImageContainer);

