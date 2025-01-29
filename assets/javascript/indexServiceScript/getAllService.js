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
        console.log( data);
    })
    .catch((error) => {
        console.error("Erro ao buscar orçamentos:", error);
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

    function populateCustomerList(customers) {
        sidebarList.innerHTML = ""; // Limpa o conteúdo existente
        customers.forEach((customer) => {
            // Cria o contêiner do cliente
           
            console.log(populateCustomerList)
        });
    }