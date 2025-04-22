document.addEventListener("DOMContentLoaded", function () {
    // JavaScript function to toggle the visibility of the sub-menu
    function toggleMenu() {
        let subMenu = document.getElementById("SubMenu");
        subMenu.classList.toggle("open-menu");
    }

    // Grab values from localStorage
    const storedName = localStorage.getItem("firstName");
    const storedAvatar = localStorage.getItem("avatar");
    const isLoggedIn = localStorage.getItem("email");

    // Build the navbar
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
                    ${isLoggedIn ? '' : '<a href="login.html" class="auth-link">Login / Signup</a>'}
                    <img src="./Images/${storedAvatar || 'profile-placeholder.png'}" 
                         class="profile-pic" 
                         alt="Profile Picture">
                </div>

                <div class="sub-menu-wrap" id="SubMenu">
                    <div class="sub-menu">
                        <div class="user-info">
                            <img src="./Images/${storedAvatar || 'profile-placeholder.png'}" alt="User Avatar">
                            <h3>${storedName || 'USER'}</h3>
                        </div>
                        <hr>
                        <a href="edit-profile.html" class="sub-menu-link" id="edit-profile-link"><p>Edit Profile</p><span>></span></a>
                        <a href="#" class="sub-menu-link"><p>Settings & Privacy</p><span>></span></a>
                        <a href="#" class="sub-menu-link"><p>Help & Support</p><span>></span></a>
                        <a href="#" class="sub-menu-link" id="logout-link"><p>Logout</p><span>></span></a>
                    </div>
                </div>
            </div>
        </nav>
    `;

    // Toggle dropdown menu
    document.querySelector(".profile-pic").addEventListener("click", toggleMenu);

    // Logout functionality
    const logoutLink = document.getElementById("logout-link");
    if (logoutLink) {
        logoutLink.addEventListener("click", () => {
            localStorage.clear();
            alert("You’ve been logged out.");
            window.location.href = "login.html";
        });
    }
});