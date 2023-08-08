// Navbar
let defaultActiveNavbarItem = document.querySelector('.active-navbar');
let activeNavbarItem = defaultActiveNavbarItem;

function toggleClassNavbar(clickedNavbarItem) {
    if (activeNavbarItem === clickedNavbarItem) {
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
    if (activeBlogItem === clickedBlogItem) {
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


let activePagesWidgetItem = null;
function togglePagesWidget(clickedPagesWidgetItem) {
    const icon = clickedPagesWidgetItem.querySelector('span');
    if (activePagesWidgetItem === clickedPagesWidgetItem) {
        clickedPagesWidgetItem.classList.remove('pages-tab-active');
        icon.textContent = 'add';
        activePagesWidgetItem = null;
        return;
    }
    if (activePagesWidgetItem) {
        activePagesWidgetItem.classList.remove('pages-tab-active');
        const activeIcon = activePagesWidgetItem.querySelector('span');
        activeIcon.textContent = 'add';
    }
    clickedPagesWidgetItem.classList.toggle('pages-tab-active');
    icon.textContent = 'remove';
    activePagesWidgetItem = clickedPagesWidgetItem;
}