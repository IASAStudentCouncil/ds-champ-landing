function switchScroll () {
    const menuButton = document.querySelector("nav input#menu-btn");
    if (menuButton.checked){
        document.body.classList.remove("opened-nav");
    }
    else {
        document.body.classList.add("opened-nav");
    }
}