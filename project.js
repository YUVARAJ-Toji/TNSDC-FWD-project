function downloadResume() {
    // Example: You can link your resume PDF
    window.open("resume.pdf", "_blank");
}

// Optional: Form submit alert
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thanks for contacting me! I’ll get back to you soon.");
});