function login(){

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    fetch("https://reqres.in/api/login",{

        method:"POST",

        headers:{
            "Content-Type":"application/json",
            "x-api-key":"free_user_3FrN6XxnjTeGxitnYQ1U1rPkfBo"
        },

        body:JSON.stringify({
            email:email,
            password:password
        })

    })

    .then(response=>response.json())

    .then(data=>{

        if(data.token){

            message.style.color="green";
            message.innerHTML="✅ Login Successful";

        }
        else{

            message.style.color="red";
            message.innerHTML= data.error;

        }

    })

    .catch(()=>{

        message.innerHTML="Something went wrong!";

    });

}