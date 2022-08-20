const button = document.querySelector("#top-button");

// const div = document.querySelector('div.overflow-hidden');

window.onscroll = function() {
    if (window.scrollY > 300) {
        button.classList.add("show");
    }
    else {
        button.classList.remove("show");
    }
};

function toTop() {
    // var scrollDuration = window.scrollY/8;
    // var scrollStep = -120, //window.scrollY / (scrollDuration / 15),
    //     scrollInterval = setInterval(function(){
    //     if ( window.scrollY != 0 ) {
    //         window.scrollBy( 0, scrollStep );
    //     }
    //     else clearInterval(scrollInterval); 
    // },15);
    window.scrollTo(0,0);
}