document.addEventListener("DOMContentLoaded", () => {

    const corpo = document.querySelector("main");
    console.log(localStorage.getItem("ceremonialistEmail"));
    
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

        let editFade = document.createElement("div");
        editFade.id = "editFade";
        editFade.className = "hideTwo";

        let editModal = document.createElement("div");
        editModal.id = "editModal";
        editModal.className = "hideTwo";

        let editModalHeaderDiv = document.createElement("div");
        editModalHeaderDiv.id = "editModalHeaderDiv";
        let editTitleNewService = document.createElement("h2");
        editTitleNewService.id = "editTitleNewService";
        editTitleNewService.textContent = "Editar serviço";

        let editModalBodyDiv = document.createElement("div");
        editModalBodyDiv.id = "editModalBodyDiv";

        let editTitleImageDiv = document.createElement("div");
        editTitleImageDiv.id = "editTitleImageDiv";
        let editTitleDiv = document.createElement("div");
        editTitleDiv.id = "editTitleDiv";
        let editTitleInput = document.createElement("input");
        editTitleInput.className = "inputInformation";
        editTitleInput.id = "editTitleInput";
        editTitleInput.placeholder = "Digite o nome do serviço";

        let editEmailInput = document.createElement("input");
        editEmailInput.className = "inputInformation";
        editEmailInput.id = "emailInput";
        editEmailInput.placeholder = "Digite o email";

        let editCnpjInput = document.createElement("input");
        editCnpjInput.className = "inputInformation";
        editCnpjInput.id = "editCnpjInput";
        editCnpjInput.placeholder = "Digite o CNPJ";

        let editPhoneInput = document.createElement("input");
        editPhoneInput.className = "inputInformation";
        editPhoneInput.id = "editPhoneInput";
        editPhoneInput.placeholder = "Digite o telefone";

        let editCepInput = document.createElement("input");
        editCepInput.className = "inputInformation";
        editCepInput.id = "editCepInput";
        editCepInput.placeholder = "Digite o CEP";

        let editHouseNumberInput = document.createElement("input");
        editHouseNumberInput.className = "inputInformation";
        editHouseNumberInput.id = "editHouseNumberInput";
        editHouseNumberInput.placeholder = "Digite o número da casa";

        let editTypeServiceInput = document.createElement("input");
        editTypeServiceInput.className = "inputInformation";
        editTypeServiceInput.id = "editTypeServiceInput";
        editTypeServiceInput.placeholder = "Digite o tipo de serviço";

        let editImageDiv = document.createElement("div");
        editImageDiv.id = "editImageDiv";
        let editLoadImageButtonDiv = document.createElement("input");
        editLoadImageButtonDiv.id = "filesTwo";
        editLoadImageButtonDiv.type = "file";

        let editDescriptionDiv = document.createElement("div");
        editDescriptionDiv.id = "editDescriptionDiv";
        let editDescriptionArea = document.createElement("textarea");
        editDescriptionArea.id = "editDescriptionArea";
        editDescriptionArea.placeholder = "Insira uma descrição...";
        editDescriptionArea.maxLength = 150;

        let editButtonConfirmNewServiceDiv = document.createElement("div");
        editButtonConfirmNewServiceDiv.id = "editButtonConfirmNewServiceDiv";
        let editButtonConfirmNewService = document.createElement("button");
        editButtonConfirmNewService.id = "editButtonConfirmNewService";
        editButtonConfirmNewService.textContent = "Editar serviço";

        const editToggleModal = () => {
            // Apenas alterna a visibilidade do modal e fade
            [editModal, editFade].forEach((el) => el.classList.toggle("hideTwo"));
        };

        imageEditIndividualServiceInRightSide.addEventListener("click", (event) => {
            editToggleModal();
        });

        editFade.addEventListener("click", () => editToggleModal());

        const resetEditModalContent = () => {
            // Limpar campos de entrada de texto
            editTitleInput.value = '';
            editEmailInput.value = '';
            editCnpjInput.value = '';
            editPhoneInput.value = '';
            editCepInput.value = '';
            editHouseNumberInput.value = '';
            editTypeServiceInput.value = '';
            editDescriptionArea.value = '';
            // Limpar a imagem carregada (se houver uma imagem carregada)
            editLoadImageButtonDiv.value = '';
        };

        editButtonConfirmNewService.addEventListener("click", (event) => {
            fetch("http://localhost:8080/supplier/" + service.id, {

                method: "PUT",
                body: JSON.stringify({
                    "name": `${editTitleInput.value}`,
                    "email": `${editEmailInput.value}`,
                    "cnpj": `${editCnpjInput.value}`,
                    "phone": `${editPhoneInput.value}`,
                    "cep": `${editCepInput.value}`,
                    "serviceType": `${editTypeServiceInput.value}`,
                    "houseNumber": `${editHouseNumberInput.value}`,
                    "description": `${editDescriptionArea.value}`,
                    "ceremonialistEmail": `${localStorage.getItem("ceremonialistEmail")}`
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then(response =>{
                if (!response.ok) {
                    return response.json().then(err => {
                        throw new Error(err.message);
                    });
                }
                return response.json();
            })
            .then((data) =>{
                
            })
            .catch((error) =>{
            });
            editToggleModal();
            resetEditModalContent();
        });

        editModalHeaderDiv.appendChild(editTitleNewService);
        editModalHeaderDiv.appendChild(editTitleDiv);
        editModal.appendChild(editModalHeaderDiv);
        editTitleDiv.appendChild(editTitleInput);
        editTitleDiv.appendChild(editTypeServiceInput);
        editTitleDiv.appendChild(editEmailInput);
        editTitleDiv.appendChild(editCnpjInput);
        editTitleDiv.appendChild(editPhoneInput);
        editTitleDiv.appendChild(editCepInput);
        editTitleDiv.appendChild(editHouseNumberInput);
        editImageDiv.appendChild(editLoadImageButtonDiv);
        editTitleImageDiv.appendChild(editImageDiv);
        editModalBodyDiv.appendChild(editTitleImageDiv);
        editModalBodyDiv.appendChild(editDescriptionDiv);
        editDescriptionDiv.appendChild(editDescriptionArea);
        editModal.appendChild(editModalBodyDiv);
        editButtonConfirmNewServiceDiv.appendChild(editButtonConfirmNewService);
        editModal.appendChild(editButtonConfirmNewServiceDiv);
        corpo.appendChild(editFade);
        corpo.appendChild(editModal);

        knowMoreIndividualServiceInRightSide.addEventListener("click", (event) => {

            let showFade = document.createElement("div");
            showFade.id = "showFade";
            showFade.className = "hideThree";

            let showModal = document.createElement("div");
            showModal.id = "showModal";
            showModal.className = "hideThree";

            const showToggleModal = () => {
                // Apenas alterna a visibilidade do modal e fade
                [showModal, showFade].forEach((el) => el.classList.toggle("hideThree"));
            };

            showToggleModal();

            let showTitleDiv = document.createElement("div");
            showTitleDiv.id = "showTitleDiv";
            let showTitleService = document.createElement("h2");
            showTitleService.id = "showTitleService";
            showTitleService.textContent = service.name;

            let showImageAndDescriptionDiv = document.createElement("div");
            showImageAndDescriptionDiv.id = "showImageAndDescriptionDiv";
            let showImage = document.createElement("img");
            showImage.id = "showImage";
            showImage.src = "assets/images/naoSei.jfif";
            let showDescriptionDiv = document.createElement("div");
            showDescriptionDiv.id = "showDescriptionDiv";
            let showDescription = document.createElement("p");
            showDescription.id = "showDescription";
            showDescription.textContent = service.description;

            let showInformationsDiv = document.createElement("div");
            showInformationsDiv.id = "showInformationsDiv";

            let showInformationsSectionOneDiv = document.createElement("div");
            showInformationsSectionOneDiv.id = "showInformationsSectionOneDiv";
            let showInformationsSectionTwoDiv = document.createElement("div");
            showInformationsSectionTwoDiv.id = "showInformationsSectionTwoDiv";
            
            let showTypeOfService = document.createElement("h4");
            showTypeOfService.id = "showTypeOfService";
            showTypeOfService.className = "informationAboutService";
            showTypeOfService.textContent = "Tipo de serviço:" + " " + service.serviceType;

            let showEmail = document.createElement("h4");
            showEmail.id = "showEmail";
            showEmail.className = "informationAboutService";
            showEmail.textContent = "Email contato:" + " " + service.email;

            let showEmailCerimonialist = document.createElement("h4");
            showEmailCerimonialist.id = "showEmailCerimonialist";
            showEmailCerimonialist.className = "informationAboutService";
            showEmailCerimonialist.textContent = "Email do cerimonialista:" + " " + "emailvalidodois@gmail.com";

            let showCNPJ = document.createElement("h4");
            showCNPJ.id = "showCNPJ";
            showCNPJ.className = "informationAboutService";
            showCNPJ.textContent = "Número do CNPJ:" + " " + service.cnpj;

            let showPhone = document.createElement("h4");
            showPhone.id = "showPhone";
            showPhone.className = "informationAboutService";
            showPhone.textContent = "Número do contato:" + " " + service.phone;

            let showStreet = document.createElement("h4");
            showStreet.id = "showCEP";
            showStreet.className = "informationAboutService";
            showStreet.textContent = "Rua:" + " " + service.street;

            let showNumberHouse = document.createElement("h4");
            showNumberHouse.id = "showNumberHouse";
            showNumberHouse.className = "informationAboutService";
            showNumberHouse.textContent = "Número da casa:" + " " + service.number;

            showModal.appendChild(showTitleDiv);
            showTitleDiv.appendChild(showTitleService);

            showModal.appendChild(showImageAndDescriptionDiv);
            showImageAndDescriptionDiv.appendChild(showImage);
            showImageAndDescriptionDiv.appendChild(showDescriptionDiv);
            showDescriptionDiv.appendChild(showDescription);

            showModal.appendChild(showInformationsDiv);
            showInformationsSectionOneDiv.appendChild(showTypeOfService);
            showInformationsSectionOneDiv.appendChild(showCNPJ);
            showInformationsSectionOneDiv.appendChild(showStreet);
            showInformationsSectionOneDiv.appendChild(showNumberHouse);
            showInformationsSectionTwoDiv.appendChild(showEmail);
            showInformationsSectionTwoDiv.appendChild(showPhone);
            showInformationsDiv.appendChild(showInformationsSectionOneDiv);
            showInformationsDiv.appendChild(showInformationsSectionTwoDiv);

            corpo.appendChild(showFade);
            corpo.appendChild(showModal);
    
            showFade.addEventListener("click", () => showToggleModal());
                
            });
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