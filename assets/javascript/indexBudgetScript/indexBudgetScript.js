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
