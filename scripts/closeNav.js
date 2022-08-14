async function closeNav() {
    const menuButton = document.querySelector("nav input#menu-btn");
    menuButton.checked = false;
    document.body.classList.remove("opened-nav");
}