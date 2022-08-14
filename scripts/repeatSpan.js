const parent = document.querySelector("#infopartners-repeat");
const child = document.querySelector("#infopartners-repeat span");

const text = "Інформаційні партнери ";

child.innerHTML = text;
const width = child.offsetWidth;

function widerInfopartners() {
    if(window.outerWidth >= 400){
        const parentWidth = parent.offsetWidth;
        var numReps = Math.ceil(parentWidth / width);

        let res = text.repeat(numReps);
        
        child.innerHTML = res;
    }
}

widerInfopartners();

window.onresize = widerInfopartners;