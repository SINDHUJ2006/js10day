const setup = document.getElementById("setup");
const punchline = document.getElementById("punchline");
function getJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(joke => {
            setup.textContent = joke.setup;
            punchline.textContent = joke.punchline;
        })
        .catch(() => {
            setup.textContent = "Failed to load joke!";
            punchline.textContent = "";
        });
}