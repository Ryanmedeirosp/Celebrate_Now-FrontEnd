const clients = document.querySelector("#clients");
const list = document.querySelector("#list");
const sidebarLines = document.getElementsByClassName("sidebar_line_item");
const corpo = document.querySelector("main");
const list_customer = document.querySelector("#list-customers");
const btnSeeAllCustomers = document.querySelector("#btn-see-all-customers")

function create_clients() {
    removePreviousContent(); // Remove o conteúdo anterior

    let divClients = document.createElement("div");
    divClients.id = "divClients";



    // Contêiner superior com botão de adicionar cliente
    let divSuperior = document.createElement("div");
    divSuperior.id = "divSuperior-clients";

    let divClientsImg = document.createElement("div");
    divClientsImg.id = "divClientsImg";
    let imgCustomer = document.createElement("img");
    imgCustomer.id = "imgCustomer";
    imgCustomer.src = "../assets/images/users-group.svg";
    divClientsImg.appendChild(imgCustomer);

    let clientstxt = document.createElement("h3");
    clientstxt.textContent = "Lista de Clientes";
    divClientsImg.appendChild(clientstxt);
    divSuperior.appendChild(divClientsImg);

    let btnAddClients = document.createElement("button");
    btnAddClients.textContent = "Adicionar Cliente";
    btnAddClients.id = "btnAddClients";

    btnAddClients.addEventListener("click", (event) =>{

        modal.style.display = "flex";
    });

    divSuperior.appendChild(btnAddClients);

    divClients.appendChild(divSuperior);
    

    // Contêiner da lista de clientes
    let divListaClients = document.createElement("div");
    divListaClients.id = "divListaClients";
    divClients.appendChild(divListaClients);
    
    // Modal para adicionar cliente
    let modal = document.createElement("div");
    modal.id = "modal-cliente";
    modal.className = "modal hidden";
    // modal.style.display = "none"


    let modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    let modalHeader = document.createElement("h2");
    modalHeader.textContent = "Adicionar Cliente";
    modalContent.appendChild(modalHeader);

    let inputNome = document.createElement("input");
    inputNome.type = "text";
    inputNome.placeholder = "Nome do Cliente";
    inputNome.id = "inputNome";
    modalContent.appendChild(inputNome);

    let inputContrato = document.createElement("input");
    inputContrato.type = "text";
    inputContrato.placeholder = "Número do Contrato";
    inputContrato.id = "inputContrato";
    modalContent.appendChild(inputContrato);

    let datatxt = document.createElement("p")
    datatxt.textContent = "Data do casamento:";
    modalContent.appendChild(datatxt);

    let inputEvento = document.createElement("input");
    inputEvento.type = "date";
    inputEvento.id = "inputEvento";
    modalContent.appendChild(inputEvento);

    let btnSalvar = document.createElement("button");
    btnSalvar.textContent = "Salvar";
    btnSalvar.id = "btnSalvar";
    modalContent.appendChild(btnSalvar);

    let btnCancelar = document.createElement("button");
    btnCancelar.textContent = "Cancelar";
    btnCancelar.id = "btnCancelar";

    btnCancelar.addEventListener("click", (event) =>{

        modal.style.display = "none";
    })

    modalContent.appendChild(btnCancelar);

    modal.appendChild(modalContent);
    divClients.appendChild(modal);

    // Exibir modal ao clicar no botão de adicionar cliente
    btnAddClients.addEventListener("click", () => {
        modal.classList.remove("hidden");
    });

    // Esconder modal ao clicar no botão de cancelar
    btnCancelar.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    // Adicionar cliente ao clicar em "Salvar"
 
    btnSalvar.addEventListener("click", () => {
        let clienteNome = inputNome.value.trim();
        let clienteContrato = inputContrato.value.trim();
        let clienteEvento = inputEvento.value;
    
        if (clienteNome && clienteContrato && clienteEvento) {
            adicionarCliente(clienteNome, clienteContrato, clienteEvento); // Adiciona na lista principal e na sidebar right
            modal.classList.add("hidden"); // Fecha o modal
            inputNome.value = ""; // Limpa os campos
            inputContrato.value = "";
            inputEvento.value = "";
        } else {
            alert("Por favor, preencha todos os campos!");
        }
        modal.style.display = "none"; // Esconde o modal
    });

    // Função para adicionar cliente à lista
  


    function adicionarCliente(nome, contrato, evento) {
        // Validação da data
        const dataEvento = new Date(evento);
        const dataAtual = new Date();
    
        if (dataEvento < dataAtual) {
            alert("A data do evento não pode ser anterior à data atual!");
            return; // Interrompe a execução se a data for inválida
        }
    
        // Formatação da data para o padrão brasileiro (dd/MM/aaaa)
        const dia = String(dataEvento.getDate()).padStart(2, '0');
        const mes = String(dataEvento.getMonth() + 1).padStart(2, '0'); // Mês começa do 0
        const ano = dataEvento.getFullYear();
        const dataFormatada = `${dia}/${mes}/${ano}`;
    
        // Adicionar cliente na lista principal
        let clienteDiv = document.createElement("div");
        clienteDiv.className = "clienteDiv";
    
        let clienteInfo = document.createElement("div");
        clienteInfo.className = "clienteInfo";
    
        let nomeCliente = document.createElement("p");
        nomeCliente.className = "nomeCliente";
        nomeCliente.textContent = `Nome: ${nome}`;
    
        let contratoCliente = document.createElement("p");
        contratoCliente.className = "contratoCliente";
        contratoCliente.textContent = `Contrato: ${contrato}`;
    
        let eventoCliente = document.createElement("p");
        eventoCliente.className = "eventoCliente";
        eventoCliente.textContent = `Evento: ${dataFormatada}`; // Usando a data formatada
    
        clienteInfo.appendChild(nomeCliente);
        clienteInfo.appendChild(contratoCliente);
        clienteInfo.appendChild(eventoCliente);
    
        let removerClienteBtn = document.createElement("button");
        removerClienteBtn.textContent = "Remover";
        removerClienteBtn.className = "btnRemoverCliente";
        removerClienteBtn.addEventListener("click", () => {
            divListaClients.removeChild(clienteDiv);
            // Remover também da sidebar right
            list_customer.removeChild(clienteSidebarDiv);
        });
    
        clienteDiv.appendChild(clienteInfo);
        clienteDiv.appendChild(removerClienteBtn);
    
        divListaClients.appendChild(clienteDiv);
    
        // Adicionar cliente na sidebar right
        let clienteSidebarDiv = document.createElement("div");
        clienteSidebarDiv.className = "customer";
    
        let photoCustomerDiv = document.createElement("div");
        photoCustomerDiv.className = "photoCustomerDiv";
        let photoCustomer = document.createElement("img");
        photoCustomer.className = "photoCustomer";
        photoCustomer.src = "../assets/images/user-icon-removebg-preview.svg";
    
        let informationsCustomerDiv = document.createElement("div");
        informationsCustomerDiv.className = "informationsCustomerDiv";
        let nameInformationCustomer = document.createElement("p");
        nameInformationCustomer.className = "nameInformationCustomer";
        nameInformationCustomer.textContent = nome;
        let contractNumberInformationCustomer = document.createElement("p");
        contractNumberInformationCustomer.className = "contractNumberInformationCustomer";
        contractNumberInformationCustomer.textContent = `Contrato: ${contrato}`;
        let eventDateInformationCustomer = document.createElement("p");
        eventDateInformationCustomer.className = "eventDateInformationCustomer";
        eventDateInformationCustomer.textContent = `Evento: ${dataFormatada}`; // Usando a data formatada
        let divPhotoInformations = document.createElement("div");
        divPhotoInformations.className = "divPhotoInformations";
    
        let chatImageCustomerDiv = document.createElement("div");
        chatImageCustomerDiv.className = "chatImageCustomerDiv";
        let chatImageCustomer = document.createElement("img");
        chatImageCustomer.src = "../assets/images/o-email.png";
        chatImageCustomer.className = "chatImageCustomer";

        chatImageCustomerDiv.appendChild(chatImageCustomer);
        informationsCustomerDiv.appendChild(nameInformationCustomer);
        informationsCustomerDiv.appendChild(contractNumberInformationCustomer);
        informationsCustomerDiv.appendChild(eventDateInformationCustomer);
        photoCustomerDiv.appendChild(photoCustomer);
        divPhotoInformations.appendChild(photoCustomerDiv);
        divPhotoInformations.appendChild(informationsCustomerDiv);
        clienteSidebarDiv.appendChild(divPhotoInformations);
        clienteSidebarDiv.appendChild(chatImageCustomerDiv);
    
        list_customer.appendChild(clienteSidebarDiv);
    }
    corpo.appendChild(divClients);
    currentContent = divClients; // Atualiza o conteúdo atual
}



function create_list() {
    let divList = document.createElement("div");
    divList.id = "divList";
    let h1 = document.createElement("h1");
    h1.textContent = "Conteúdo de Lista"; 
    divList.appendChild(h1);
    corpo.appendChild(divList);
    currentContent = divList; 
}

function create_list_customer() {
    let customer = document.createElement("div");
    customer.id = "customer";
    
    let photoCustomerDiv = document.createElement("div");
    photoCustomerDiv.className = "photoCustomerDiv";
    let photoCustomer = document.createElement("img");
    photoCustomer.className = "photoCustomer";
    photoCustomer.src = "../assets/images/user-icon-removebg-preview.svg";


    let chatImageCustomerDiv = document.createElement("div");
    chatImageCustomerDiv.className = "chatImageCustomerDiv";
    let chatImageCustomer = document.createElement("img");
    chatImageCustomer.className = "chatImageCustomer";
    chatImageCustomer.src = "../assets/images/o-email.png"

    chatImageCustomerDiv.appendChild(chatImageCustomer);
    informationsCustomerDiv.appendChild(nameInformationCustomer);
    informationsCustomerDiv.appendChild(contractNumberInformationCustomer);
    informationsCustomerDiv.appendChild(eventDateInformationCustomer);
    photoCustomerDiv.appendChild(photoCustomer);
    divPhotoInformations.appendChild(photoCustomerDiv);
    divPhotoInformations.appendChild(informationsCustomerDiv);
    customer.appendChild(divPhotoInformations);
    customer.appendChild(chatImageCustomerDiv);
    list_customer.appendChild(customer);
    
}

window.onload = () => {
    create_clients(); 
    create_list_customer();
};