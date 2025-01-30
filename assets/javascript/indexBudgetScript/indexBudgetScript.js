// document.addEventListener("DOMContentLoaded", () => {
//     // Criar orçamento
//     createBudgetForm.addEventListener("click", (event) => {
//         event.preventDefault();

//         const clientEmail = document.getElementById("clientEmail").value.trim();
//         const supplierCnpj = document.getElementById("supplierCnpj").value.trim();

//         if (!clientEmail || !supplierCnpj) {
//             alert("Todos os campos são obrigatórios.");
//             return;
//         }

//         const requestData = {
//             clientEmail: clientEmail,
//             supplierCnpj: supplierCnpj,
//         };

//         fetch("http://localhost:8080/budget", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(requestData),
//         })
//         .then(response => {
//             if (!response.ok) {
//                 // Captura os erros retornados pelo backend
//                 return response.json().then(err => {
//                     throw new Error(err.message);
//                 });
//             }
//             return response.json();
//         })
//             .then((data) => {
//                 alert(`Orçamento criado com sucesso! ID: ${data}`);
//             })
//             .catch((error) => {
//                 console.error("Erro ao criar orçamento:", error);
//                 alert(error.message || "Erro ao criar orçamento.");
//             });
//     });
// });

const sidebarList = document.querySelector("#sidebar-right #list-customers");
fetch(`http://localhost:8080/client/${localStorage.getItem("ceremonialistId")}`, {
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
            let clienteSidebarDiv = document.createElement("div");
            clienteSidebarDiv.className = "customer";
    
            // Foto do cliente
            let photoCustomerDiv = document.createElement("div");
            photoCustomerDiv.className = "photoCustomerDiv";
            let photoCustomer = document.createElement("img");
            photoCustomer.className = "photoCustomer";
            photoCustomer.src = "../assets/images/user-icon-removebg-preview.svg";
    
            // Informações do cliente
            let informationsCustomerDiv = document.createElement("div");
            informationsCustomerDiv.className = "informationsCustomerDiv";
    
            let nameInformationCustomer = document.createElement("p");
            nameInformationCustomer.className = "nameInformationCustomer";
            nameInformationCustomer.textContent = `Nome: ${customer.name}`;
    
            let contractNumberInformationCustomer = document.createElement("p");
            contractNumberInformationCustomer.className = "contractNumberInformationCustomer";
            contractNumberInformationCustomer.textContent = `Email: ${customer.email}`;
    
            let eventDateInformationCustomer = document.createElement("p");
            eventDateInformationCustomer.className = "eventDateInformationCustomer";
            eventDateInformationCustomer.textContent = `Telefone: ${customer.phone || "N/A"}`; // Exemplo adicional
    
            // Agrupa as informações e foto
            informationsCustomerDiv.appendChild(nameInformationCustomer);
            informationsCustomerDiv.appendChild(contractNumberInformationCustomer);
            informationsCustomerDiv.appendChild(eventDateInformationCustomer);
    
            photoCustomerDiv.appendChild(photoCustomer);
    
            // Agrupa tudo no contêiner principal
            clienteSidebarDiv.appendChild(photoCustomerDiv);
            clienteSidebarDiv.appendChild(informationsCustomerDiv);
    
            // Adiciona o cliente à lista da sidebar
            sidebarList.appendChild(clienteSidebarDiv);
        });
    })
    .catch((error) => {
        console.error("Erro ao carregar os clientes:", error);
        alert("Erro ao carregar os clientes.");
    });

    