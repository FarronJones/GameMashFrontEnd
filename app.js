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