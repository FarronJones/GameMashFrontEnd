axios.get('http://localhost:8081/api/comments')
.then(response => {
    console.log('Comments received:', response.data);
    
    const commentsSection = document.createElement('section');
    commentsSection.classList.add('comments');
    
    // Loop through the comments data and display each comment
    response.data.forEach(comment => {
        const commentElement = document.createElement('p');
        commentElement.textContent = comment.comment;
        commentsSection.appendChild(commentElement);
    });
    

    document.body.appendChild(commentsSection);
})
.catch(error => {
    console.error('Error fetching comments:', error);
});
//sign up api call
axios.post('http://localhost:8081/api/signup', {
    username: 'newUser',
    email: 'newUser@example.com',
    password: 'userPassword',
    avatar: 'avatar', 
})
.then(response => {
    console.log('User registered:', response.data);

    const registrationSection = document.createElement('section');
    registrationSection.classList.add('registration');

    const successMessage = document.createElement('p');
    successMessage.textContent = 'Registration successful!';
    registrationSection.appendChild(successMessage);

    document.body.appendChild(registrationSection);
})
.catch(error => {
    console.error('Error registering user:', error);

    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Error registering user. Please try again.';
    document.body.appendChild(errorMessage);
});


// login API call
axios.get('http://localhost:8081/api/login', {
    username: 'existingUser',
    password: 'userPassword'
})
.then(response => {
    console.log('User logged in:', response.data);

    const loginSection = document.createElement('section');
    loginSection.classList.add('login');

    const welcomeMessage = document.createElement('p');
    welcomeMessage.textContent = 'Login successful! Welcome!';
    loginSection.appendChild(welcomeMessage);

    document.body.appendChild(loginSection);
})
.catch(error => {
    console.error('Error logging in:', error);

    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Error logging in. Please try again.';
    document.body.appendChild(errorMessage);
});