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
