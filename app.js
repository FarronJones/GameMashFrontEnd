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
                alert(res.data); // show backend response

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