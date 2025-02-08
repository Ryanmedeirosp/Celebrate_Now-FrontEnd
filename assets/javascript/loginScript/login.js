const loginEmailField = document.querySelector("#email");
const loginPasswordField = document.querySelector("#password");

const loginButton = document.querySelector("#login-button");

const testLoginData = document.querySelector("#logoHeader");




loginButton.addEventListener("click", (event) =>{

    login(loginEmailField.value, loginPasswordField.value);
});

testLoginData.addEventListener("click", (event) =>{

    console.log(localStorage.getItem("ceremonialistId"));
    console.log(localStorage.getItem("ceremonialistEmail"));
    console.log(localStorage.getItem("ceremonialistName"));
});

async function login(email, password) {
    
    fetch("http://localhost:8080/ceremonialist/login", {

        method: "POST",
        body: JSON.stringify({
            "email": `${email}`,
            "password": `${password}`
        }),
        headers: {
            "Content-Type": "application/json",
        },
    })

    .then(response =>{

        if (!response.ok) {
            return response.json().then(err => {
                throw new Error(err.message);
            });
        }
        return response.json();
    })

    .then((data) =>{

        /* Ação */

        localStorage.setItem("ceremonialistId", data.id);
        localStorage.setItem("ceremonialistEmail", data.email);
        localStorage.setItem("ceremonialistName", data.name);
        
        console.log("Dados do Ceremonialista: ", data);
        window.location.href = "../../indexService.html"
        
    })

    .catch((error) =>{
        console.error("Erro de Login:", error);
        alert(error.message || "Erro de Login");
    });
};