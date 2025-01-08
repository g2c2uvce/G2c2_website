setTimeout
var typed = new Typed('#element', {
    strings: ['Environmental Club', 'Cleaning Club'],
    typeSpeed: 50,
});
document.querySelector('.navbar::after').addEventListener('click', function () {
    document.querySelector('.navbar').classList.toggle('open');
});
function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "0px" || sidebar.style.width === "") {
        sidebar.style.width = "250px";
    } else {
        sidebar.style.width = "0px";
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const leftArrow = document.getElementById("left-arrow");
    const rightArrow = document.getElementById("right-arrow");
    const eventsContainer = document.querySelector(".events-container");

    let scrollAmount = 0; // Keeps track of the current scroll position
    const scrollStep = 300; // The number of pixels to scroll with each click

    // Handle right arrow click
    rightArrow.addEventListener("click", function () {
        eventsContainer.scrollBy({
            left: scrollStep,
            behavior: "smooth",
        });
    });

    // Handle left arrow click
    leftArrow.addEventListener("click", function () {
        eventsContainer.scrollBy({
            left: -scrollStep,
            behavior: "smooth",
        });
    });
});