const usersDiv = document.getElementById("users");

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {

        users.forEach(user => {

            usersDiv.innerHTML += `
                <div class="user">
                    <h3>${user.name}</h3>
                    <p><strong>Email:</strong> ${user.email}</p>
                </div>
            `;

        });

    })
    .catch(error => {

        usersDiv.innerHTML = "<h3>Failed to fetch users!</h3>";
        console.log(error);

    });