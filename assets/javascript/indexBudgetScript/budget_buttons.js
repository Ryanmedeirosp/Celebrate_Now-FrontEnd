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

addItemPrice.addEventListener("keypress", (event) =>{

    if (isNaN(event.key)) {
        
        event.preventDefault();
    }
})

async function createNewBudget(clientEmail, supplierEmail) {

    fetch("https://deploy-back-mi31.onrender.com/budget", {

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
    });
    
}

async function addItemToBudget(title, description, price, budgetId) {
    fetch("https://deploy-back-mi31.onrender.com/item", {

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
    });
}

//2024-04-15

function formatDate(date) {
    
    let year = date.substring(0, 4);
    let month = date.substring(5, 7);
    let day = date.substring(8, 10);

    let newDate = `${day + "/" + month + "/" + year}`;

    return newDate;
}