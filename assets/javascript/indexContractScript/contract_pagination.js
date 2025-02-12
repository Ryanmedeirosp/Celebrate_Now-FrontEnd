//Data Fields Client
const clientName = document.getElementById("client-name");
const contractNumber = document.getElementById("contract-number");
const eventDay = document.getElementById("event-day");

//Buttons
const prevContract = document.querySelector("#prev-page");
const nextContract = document.querySelector("#next-page");

//Functions

function formatDate(date) {
    
    let year = date.substring(0, 4);
    let month = date.substring(5, 7);
    let day = date.substring(8, 10);

    let newDate = `${day + "/" + month + "/" + year}`;

    return newDate;
}

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


    let clientsArray = JSON.parse(localStorage.getItem("clientsArray")) || [];
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
            console.log(data)
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
        // console.log("Email encontrado: ", data.clientEmail);

        localStorage.setItem("contractData", JSON.stringify(data));
        localStorage.setItem("actualClientEmail", data.clientEmail);
        localStorage.setItem("actualClientName", data.client);
        localStorage.setItem("actualSupplierName", data.supplier);

        console.log("\n\n\nData Para envio de Email:")
        console.log(localStorage.getItem("actualClientEmail"));
        console.log(localStorage.getItem("actualClientName"));
        console.log(localStorage.getItem("actualSupplierName"));

        const budgetList = document.getElementById("budget-table");
        const totalAmount = document.getElementById("total-amount");

        clientName.innerHTML = `Cliente: ${data.client}`;
        eventDay.innerHTML = `Data do envento: ${formatDate(data.date)}`;

        budgetList.innerHTML = "";
        totalAmount.innerHTML = `Total: R$  ${data.totalAmount}`;
        data.items.forEach((item, index) => {
            const tr = document.createElement("tr");

            tr.innerHTML = `
            <td>${index + 1}.</td>
            <td>${item.title}</td>
            <td>${item.description}</td>
            <td>${item.price.toFixed(2)}</td>
        `;
            budgetList.appendChild(tr);
        });
        
    })
    .catch((error) => {
        console.error("Erro: ", error);
    }); 
}
// Função para exibir o indicador de carregamento
const showLoading = () => {
    const loadingMessage = document.createElement("div");
    loadingMessage.textContent = "Carregando contratos...";
    loadingMessage.style.position = "fixed";
    loadingMessage.style.top = "50%";
    loadingMessage.style.left = "50%";
    loadingMessage.style.transform = "translate(-50%, -50%)";
    loadingMessage.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    loadingMessage.style.color = "white";
    loadingMessage.style.padding = "20px";
    loadingMessage.style.borderRadius = "10px";
    loadingMessage.style.zIndex = "1000";
    document.body.appendChild(loadingMessage);
    return loadingMessage;
};
// Função para remover o indicador de carregamento
const hideLoading = (loadingMessage) => {
    document.body.removeChild(loadingMessage);
};
// Função principal para carregar a página de contratos
async function loadContractPage() {
    const loadingMessage = showLoading(); // Exibe o indicador de carregamento
    // Temporizador de 3 segundos
    setTimeout(async () => {
        try {
            localStorage.setItem("actualClientEmail", "");

            await getClients(); // Aguarda a conclusão de getClients
            await getBudgets(); // Aguarda a conclusão de getBudgets

            let budgetArray = JSON.parse(localStorage.getItem("budgetsArray"));
            localStorage.setItem("currentContractIndex", 0);

            if (budgetArray && budgetArray.length > 0) {
                await fillContractData(budgetArray[0]); // Aguarda a conclusão de fillContractData
            } else {
                alert("Nenhum orçamento encontrado.");
            }
        } catch (error) {
            console.error("Erro ao carregar a página de contratos:", error);
            alert("Erro ao carregar os dados. Tente novamente.");
        } finally {
            hideLoading(loadingMessage); // Remove o indicador de carregamento
        }
    }, 500); // Temporizador de 3 segundos
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