const parent = document.querySelector("#infopartners-repeat");
const child = document.querySelector("#infopartners-repeat span");

const parentWidth = parent.offsetWidth;

const text = "Інформаційні партнери ";

child.innerHTML = text;
const width = child.offsetWidth;

var numReps = Math.ceil(parentWidth / width);

let res = text.repeat(numReps);

child.innerHTML = res;