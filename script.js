// while (true) {

// }
class ScrollAnimation {
    element;
    frameCount;
    fps;
    height;
    interval;


    constructor(element, frameCount, fps) {
        this.element = element;
        this.frameCount = frameCount;
        this.fps = fps;
        this.height = element.getBoundingClientRect().height / this.frameCount;
        
        this.startAnimation();
    }

    startAnimation = () => {
        this.interval = this.createInterval(this.element, this.frameCount, this.fps, this.height);
    }

    stopAnimation = () => {
        clearInterval(this.interval);
    }

    createInterval = (element, frameCount, fps, height) => {
        let progress = 1;
        return setInterval(
            function() {

                progress = (progress + (1 * 100 / frameCount)) % 100;
                element.style.transform = `translateY( calc( -50% + ${progress}% + ${height / 4}px ) )`;
            }, (1000 / fps)
        );
    }

}

start = () => {
    new ScrollAnimation(document.getElementById("animation-left"), 120, 24);
    new ScrollAnimation(document.getElementById("animation-right"), 132, 24);
}

document.addEventListener("DOMContentLoaded", function() {
    start();
} );