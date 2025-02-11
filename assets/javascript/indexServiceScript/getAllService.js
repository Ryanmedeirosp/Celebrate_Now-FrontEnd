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
        imageIndividualServiceInLeftSide.src = service.imageUrl;

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

        let editTitleInputDiv = document.createElement("div");
        editTitleInputDiv.className = "align";
        editTitleInputDiv.id = "editTitleInputDiv";
        let editTitleInputImg = document.createElement("img");
        editTitleInputImg.id = "editTitleInputImg";
        editTitleInputImg.className = "sizeImgEdit";
        editTitleInputImg.src = "../assets/images/botao-editar.png";

        let editTitleInput = document.createElement("input");
        editTitleInput.className = "inputInformation";
        editTitleInput.id = "editTitleInput";
        editTitleInput.placeholder = service.name;
<<<<<<< HEAD
        editTitleInput.disabled = true;

        editTitleInputImg.addEventListener("click", (event)=>{
            editTitleInput.disabled = false;
        });


        let editEmailInputDiv = document.createElement("div");
        editEmailInputDiv.id = "editEmailInputDiv";
        editEmailInputDiv.className = "align";
        let editEmailInputImg = document.createElement("img");
        editEmailInputImg.id = "editEmailInputImg";
        editEmailInputImg.className = "sizeImgEdit";
        editEmailInputImg.src = "../assets/images/botao-editar.png";
=======
        editTitleInput.value = service.name;
>>>>>>> e54bbc31049f561074466db0e5780fe5f17224e8

        let editEmailInput = document.createElement("input");
        editEmailInput.className = "inputInformation";
        editEmailInput.id = "emailInput";
        editEmailInput.placeholder = service.email;
<<<<<<< HEAD
        editEmailInput.disabled = true;

        editEmailInputImg.addEventListener("click", (event)=>{
            editEmailInput.disabled = false;
        });

        let editCnpjInputDiv = document.createElement("div");
        editCnpjInputDiv.id = "editCnpjInputDiv";
        editCnpjInputDiv.className = "align";
        let editCnpjInputImg = document.createElement("img");
        editCnpjInputImg.id = "editCnpjInputImg";
        editCnpjInputImg.className = "sizeImgEdit";
        editCnpjInputImg.src = "../assets/images/botao-editar.png";
=======
        editEmailInput.value = service.email;
>>>>>>> e54bbc31049f561074466db0e5780fe5f17224e8

        let editCnpjInput = document.createElement("input");
        editCnpjInput.className = "inputInformation";
        editCnpjInput.id = "editCnpjInput";
        editCnpjInput.placeholder = service.cnpj;
<<<<<<< HEAD
        editCnpjInput.disabled = true;

        editCnpjInputImg.addEventListener("click", (event)=>{
            editCnpjInput.disabled = false;
        });

        let editPhoneInputDiv = document.createElement("div");
        editPhoneInputDiv.id = "editPhoneInputDiv";
        editPhoneInputDiv.className = "align";
        let editPhoneInputImg = document.createElement("img");
        editPhoneInputImg.id = "editPhoneInputImg";
        editPhoneInputImg.className = "sizeImgEdit";
        editPhoneInputImg.src = "../assets/images/botao-editar.png";
=======
        editCnpjInput.value = service.cnpj;
>>>>>>> e54bbc31049f561074466db0e5780fe5f17224e8

        let editPhoneInput = document.createElement("input");
        editPhoneInput.className = "inputInformation";
        editPhoneInput.id = "editPhoneInput";
        editPhoneInput.placeholder = service.phone;
<<<<<<< HEAD
        editPhoneInput.disabled = true;

        editPhoneInputImg.addEventListener("click", (event)=>{
            editPhoneInput.disabled = false;
        });

        let editCepInputDiv = document.createElement("div");
        editCepInputDiv.id = "editCepInputDiv";
        editCepInputDiv.className = "align";
        let editCepInputImg = document.createElement("img");
        editCepInputImg.id = "editCepInputImg";
        editCepInputImg.className = "sizeImgEdit";
        editCepInputImg.src = "../assets/images/botao-editar.png";
=======
        editPhoneInput.value = service.phone;
>>>>>>> e54bbc31049f561074466db0e5780fe5f17224e8

        let editCepInput = document.createElement("input");
        editCepInput.className = "inputInformation";
        editCepInput.id = "editCepInput";
        editCepInput.placeholder = service.cep;
<<<<<<< HEAD
        editCepInput.disabled = true;

        editCepInputImg.addEventListener("click", (event)=>{
            editCepInput.disabled = false;
        });

        let editHouseNumberInputDiv = document.createElement("div");
        editHouseNumberInputDiv.id = "editHouseNumberInputDiv";
        editHouseNumberInputDiv.className = "align";
        let editHouseNumberInputImg = document.createElement("img");
        editHouseNumberInputImg.id = "editHouseNumberInputImg";
        editHouseNumberInputImg.className = "sizeImgEdit";
        editHouseNumberInputImg.src = "../assets/images/botao-editar.png";
=======
        editCepInput.value = service.cep;
>>>>>>> e54bbc31049f561074466db0e5780fe5f17224e8

        let editHouseNumberInput = document.createElement("input");
        editHouseNumberInput.className = "inputInformation";
        editHouseNumberInput.id = "editHouseNumberInput";
        editHouseNumberInput.placeholder = service.number;
<<<<<<< HEAD
        editHouseNumberInput.disabled = true;

        editHouseNumberInputImg.addEventListener("click", (event)=>{
            editHouseNumberInput.disabled = false;
        });

        let editTypeServiceInputDiv = document.createElement("div");
        editTypeServiceInputDiv.id = "editTypeServiceInputDiv";
        editTypeServiceInputDiv.className = "align";
        let editTypeServiceInputImg = document.createElement("img");
        editTypeServiceInputImg.id = "editTypeServiceInputImg";
        editTypeServiceInputImg.className = "sizeImgEdit";
        editTypeServiceInputImg.src = "../assets/images/botao-editar.png";
=======
        editHouseNumberInput.value = service.number;
>>>>>>> e54bbc31049f561074466db0e5780fe5f17224e8

        let editTypeServiceInput = document.createElement("input");
        editTypeServiceInput.className = "inputInformation";
        editTypeServiceInput.id = "editTypeServiceInput";
<<<<<<< HEAD
        editTypeServiceInput.placeholder = service.serviceType;
        editTypeServiceInput.disabled = true;

        editTypeServiceInputImg.addEventListener("click", (event)=>{
            editTypeServiceInput.disabled = false;
        });
=======
        editTypeServiceInput.placeholder =service.serviceType;
        editTypeServiceInput.value =service.serviceType;
>>>>>>> e54bbc31049f561074466db0e5780fe5f17224e8

        let editImageDiv = document.createElement("div");
        editImageDiv.id = "editImageDiv";
        let editLoadImageButtonDiv = document.createElement("input");
        editLoadImageButtonDiv.id = "filesTwo";
        editLoadImageButtonDiv.className = "inputInformation";
        editLoadImageButtonDiv.placeholder = service.imageUrl;
        editLoadImageButtonDiv.value = service.imageUrl;

        let editDescriptionDiv = document.createElement("div");
        editDescriptionDiv.id = "editDescriptionDiv";
        editDescriptionDiv.className = "align";
        let editDescriptionImg = document.createElement("img");
        editDescriptionImg.id = "editDescriptionImg";
        editDescriptionImg.className = "sizeImgEdit";
        editDescriptionImg.src = "../assets/images/botao-editar.png";
        let editDescriptionArea = document.createElement("textarea");
        editDescriptionArea.id = "editDescriptionArea";
        editDescriptionArea.placeholder = service.description;
<<<<<<< HEAD
=======
        editDescriptionArea.value = service.description;
>>>>>>> e54bbc31049f561074466db0e5780fe5f17224e8
        editDescriptionArea.maxLength = 150;
        editDescriptionArea.disabled = true;

        editDescriptionImg.addEventListener("click", (event)=>{
            editDescriptionArea.disabled = false;
        });

        
        let alertArea2 = document.createElement("p");
        alertArea2.id = "alert2";

        let editButtonConfirmNewServiceDiv = document.createElement("div");
        editButtonConfirmNewServiceDiv.id = "editButtonConfirmNewServiceDiv";
        let editButtonConfirmNewService = document.createElement("button");
        editButtonConfirmNewService.id = "editButtonConfirmNewService";
        editButtonConfirmNewService.textContent = "Editar serviço";

<<<<<<< HEAD
        const editToggleModal = () => {
            // Apenas alterna a visibilidade do modal e fade
            [editModal, editFade].forEach((el) => el.classList.toggle("hideTwo"));
            resetEditModalContent();
        };

=======
>>>>>>> e54bbc31049f561074466db0e5780fe5f17224e8
        imageEditIndividualServiceInRightSide.addEventListener("click", (event) => {
            editToggleModal();
        });

<<<<<<< HEAD
        editFade.addEventListener("click", () => editToggleModal());

        const resetEditModalContent = () => {
            // Limpar campos de entrada de texto
            editTitleInput.value = '';
            editTitleInput.disabled = true;
            editEmailInput.value = '';
            editEmailInput.disabled = true;
            editCnpjInput.value = '';
            editCnpjInput.disabled = true;
            editPhoneInput.value = '';
            editPhoneInput.disabled = true;
            editCepInput.value = '';
            editCepInput.disabled = true;
            editHouseNumberInput.value = '';
            editHouseNumberInput.disabled = true;
            editTypeServiceInput.value = '';
            editTypeServiceInput.disabled = true;
            editDescriptionArea.value = '';
            editDescriptionArea.disabled = true;
            // Limpar a imagem carregada (se houver uma imagem carregada)
            editLoadImageButtonDiv.value = '';
        };
=======
>>>>>>> e54bbc31049f561074466db0e5780fe5f17224e8

        buttonHireIndividualServiceInLeftSide.addEventListener("click", (e)=>{
            location.href = "../../../indexBudget.html";
        })

        editButtonConfirmNewService.addEventListener("click", (event) => {
<<<<<<< HEAD
            // Cria um objeto para armazenar os dados
            const data = {};
        
            // Função para verificar se o valor do input está vazio e usar o placeholder se necessário
            const getValue = (input, placeholder) => input.value.trim() === "" ? placeholder : input.value;
        
            // Adiciona os campos ao objeto, usando o valor do input ou do placeholder
            data.name = getValue(editTitleInput, editTitleInput.placeholder);
            data.email = getValue(editEmailInput, editEmailInput.placeholder);
            data.cnpj = getValue(editCnpjInput, editCnpjInput.placeholder);
            data.phone = getValue(editPhoneInput, editPhoneInput.placeholder);
            data.cep = getValue(editCepInput, editCepInput.placeholder);
            data.serviceType = getValue(editTypeServiceInput, editTypeServiceInput.placeholder);
            data.houseNumber = getValue(editHouseNumberInput, editHouseNumberInput.placeholder);
            data.description = editDescriptionArea.value.trim() === "" ? service.description : editDescriptionArea.value;
            data.ceremonialistEmail = localStorage.getItem("ceremonialistEmail");
        
            // Faz a requisição PUT
=======


            const showError = (message) => {
                alertArea2.textContent = message;
                alertArea2.style.color = "red";
            };
    
            // Função para exibir mensagem de sucesso
            const showSuccess = (message) => {
                alertArea2.textContent = message;
                alertArea2.style.color = "green";
            };

            if (!editTitleInput.value) {
                return showError("O nome é obrigatório.");
            }
    
            if (!editEmailInput.value || !/^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$/.test(editEmailInput.value)) {
                return showError("Email inválido.");
            }
            if (!editCnpjInput.value || editCnpjInput.value.length !== 14) {
                return showError("Documento inválido. Deve conter 14 caracteres. Somente números.");
            }
            if (!editCepInput.value || !/^\d{8}$/.test(editCepInput.value)) {
                return showError("CEP inválido. Deve conter exatamente 8 dígitos. Somente números.");
            }
            if (!editTypeServiceInput.value) {
                return showError("O serviço é obrigatório.");
            }
            if (!editPhoneInput.value || !/^\+?[1-9][0-9]{1,14}$/.test(editPhoneInput.value)) {
                return showError("Número de telefone inválido.");
            }
            if (!editHouseNumberInput.value || isNaN(editHouseNumberInput.value)) {
                return showError("O número da residência deve ser válido.");
            }
            if (!editLoadImageButtonDiv.value) {
                return showError("A imagem é obrigatória.");
            }
            if (!editDescriptionArea.value) {
                return showError("A descrição é obrigatório.");
            }
            // Objeto com os dados validados
            const requestData = {
                name: editTitleInput.value,
                email: editEmailInput.value,
                cnpj: editCnpjInput.value,
                phone: editPhoneInput.value,
                cep: editCepInput.value,
                houseNumber: editHouseNumberInput.value,
                serviceType: editTypeServiceInput.value,
                description: editDescriptionArea.value,
                imageUrl: editLoadImageButtonDiv.value,
                ceremonialistEmail: localStorage.getItem("ceremonialistEmail")
            };
>>>>>>> e54bbc31049f561074466db0e5780fe5f17224e8
            fetch("http://localhost:8080/supplier/" + service.id, {
                method: "PUT",
<<<<<<< HEAD
                body: JSON.stringify(data),
=======
                body: JSON.stringify(requestData),
>>>>>>> e54bbc31049f561074466db0e5780fe5f17224e8
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
            })
<<<<<<< HEAD
            .then((data) => {
                console.log("Serviço atualizado com sucesso:", data);
            })
            .catch((error) => {
                console.error("Erro ao atualizar o serviço:", error);
            });
        
            // Fecha o modal e reseta o conteúdo
            editToggleModal();
            resetEditModalContent();
=======
            .then((data) =>{
                showSuccess("Cadastro realizado com sucesso!");
                location.reload()
            })
            .catch((error) =>{
                if (error) {
                    console.error("Erro ao enviar os dados:", error);
                    showError(error.message);
                }
            });
        
>>>>>>> e54bbc31049f561074466db0e5780fe5f17224e8
        });

        editModalHeaderDiv.appendChild(editTitleNewService);
        editModalHeaderDiv.appendChild(editTitleDiv);
        editModal.appendChild(editModalHeaderDiv);
<<<<<<< HEAD

        editTitleInputDiv.appendChild(editTitleInput);
        editTitleInputDiv.appendChild(editTitleInputImg);
        editTitleDiv.appendChild(editTitleInputDiv);
        
        editTypeServiceInputDiv.appendChild(editTypeServiceInput);
        editTypeServiceInputDiv.appendChild(editTypeServiceInputImg);
        editTitleDiv.appendChild(editTypeServiceInputDiv);
        
        editEmailInputDiv.appendChild(editEmailInput);
        editEmailInputDiv.appendChild(editEmailInputImg);
        editTitleDiv.appendChild(editEmailInputDiv);
        
        editCnpjInputDiv.appendChild(editCnpjInput);
        editCnpjInputDiv.appendChild(editCnpjInputImg);
        editTitleDiv.appendChild(editCnpjInputDiv);
        
        editPhoneInputDiv.appendChild(editPhoneInput);
        editPhoneInputDiv.appendChild(editPhoneInputImg);
        editTitleDiv.appendChild(editPhoneInputDiv);
        
        editCepInputDiv.appendChild(editCepInput);
        editCepInputDiv.appendChild(editCepInputImg);
        editTitleDiv.appendChild(editCepInputDiv);
        
        editHouseNumberInputDiv.appendChild(editHouseNumberInput);
        editHouseNumberInputDiv.appendChild(editHouseNumberInputImg);
        editTitleDiv.appendChild(editHouseNumberInputDiv);
        
        editImageDiv.appendChild(editLoadImageButtonDiv);
=======
        editTitleDiv.appendChild(editTitleInput);
        editTitleDiv.appendChild(editTypeServiceInput);
        editTitleDiv.appendChild(editEmailInput);
        editTitleDiv.appendChild(editCnpjInput);
        editTitleDiv.appendChild(editPhoneInput);
        editTitleDiv.appendChild(editCepInput);
        editTitleDiv.appendChild(editHouseNumberInput);
        editTitleDiv.appendChild(alertArea2)
        editModalBodyDiv.appendChild(editLoadImageButtonDiv);
>>>>>>> e54bbc31049f561074466db0e5780fe5f17224e8
        editTitleImageDiv.appendChild(editImageDiv);
        editModalBodyDiv.appendChild(editTitleImageDiv);
        editModalBodyDiv.appendChild(editDescriptionDiv);
        editDescriptionDiv.appendChild(editDescriptionArea);
        editDescriptionDiv.appendChild(editDescriptionImg);
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
            showImage.src = service.imageUrl;
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