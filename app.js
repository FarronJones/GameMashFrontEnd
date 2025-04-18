document.addEventListener("DOMContentLoaded", () => {
    // LOGIN FORM
    const loginForm = document.querySelector('.login-page form');
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

                    // Store info in localStorage
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
    const signupForm = document.querySelector('.signup-page form');
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
                alert(res.data);

                // No localStorage set here — wait until login
            } catch (err) {
                console.error("❌ Signup failed:", err.response?.data || err.message);
                alert("Signup failed");
            }
        });
    }
});

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
}