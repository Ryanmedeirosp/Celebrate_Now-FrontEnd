document.addEventListener("DOMContentLoaded", () => {
    fetch(`http://localhost:8080/supplier/1`, {
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
        console.log(data);

        data.forEach((service) => {
            
        })
    })
    .catch((error) => {
        console.error("Erro ao buscar serviços:", error);
        alert(error.message || "Erro ao buscar orçamentos.");
    });
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
