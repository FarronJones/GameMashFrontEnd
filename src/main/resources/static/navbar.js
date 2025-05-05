document.addEventListener("DOMContentLoaded", function () {
    function toggleMenu() {
        let subMenu = document.getElementById("SubMenu");
        subMenu.classList.toggle("open-menu");
    }

    const storedName = localStorage.getItem("firstName");
    const storedAvatar = localStorage.getItem("avatar");
    const isLoggedIn = localStorage.getItem("email");

    const userLang = localStorage.getItem("lang") || "en";

    const translations = {
        en: {
            "edit-profile": "Edit Profile",
            "settings-privacy": "Settings & Privacy",
            "help-support": "Help & Support",
            "logout": "Logout",
            "nav-home": "Home",
            "nav-about": "About",
            "nav-play": "Play",
            "nav-community": "Community",
            "login-signup": "Login / Signup"
        },
        es: {
            "edit-profile": "Editar Perfil",
            "settings-privacy": "Configuración y Privacidad",
            "help-support": "Ayuda y Soporte",
            "logout": "Cerrar sesión",
            "nav-home": "Inicio",
            "nav-about": "Acerca de",
            "nav-play": "Jugar",
            "nav-community": "Comunidad",
            "login-signup": "Iniciar sesión / Registrarse"
        },
        fr: {
            "edit-profile": "Modifier le Profil",
            "settings-privacy": "Paramètres et Confidentialité",
            "help-support": "Aide et Support",
            "logout": "Se déconnecter",
            "nav-home": "Accueil",
            "nav-about": "À propos",
            "nav-play": "Jouer",
            "nav-community": "Communauté",
            "login-signup": "Connexion / Inscription"
        }
    };

    const langMap = translations[userLang];

    document.getElementById("navbar").innerHTML = `
        <nav>
            <div class="nav-container">
                <ul class="nav-links">
                    <li><a href="index.html">${langMap["nav-home"]}</a></li>
                    <li><a href="about.html">${langMap["nav-about"]}</a></li>
                    <li><a href="play.html">${langMap["nav-play"]}</a></li>
                    <li><a href="community.html">${langMap["nav-community"]}</a></li>
                </ul>

                <div class="auth-section">
                    ${isLoggedIn ? '' : `<a href="login.html" class="auth-link">${langMap["login-signup"]}</a>`}
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
                        <a href="edit-profile.html" class="sub-menu-link" id="edit-profile-link"><p>${langMap["edit-profile"]}</p><span>></span></a>
                        <a href="SettingsPrivacy.html" class="sub-menu-link"><p>${langMap["settings-privacy"]}</p><span>></span></a>
                        <a href="help-support.html" class="sub-menu-link" id="help-support-link"><p>${langMap["help-support"]}</p><span>></span></a>
                        <a href="#" class="sub-menu-link" id="logout-link"><p>${langMap["logout"]}</p><span>></span></a>
                    </div>
                </div>
            </div>
        </nav>
    `;

    document.querySelector(".profile-pic").addEventListener("click", toggleMenu);

    const logoutLink = document.getElementById("logout-link");
    if (logoutLink) {
        logoutLink.addEventListener("click", () => {
            localStorage.clear();
            alert("You’ve been logged out.");
            window.location.href = "login.html";
        });
    }
});