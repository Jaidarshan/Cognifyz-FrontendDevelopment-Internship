/* Task 5: API Integration */
document.getElementById('fetchButton').addEventListener('click', fetchPosts);
function fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPosts(data))
        .catch(error => console.error('Error fetching data:', error));
}
function displayPosts(posts) {
    const container = document.getElementById('dataContainer');
    container.innerHTML = '';
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        const postTitle = document.createElement('h3');
        postTitle.textContent = post.title;
        const postBody = document.createElement('p');
        postBody.textContent = post.body;
        postElement.appendChild(postTitle);
        postElement.appendChild(postBody);
        container.appendChild(postElement);
    });
}
