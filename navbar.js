document.addEventListener("DOMContentLoaded", function () {
    // JavaScript function to toggle the visibility of the sub-menu
    function toggleMenu() {
        let subMenu = document.getElementById("SubMenu");
        subMenu.classList.toggle("open-menu");
    }

    // Set the innerHTML for the navbar
    document.getElementById("navbar").innerHTML = `
        <nav>

        
            <!-- Logo of the website -->
            <div class="nav-container">
                <ul class="nav-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="play.html">Play</a></li>
                    <li><a href="community.html">Community</a></li>
                </ul>


                <div class="auth-section">
                  <a href="login.html" class="auth-link">Login / Signup</a>
                    <!-- User profile picture that triggers the drop-down menu -->
                    <img src="./Images/profile-placeholder.png" 
                         class="profile-pic">
                </div>


                <!-- Wrapper for the sub-menu -->
                <div class="sub-menu-wrap" id="SubMenu">
                    <div class="sub-menu">
                        <div class="user-info">


                            <!-- Placeholder image and user info -->
                             <img src="./Images/profile-placeholder.png">
                            <h3>USER</h3>
                        </div>

                        <!-- Separator line -->
                        <hr>


                        <!-- Menu links -->
                        <a href="#" class="sub-menu-link">
                            
                            <p>Edit Profile</p>
                            <span>></span>
                        </a>
                        <a href="#" class="sub-menu-link">
                             
                            <p>Settings & Privacy</p>
                            <span>></span>
                        </a>
                        <a href="#" class="sub-menu-link">
                             
                            <p>Help & Support</p>
                            <span>></span>
                        </a>
                        <a href="#" class="sub-menu-link">
                             
                            <p>Logout</p>
                            <span>></span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    `;

    // Attach the event listener programmatically after innerHTML is set
    document.querySelector(".profile-pic").addEventListener("click", toggleMenu);
});



/*document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("navbar").innerHTML = `
        <nav>
            <div class="nav-container">
            <div class="auth-section">
                    <a href="login.html" class="auth-link">Login / Signup</a>
                    <img src="./Images/profile-placeholder.png" alt="Profile Picture" class="profile-pic">
                </div>
                
                <ul class="nav-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="play.html">Play</a></li>
                    <li><a href="community.html">Community</a></li>
                </ul>
                
            </div>
        </nav>
    `;
});
*/