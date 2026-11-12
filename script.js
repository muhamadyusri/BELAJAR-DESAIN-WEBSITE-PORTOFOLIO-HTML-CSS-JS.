function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: 'smooth'
    });
}

document.getElementById("contactform").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("message").innerText =
    "Berhasil Di Submit";
    this.reset();
});