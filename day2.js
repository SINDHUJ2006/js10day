const postsDiv = document.getElementById("posts");
const search = document.getElementById("search");
let posts = [];
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        posts = data;
        displayPosts(posts);
    });
function displayPosts(postList) {
    postsDiv.innerHTML = "";
    postList.forEach(post => {
        postsDiv.innerHTML += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr>
        `;
    });
}
search.addEventListener("input", function () {
    const keyword = search.value.toLowerCase();
    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(keyword)
    );
    displayPosts(filteredPosts);
});