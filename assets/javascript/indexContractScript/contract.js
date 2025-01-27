const editButton = document.querySelector(".button-edit");
const textContractField = document.querySelector(".contract-text")

const buttonsEditDiv = document.querySelector(".contract-edit-active");
const confirmEditButton = document.querySelector(".confirm-edit");
const cancelEditButton = document.querySelector(".cancel-edit");

editButton.addEventListener("click", (event) =>{

    buttonsEditDiv.style.display = "grid";
    textContractField.readOnly = false;
    textContractField.style.border = "solid #000 1px";
});

cancelEditButton.addEventListener("click", (event)=>{

    var textContent = textContractField.textContent;

    buttonsEditDiv.style.display = "none";

    textContractField.readOnly = true;
    textContractField.style.border = "none";
    textContractField.textContent = textContent;
});

confirmEditButton.addEventListener("click", (event)=>{

    var textContent = textContractField.textContent;

    if(textContractField.textContent != textContent){

        textContractField.textContent = textContractField.textContent;
    }

    buttonsEditDiv.style.display = "none";

    textContractField.readOnly = true;
    textContractField.style.border = "none";
});

const sidebarList = document.querySelector("#sidebar-right #list-customers");
fetch(`http://localhost:8080/client/1`, {
    method: "GET",
    headers: {
        "Accept": "application/json"
    }
})
    .then((response) => {
        if (!response.ok) {
            return response.json().then((err) => {
                throw new Error(err.message);
            });
        }
        return response.json();
    })
    .then((data) => {
        // Limpa o conteúdo existente da sidebar
        sidebarList.innerHTML = "";

        // Verifica se os dados são um array ou um único objeto
        const customers = Array.isArray(data) ? data : [data];

        // Popula os dados na sidebar
        customers.forEach((customer) => {
            const sidebarCustomerDiv = document.createElement("span");
            sidebarCustomerDiv.id = "sidebar-dados";
            sidebarCustomerDiv.textContent = customer.name; // Apenas o nome do cliente
            sidebarList.appendChild(sidebarCustomerDiv);
        });
    })
    .catch((error) => {
        console.error("Erro ao carregar os clientes:", error);
        alert("Erro ao carregar os clientes.");
    });
