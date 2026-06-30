const api = "https://jsonplaceholder.typicode.com/posts";
let posts = [];
let currentPage = 1;
const perPage = 10;
const postDiv = document.getElementById("posts");
const page = document.getElementById("page");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

async function getPosts() {
    const response = await fetch(api);
    posts = await response.json();
    showPosts();
}

function showPosts() {
    postDiv.innerHTML = "";

    let start = (currentPage - 1) * perPage;
    let end = start + perPage;

    let currentPosts = posts.slice(start, end);

    currentPosts.forEach(post => {
        postDiv.innerHTML += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr>
        `;
    });

    page.innerText = "Page " + currentPage;

    prev.disabled = currentPage === 1;
    next.disabled = currentPage === Math.ceil(posts.length / perPage);
}

next.addEventListener("click", () => {
    currentPage++;
    showPosts();
});

prev.addEventListener("click", () => {
    currentPage--;
    showPosts();
});

getPosts();