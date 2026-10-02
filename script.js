function showMessage() {
    alert("Welcome to South C Connect 🇰🇪");
}

const searchBox = document.getElementById("searchBox");
const directoryItems = document.querySelectorAll(".directory-item");

searchBox.addEventListener("input", function () {

    const searchText = searchBox.value.toLowerCase();

    directoryItems.forEach(function (item) {

        const itemText = item.textContent.toLowerCase();

        if (itemText.includes(searchText)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }

    });

});
function openMap(place) {
    const mapUrl =
        "https://www.google.com/maps/search/?api=1&query=" +
        encodeURIComponent(place);

    window.open(mapUrl, "_blank");
}
function toggleMenu() {
    const nav = document.getElementById("mainNav");
    nav.classList.toggle("show-menu");
}
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    document.getElementById("formMessage").textContent =
        "Thank you! Your message has been received.";

    contactForm.reset();

});
function goToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth"
    });
}