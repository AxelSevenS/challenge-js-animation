// while (true) {

// }
class ScrollAnimation {
    element;
    frameCount;
    fps;
    height;
    interval;


    constructor(element, frameCount, fps, height) {
        this.element = element;
        this.frameCount = frameCount;
        this.fps = fps;
        this.height = height;
        
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
                console.log(element);
                element.style.transform = `translateY( calc( -50% + ${progress}% ) )`;
            }, (frameCount / fps)
        );
    }

}

document.addEventListener("DOMContentLoaded", function(e) 
    {
        console.log("DOM fully loaded and parsed");

        // scrollAnimation(animationLeft, 120, 3, 190);
        // scrollAnimation(animationRight, 132, 3, 147);

        new ScrollAnimation(document.getElementById("animation-left"), 120, 3, 190);
        new ScrollAnimation(document.getElementById("animation-right"), 132, 3, 147);


        // new Carousel(document.getElementsByClassName('carousel-container')[0]);
    }
)