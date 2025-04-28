document.addEventListener("DOMContentLoaded", async () => {
    const loginForm = document.querySelector('.login-page form');
    const signupForm = document.querySelector('.signup-page form');
    const editForm = document.getElementById("edit-profile-form");

    const thoughtInput = document.getElementById('thought-input');
    const thoughtsContainer = document.getElementById('thoughts-container');
    const postButton = document.getElementById('post-button');

    if (thoughtInput && thoughtsContainer && postButton) {
        // Community Page detected

        await loadThoughts();

        postButton.addEventListener('click', async () => {
            await postThought();
        });
    }

    // LOGIN FORM
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            console.log("🔐 Login Attempt:");
            console.log("Email:", email);
            console.log("Password:", password);

            try {
                const res = await axios.post("http://localhost:8081/api/auth/login", {
                    email,
                    password
                });

                console.log("✅ Login Response:", res.data);

                if (res.data.message === "Login successful") {
                    const firstName = res.data.firstName;
                    const avatarid = res.data.avatarid;
                    const avatar = mapIdToAvatar(avatarid);

                    localStorage.setItem("email", email);
                    localStorage.setItem("firstName", firstName);
                    localStorage.setItem("avatar", avatar);

                    alert("Login successful!");
                    window.location.href = "/index.html";
                } else {
                    alert(res.data);
                }

            } catch (err) {
                console.error("❌ Login failed:", err.response?.data || err.message);
                alert("Login failed");
            }
        });
    }

    // SIGNUP FORM
    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const firstName = document.getElementById("first-name").value;
            const lastName = document.getElementById("last-name").value;
            const avatar = document.querySelector('input[name="avatar"]:checked')?.value || "";
            const avatarid = mapAvatarToId(avatar);

            console.log("📝 Signup Attempt:");
            console.log("Email:", email);
            console.log("Password:", password);
            console.log("First Name:", firstName);
            console.log("Last Name:", lastName);
            console.log("Avatar:", avatar, "Mapped Avatar ID:", avatarid);

            try {
                const res = await axios.post("http://localhost:8081/api/auth/signup", {
                    email,
                    password,
                    firstName,
                    lastName,
                    avatarid
                });

                console.log("✅ Signup Response:", res.data);
                alert("Signup successful! Redirecting to login...");
                window.location.href = "login.html";
            } catch (err) {
                console.error("❌ Signup failed:", err.response?.data || err.message);
                alert("Signup failed");
            }
        });
    }

    // EDIT PROFILE
    if (editForm) {
        const email = localStorage.getItem("email");

        try {
            const res = await axios.get(`http://localhost:8081/api/auth/player/${email}`);
            const player = res.data;

            document.getElementById("edit-first-name").value = player.firstName;
            document.getElementById("edit-last-name").value = player.lastName;
            document.getElementById("edit-email").value = player.email;

            const avatarValue = `avatar${player.avatarid}.${player.avatarid === 1 ? 'avif' : 'png'}`;
            const avatarRadio = document.querySelector(`input[name="avatar"][value="${avatarValue}"]`);
            if (avatarRadio) avatarRadio.checked = true;
        } catch (err) {
            console.error("Error fetching profile:", err);
            alert("Could not load profile data.");
        }

        editForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const updatedFirstName = document.getElementById("edit-first-name").value;
            const updatedLastName = document.getElementById("edit-last-name").value;
            const updatedEmail = document.getElementById("edit-email").value;
            const avatar = document.querySelector('input[name="avatar"]:checked')?.value;
            const avatarid = mapAvatarToId(avatar);

            try {
                await axios.put(`http://localhost:8081/api/auth/player/update`, {
                    email: updatedEmail,
                    firstName: updatedFirstName,
                    lastName: updatedLastName,
                    avatarid
                });

                localStorage.setItem("firstName", updatedFirstName);
                localStorage.setItem("avatar", avatar);

                alert("Profile updated!");
                window.location.href = "/index.html";
            } catch (err) {
                console.error("Profile update failed:", err);
                alert("Failed to update profile.");
            }
        });
    }
});

// Helpers
function mapAvatarToId(filename) {
    switch (filename) {
        case 'avatar1.avif': return 1;
        case 'avatar2.png': return 2;
        case 'avatar3.png': return 3;
        case 'avatar4.png': return 4;
        default: return null;
    }
}

function mapIdToAvatar(id) {
    switch (id) {
        case 1: return 'avatar1.avif';
        case 2: return 'avatar2.png';
        case 3: return 'avatar3.png';
        case 4: return 'avatar4.png';
        default: return 'profile-placeholder.png';
    }
    function createButton(text, onClickAction) {
        const button = document.createElement("button");
        button.textContent = text;
        button.onclick = onClickAction;
        return button;
    }    
    async function postThoughtSilent(message) {
        try {
            const avatar = localStorage.getItem("avatar") || "profile-placeholder.png";
            const email = localStorage.getItem("email");
            const isAnon = !email;
    
            await axios.post('http://localhost:8081/api/comments', {
                gameId: 1,
                userId: null,
                message: message,
                profilePicture: avatar,
                isAnon: isAnon,
                timestamp: new Date().toISOString()
            });
    
            // 🧠 No success alert, no reload, no UI changes. Just database save.
        } catch (err) {
            console.error("Post failed silently:", err);
            // No alert or error popup to user
        }
    }
    
    function createThoughtElement({ message, posterName, profilePicture, timestamp }) {
        const thought = document.createElement("div");
        thought.classList.add("thought");
    
        const postedHeader = document.createElement("div");
        postedHeader.classList.add("thought-header");
    
        const avatarImg = document.createElement("img");
        avatarImg.src = `/Images/${profilePicture}`;
        avatarImg.alt = posterName;
        avatarImg.classList.add("avatar-small");
    
        const posterNameEl = document.createElement("span");
        posterNameEl.classList.add("poster-name");
        posterNameEl.textContent = posterName;
    
        postedHeader.appendChild(avatarImg);
        postedHeader.appendChild(posterNameEl);
    
        const content = document.createElement("p");
        content.textContent = message;
    
        const timestampEl = document.createElement("small");
        const postedDate = new Date(timestamp);
        timestampEl.textContent = `Posted on ${postedDate.toLocaleString()}`;
    
        thought.appendChild(postedHeader);
        thought.appendChild(content);
        thought.appendChild(timestampEl);
    
        return thought;
    }
}