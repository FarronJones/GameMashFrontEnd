document.addEventListener("DOMContentLoaded", function() {
    const avatarRadios = document.querySelectorAll('input[name="avatar"]');
    const profilePic = document.getElementById('profile-pic');

    avatarRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.checked) {
                // update profile picture with the selected avatar
                profilePic.src = `Images/${this.value}`;
            }
        });
    });
});
