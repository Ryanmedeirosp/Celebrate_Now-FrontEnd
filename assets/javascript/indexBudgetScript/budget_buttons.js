//Add Item Inputs
const addItemName = document.querySelector("#add-item-name");
const addItemDescription = document.querySelector("#add-item-description");
const addItemPrice = document.querySelector("#add-item-price");

//Create New Budget Inputs
const createNewBudgetEmailClient = document.querySelector("#client-name");
const createNewBudgetEmailSupplier = document.querySelector("#supplier-input");

//Variables Tests

var clientEmailTest = "mariana.souza@email.com";
var supplierEmailTest = "contato@buffetdelicia.com";

async function createNewBudget(clientEmail, supplierEmail) {

    fetch("http://localhost:8080/budget", {

        method: "POST",
        body: JSON.stringify({
            "clientEmail": `${clientEmail}`,
            "supplierCnpj": `${supplierEmail}`          
        }),
        headers: {
            "Content-Type": "application/json",
        },
    }).catch((error) =>{

        console.error("Erro de criação de orçamento:", error);
        alert(error.message || "Erro de criação orçamento");
    });
    // .then(response =>{
    //     if (!response.ok) {
    //         return response.json().then(err => {
    //             throw new Error(err.message);
    //         });
    //     }
    //     return response.json();
    // })
    // .then((data) =>{

    //     console.log("Novo Orçamento Retorno: ", data);
    // })
    
}

async function addItemToBudget(title, description, price, budgetId) {
    fetch("http://localhost:8080/item", {

        method: "POST",
        body: JSON.stringify({
            "title": `${title}`,
            "description": `${description}`,
            "price": `${price}`,
            "budgetId": `${budgetId}`
        }),
        headers: {
            "Content-Type": "application/json",
        },
    }).catch((error) =>{

        console.error("Erro ao tentar adicionar:", error);
        alert(error.message || "Erro ao tentar adicionar");
    });

}