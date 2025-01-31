document.addEventListener("DOMContentLoaded", () => {

    const corpo = document.querySelector("main");
    
    fetch(`http://localhost:8080/supplier/${localStorage.getItem("ceremonialistId")}`, {
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
           
            let individualServiceDiv = document.createElement("div");
            individualServiceDiv.className = "individualServiceDiv";

            let leftSideIndividualServiceDiv = document.createElement("div");
            leftSideIndividualServiceDiv.className = "leftSideIndividualServiceDiv";
            let rightSideIndividualServiceDiv = document.createElement("div");
            rightSideIndividualServiceDiv.className = "rightSideIndividualServiceDiv";

            let titleIndividualServiceInLeftSideDiv = document.createElement("div");
            titleIndividualServiceInLeftSideDiv.className = "titleIndividualServiceInLeftSideDiv";
            let titleIndividualServiceInLeftSide = document.createElement("h2");
            titleIndividualServiceInLeftSide.className = "titleIndividualServiceInLeftSide";
            titleIndividualServiceInLeftSide.textContent = service.name;

            let imageIndividualServiceInLeftSideDiv = document.createElement("div");
            imageIndividualServiceInLeftSideDiv.className = "imageIndividualServiceInLeftSideDiv";
            let imageIndividualServiceInLeftSide = document.createElement("img");
            imageIndividualServiceInLeftSide.className = "imageIndividualServiceInLeftSide";
            
            // const leitor = new FileReader();
            // leitor.readAsDataURL(loadImageButtonDiv.files[0]);
            // leitor.addEventListener("load", (event) => {
            //     imageIndividualServiceInLeftSide.src = event.target.result;
            // });

            let buttonHireIndividualServiceInLeftSideDiv = document.createElement("div");
            buttonHireIndividualServiceInLeftSideDiv.className = "buttonHireIndividualServiceInLeftSideDiv";
            let buttonHireIndividualServiceInLeftSide = document.createElement("button");
            buttonHireIndividualServiceInLeftSide.id = "buttonHireIndividualServiceInLeftSide";
            buttonHireIndividualServiceInLeftSide.textContent = "Contratar";

            let imageEditIndividualServiceInRightSideDiv = document.createElement("div");
            imageEditIndividualServiceInRightSideDiv.id = "imageEditIndividualServiceInRightSideDiv";
            let imageEditIndividualServiceInRightSide = document.createElement("img");
            imageEditIndividualServiceInRightSide.id = "imageEditIndividualServiceInRightSide";
            imageEditIndividualServiceInRightSide.src = "../assets/images/botao-editar.png";

            let imageRemoveIndividualServiceInRightSide = document.createElement("img");
            imageRemoveIndividualServiceInRightSide.id = "imageRemoveIndividualServiceInRightSide";
            imageRemoveIndividualServiceInRightSide.src = "../assets/images/remover.png";

            let textIndividualServiceInRightSideDiv = document.createElement("div");
            textIndividualServiceInRightSideDiv.className = "textIndividualServiceInRightSideDiv";
            let textIndividualServiceInRightSide = document.createElement("p");
            textIndividualServiceInRightSide.id = "texts";
            textIndividualServiceInRightSide.className = "textIndividualServiceInRightSide";
            textIndividualServiceInRightSide.textContent = service.description;

            let knowMoreIndividualServiceInRightSideDiv = document.createElement("div");
            knowMoreIndividualServiceInRightSideDiv.className = "knowMoreIndividualServiceInRightSideDiv";
            let knowMoreIndividualServiceInRightSide = document.createElement("h3");
            knowMoreIndividualServiceInRightSide.className = "knowMoreIndividualServiceInRightSide";
            knowMoreIndividualServiceInRightSide.textContent = "Ler mais";

            divAllServices.appendChild(individualServiceDiv);
            individualServiceDiv.appendChild(leftSideIndividualServiceDiv);
            individualServiceDiv.appendChild(rightSideIndividualServiceDiv);
            leftSideIndividualServiceDiv.appendChild(titleIndividualServiceInLeftSideDiv);
            titleIndividualServiceInLeftSideDiv.appendChild(titleIndividualServiceInLeftSide);
            leftSideIndividualServiceDiv.appendChild(imageIndividualServiceInLeftSideDiv);
            imageIndividualServiceInLeftSideDiv.appendChild(imageIndividualServiceInLeftSide);
            leftSideIndividualServiceDiv.appendChild(buttonHireIndividualServiceInLeftSideDiv);
            buttonHireIndividualServiceInLeftSideDiv.appendChild(buttonHireIndividualServiceInLeftSide);
            rightSideIndividualServiceDiv.appendChild(imageEditIndividualServiceInRightSideDiv);
            imageEditIndividualServiceInRightSideDiv.appendChild(imageEditIndividualServiceInRightSide);

            imageEditIndividualServiceInRightSideDiv.appendChild(imageRemoveIndividualServiceInRightSide);

            rightSideIndividualServiceDiv.appendChild(textIndividualServiceInRightSideDiv);
            textIndividualServiceInRightSideDiv.appendChild(textIndividualServiceInRightSide);
            rightSideIndividualServiceDiv.appendChild(knowMoreIndividualServiceInRightSideDiv);
            knowMoreIndividualServiceInRightSideDiv.appendChild(knowMoreIndividualServiceInRightSide);
            corpo.appendChild(divAllContentService);
        })
    })
    .catch((error) => {
        console.error("Erro ao buscar serviços:", error);
        alert(error.message || "Erro ao buscar orçamentos.");
    });
});

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

    function populateCustomerList(customers) {
        sidebarList.innerHTML = ""; // Limpa o conteúdo existente
        customers.forEach((customer) => {
            // Cria o contêiner do cliente
           
            console.log(populateCustomerList)
        });
    }