document.addEventListener("DOMContentLoaded", () => {
    // LOGIN FORM
    const loginForm = document.querySelector('.login-page form');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const email = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            try {
                const res = await axios.post("http://localhost:8081/api/auth/login", {
                    email,
                    password
                });

                alert(res.data); // show backend response
                console.log("Login successful:", res.data);

            } catch (err) {
                alert("Login failed");
                console.error(err);
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
            const avatar = document.querySelector('input[name="avatar"]:checked')?.value || "";

            const userId = Math.floor(Math.random() * 10000); // temp ID or auto-generate from DB
            const firstName = "F"; // Replace with actual input if available
            const lastName = "L";
            const avatarid = mapAvatarToId(avatar);

            try {
                const res = await axios.post("http://localhost:8081/api/auth/signup", {
                    userId,
                    email,
                    password,
                    firstName,
                    lastName,
                    avatarid
                });

                alert(res.data);
                console.log("Signup successful:", res.data);

            } catch (err) {
                alert("Signup failed");
                console.error(err);
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