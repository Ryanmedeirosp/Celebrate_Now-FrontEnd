async function getClients() {

    fetch(`https://deploy-back-mi31.onrender.com/client/${localStorage.getItem("ceremonialistId")}`, {
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
        
        localStorage.setItem("clientsArray", JSON.stringify(clientsArray));
        console.log("IDs de clientes armazenados: ", clientsArray);
    })

    .catch((error) => {
        console.error("Erro ao buscar clientes:", error);
    });
};

async function getBudgets() {
    // Resetar os dados antes de buscar novos
    localStorage.removeItem("budgetsArray");
    localStorage.removeItem("currentBudget");

    let clientsArray = JSON.parse(localStorage.getItem("clientsArray")) || [];
    let budgetsArray = [];

    // Criar uma lista de Promises para buscar os orçamentos
    let promises = clientsArray.map(clientId => {
        return fetch(`https://deploy-back-mi31.onrender.com/budget/${clientId}/${localStorage.getItem("ceremonialistId")}`, {
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
                    }
                }
            }
        })
        .catch(error => {
            console.error("Erro ao buscar orçamentos:", error);
        });
    });

    // Esperar todas as requisições serem concluídas antes de salvar no localStorage
    await Promise.all(promises);

    // Ordenar e salvar no localStorage
    budgetsArray.sort();
    localStorage.setItem("budgetsArray", JSON.stringify(budgetsArray));

    // Definir o primeiro orçamento como o atual (se houver orçamentos disponíveis)
    if (budgetsArray.length > 0) {
        localStorage.setItem("currentBudget", budgetsArray[0]);
        console.log("\nIDs de orçamento recuperados no Storage:", budgetsArray);
    }
}

async function loadData() {

    getClients();
    getBudgets();
}

window.addEventListener("load", (event) =>{

    loadData();
});