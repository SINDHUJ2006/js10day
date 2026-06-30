const todosDiv = document.getElementById("todos");

// Fetch Todos
fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
    .then(response => response.json())
    .then(todos => {

        todos.forEach(todo => {

            todosDiv.innerHTML += `
                <div class="todo">
                    <span>${todo.title}</span>

                    <button onclick="markCompleted(${todo.id}, this)">
                        ${todo.completed ? "Completed" : "Mark Complete"}
                    </button>
                </div>
            `;

        });

    });

// Update Todo
function markCompleted(id, button){

    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{

        method:"PUT",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({
            completed:true
        })

    })

    .then(response => response.json())

    .then(data=>{

        button.innerHTML="Completed";
        button.disabled=true;

        console.log(data);

    });

}