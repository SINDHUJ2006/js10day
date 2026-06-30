const postsDiv = document.getElementById("posts");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const pageNo = document.getElementById("pageNo");
let posts = [];
let currentPage = 1;
const postsPerPage = 10;
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        posts = data;
        displayPosts();
    });
function displayPosts() {
    postsDiv.innerHTML = "";
    const start = (currentPage - 1) * postsPerPage;
    const end = start + postsPerPage;
    const currentPosts = posts.slice(start, end);
    currentPosts.forEach(post => {
        postsDiv.innerHTML += `
            <div class="post">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>
        `;
    });
    pageNo.textContent = `Page ${currentPage}`;
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === Math.ceil(posts.length / postsPerPage);
}
prevBtn.addEventListener("click", () => {
    if(currentPage > 1){
        currentPage--;
        displayPosts();
    }
});
nextBtn.addEventListener("click", () => {
    if(currentPage < Math.ceil(posts.length / postsPerPage)){
        currentPage++;
        displayPosts();
    }
});