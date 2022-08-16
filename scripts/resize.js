const windowWidth = window.innerWidth;

function resize() {
    if (window.innerWidth != windowWidth){
        positionHexs();
        widerInfopartners();
        windowWidth = window.innerWidth;
    }
}

window.addEventListener('resize', resize, true);