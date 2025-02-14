document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("navbar").innerHTML = `
        <nav>
            <div class="nav-container">
                <ul class="nav-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="play.html">Play</a></li>
                    <li><a href="community.html">Community</a></li>
                </ul>
                <div class="auth-section">
                    <a href="login.html" class="auth-link">Login / Signup</a>
                    <img src="./Images/profile-placeholder.png" alt="Profile Picture" class="profile-pic">
                </div>
            </div>
        </nav>
    `;
});
