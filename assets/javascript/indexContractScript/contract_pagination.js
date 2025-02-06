//Data Fields
const clientName = document.getElementById("client-name");
const contractNumber = document.getElementById("contract-number");
const eventDay = document.getElementById("event-day");

//Buttons
const prevContract = document.querySelector("#prev-page");
const nextContract = document.querySelector("#next-page");

//Functions
async function getClients() {

    console.log("\n\nGet Clients: ");

    fetch(`http://localhost:8080/client/${localStorage.getItem("ceremonialistId")}`, {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    })

    .then(response => {
        if (!response.ok) {
            return response.json().then(err => {
                throw new Error(err.message);
            });
        }
        return response.json();
    })

    .then((data) => {

        const clients = Array.isArray(data) ? data : [data];

        let clientsArray = JSON.parse(localStorage.getItem("clientsArray")) || [];

        clients.forEach((customer) => {

            if (!clientsArray.includes(customer.clientId)){ 

                clientsArray.push(customer.clientId);
            }
        });

        clientsArray.sort();
        
        localStorage.setItem("clientsList", JSON.stringify(clientsArray));
        console.log("IDs de clientes armazenados: ", clientsArray);
    })

    .catch((error) => {
        console.error("Erro ao buscar clientes:", error);
    });
};

async function getBudgets() {

    console.log("\n\nGet Budget: ");

    let clientsArray = JSON.parse(localStorage.getItem("customersArray")) || [];
    let budgetsArray = JSON.parse(localStorage.getItem("budgetsArray")) || [];

    // Criar uma lista de Promises
    let promises = clientsArray.map(clientId => {
        return fetch(`http://localhost:8080/budget/${clientId}/${localStorage.getItem("ceremonialistId")}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => {
                    throw new Error(err.message);
                });
            }
            return response.json();
        })
        .then(data => {
            if (data.length > 0) {
                for (let index = 0; index < data.length; index++) {
      
                    let budgetId = data[index].budgetId;
                    if (!budgetsArray.includes(budgetId)) {

                        budgetsArray.push(budgetId);
                        budgetsArray.sort();
                    }
                }
            }
        })
        .catch(error => {
            console.error("Erro ao buscar orçamentos:", error);
        });
    });

    // Espera todas as requisições serem concluídas antes de salvar no localStorage
    await Promise.all(promises);

    localStorage.setItem("budgetsArray", JSON.stringify(budgetsArray));
    localStorage.setItem("currentBudget", budgetsArray[0]);

    // console.log("Orçamento Atual: ", localStorage.getItem("currentBudget"));

    // console.log("\nIDs de orçamento recuperados: ", budgetsArray);
    console.log("\nIDs de orçamento recuperados no Storage: ", JSON.parse(localStorage.getItem("budgetsArray")));
}

async function fillContractData(budgetId) {

    console.log("\n\nFill Contract Data: ");

    fetch(`http://localhost:8080/budget/${budgetId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })

    .then(response => {
        if (!response.ok) {
            return response.json().then(err => {
                throw new Error(err.message);
            });
        }
        return response.json();
    })

    .then((data) => {
    
        console.log("Orçamento encontrado: ", data);

        console.log("Orçamento encontrado: ", data.client);

        localStorage.setItem("contractData", JSON.stringify(data));

        clientName.innerHTML = `Cliente: ${data.client}`;
        contractNumber.innerHTML = `Número do Contrato: `;
        eventDay.innerHTML = `Data do envento: ${data.date}`;
    })

    .catch((error) => {
        console.error("Erro: ", error);
    }); 
}

async function loadContractPage() {

    getClients();
    getBudgets();

    let budgetArray = JSON.parse(localStorage.getItem("budgetsArray"));
    localStorage.setItem("currentContractIndex", 0);

    fillContractData(budgetArray[0]);
}

window.addEventListener("load", (event) =>{

    loadContractPage();
});

prevContract.addEventListener("click", (event) =>{

    // console.log("\nIndex Anterior: ", localStorage.getItem("currentContractIndex"));
    let index = parseInt(localStorage.getItem("currentContractIndex")) - 1;
    // console.log("\nIndex: ", index);

    let budgetArray = JSON.parse(localStorage.getItem("budgetsArray"));
    console.log(JSON.parse(localStorage.getItem("budgetsArray")));

    if (index > -1 && budgetArray[index] != null) {
        
        fillContractData(budgetArray[index]);
        localStorage.setItem("currentBudget", budgetArray[index]);

        console.log("Orçamento Atual: ", localStorage.getItem("currentBudget"));

        localStorage.setItem("currentContractIndex", index);
    }
});

nextContract.addEventListener("click", (event) =>{

    console.log("\nIndex Anterior: ", localStorage.getItem("currentContractIndex"));
    let index = parseInt(localStorage.getItem("currentContractIndex")) + 1;
    console.log("\nIndex: ", index);

    let budgetArray = JSON.parse(localStorage.getItem("budgetsArray"));
    console.log(JSON.parse(localStorage.getItem("budgetsArray")));
    console.log(budgetArray[index]);

    if (budgetArray[index] != null) {
        
        console.log("\nNEXT")
        fillContractData(budgetArray[index]);
        localStorage.setItem("currentBudget", budgetArray[index]);

        console.log("Orçamento Atual: ", localStorage.getItem("currentBudget"));

        localStorage.setItem("currentContractIndex", index);
    }
});