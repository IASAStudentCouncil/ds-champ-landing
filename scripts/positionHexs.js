function positionHexs() {
    const backline = document.querySelector(".back-line");
    var backline_bound = backline.getBoundingClientRect();
    for (var i = 1; i < 5; i++){
        const hex = document.querySelector(".hex" + i + " .hexagon");
        const num = document.querySelector(".hex" + i + " .num");
        const line = document.querySelector(".hex" + i + " .line");
        const circle = document.querySelector(".hex" + i + " .circle");
        const text = document.querySelector(".hex" + i + " .text");

        var hex_bound = hex.getBoundingClientRect();
        var num_bound = num.getBoundingClientRect();
        var line_bound = line.getBoundingClientRect();
        var circle_bound = circle.getBoundingClientRect();
        var text_bound = text.getBoundingClientRect();

        const maxheight = backline_bound.width > 300 ? 600 : 500;

        //hexagon positioning
        var left_corner_x = hex_bound.left + hex_bound.width / 4;
        var left_corner_y_positioned = maxheight - (backline_bound.width - left_corner_x) * 400 / backline_bound.width - 0.05 * hex_bound.width;

        hex.style.top = left_corner_y_positioned + "px";
        // number positioning
        num.style.left = (hex_bound.left + hex_bound.width / 2 - num_bound.width/2) + "px";
        num.style.top = (left_corner_y_positioned + hex_bound.height * 0.45 - num_bound.height* 1.1) + "px";
        num.style.right = "unset";
        num.style.transform = "none";

        if (backline_bound.width > 600) {
            // line positioning
            line.style.transform = "none";
            line.style.left = (hex_bound.left + hex_bound.width / 2 - line_bound.width/2) + "px";
            line.style.top = (left_corner_y_positioned - line_bound.height * 0.75) + "px";
            // circle positioning
            circle.style.left = (hex_bound.left + hex_bound.width / 2 - circle_bound.width/2) + "px"; 
            circle.style.top = (left_corner_y_positioned - line_bound.height * 0.75 - circle_bound.height/2) + "px";
            circle.style.transform = "none";
            // text positioning
            text.style.transform = "none";
            text.style.left = (hex_bound.left + hex_bound.width / 2 - text_bound.width/2) + "px";
            text.style.top = (left_corner_y_positioned - line_bound.height * 0.75 - circle_bound.height/2 - text_bound.height) + "px";
        }
        else {
            // line positioning
            line.style.transform = "rotate(30deg)";
            line.style.left = (hex_bound.left + hex_bound.width / 2 + line_bound.width/2 - 6) + "px";
            line.style.top = (left_corner_y_positioned + hex_bound.width * 0.45 - line_bound.height) + "px";
            // circle positioning
            circle.style.transform = "none";
            circle.style.left = (hex_bound.left + hex_bound.width / 2 + line_bound.width - circle_bound.width/2 - 6) + "px";
            circle.style.top = (left_corner_y_positioned + hex_bound.width * 0.45 - line_bound.height) + "px";
            // text positioning
            text.style.transform = "none";
            text.style.left = (hex_bound.left + hex_bound.width / 2 + line_bound.width - 6 - text_bound.width + circle_bound.width/2 + 20) + "px";
            text.style.top = (left_corner_y_positioned + hex_bound.width * 0.45 - line_bound.height  - text_bound.height) + "px";
        }
    }
}

positionHexs();