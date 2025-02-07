async function getClients() {

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
            // console.log("Orçamento: ", data);
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

    console.log("\nIDs de orçamento recuperados no Storage: ", JSON.parse(localStorage.getItem("budgetsArray")));
}

window.addEventListener("load", (event) =>{

    getClients();
    getBudgets();
});