start = () => {
    TweenMax.fromTo('#animation-left', 5, {transform: " translateY( calc( -50% + (100% /264) ) )"}, {transform: " translateY( calc( 50% + (100% /264) ) )", repeat:-1, ease:SteppedEase.config(120)});
    TweenMax.fromTo('#animation-right', 5.5, {transform: " translateY( calc( -50% + (100% /240) ) )"}, {transform: " translateY( calc( 50% + (100% /240) ) )", repeat:-1, ease:SteppedEase.config(132)});
}

document.addEventListener("DOMContentLoaded", function() {
    start();
} );