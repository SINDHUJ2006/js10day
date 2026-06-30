function getUser() {

    const username = document.getElementById("username").value.trim();
    const result = document.getElementById("result");

    if (username === "") {
        result.innerHTML = "<p>Please enter a username.</p>";
        return;
    }

    fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("User not found!");
            }
            return response.json();
        })
        .then(user => {

            result.innerHTML = `
                <img src="${user.avatar_url}" alt="Profile">
                <h3>${user.name || "No Name Available"}</h3>
                <p><strong>Username:</strong> ${user.login}</p>
                <p><strong>Followers:</strong> ${user.followers}</p>
                <p><strong>Public Repositories:</strong> ${user.public_repos}</p>
                <p><strong>Following:</strong> ${user.following}</p>
                <a href="${user.html_url}" target="_blank">View GitHub Profile</a>
            `;

        })
        .catch(error => {
            result.innerHTML = `<p>${error.message}</p>`;
        });

}