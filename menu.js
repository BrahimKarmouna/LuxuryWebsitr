let menuOpen = false;
const menuIcon = document.getElementById('menu-button');

function toggleMenu() {
    const menu = document.querySelector('.menu');
    const content = document.querySelector('.content');
    const menuIconElement = document.querySelector('.menu-icon i');

    if (!menuOpen) {
        menu.style.left = '0';
        content.style.marginLeft = '250px';
        menuIconElement.className = 'fas fa-times';
        menuIconElement.style.color = '#fff'; // Set the close icon color to white
        menuIcon.style.left = '20px';
    } else {
        menu.style.left = '-250px';
        content.style.marginLeft = '0';
        menuIconElement.className = 'fas fa-bars';
        menuIconElement.style.color = '#000'; // Reset the menu icon color
        menuIcon.style.left = '20px';
    }

    menuOpen = !menuOpen;
}