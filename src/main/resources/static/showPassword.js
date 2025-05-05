document.addEventListener("DOMContentLoaded", function () {
    function togglePasswordVisibility(eyeIcon) {
        const passwordField = eyeIcon.previousElementSibling; 

        eyeIcon.addEventListener("mousedown", function () {
            passwordField.type = "text";
        });

        eyeIcon.addEventListener("mouseup", function () {
            passwordField.type = "password";
        });

        eyeIcon.addEventListener("mouseleave", function () {
            passwordField.type = "password";
        });
    }

    document.querySelectorAll(".eye-icon").forEach(togglePasswordVisibility);
});