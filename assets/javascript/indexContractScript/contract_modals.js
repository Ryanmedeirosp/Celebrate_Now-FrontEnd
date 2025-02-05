//Sign Modal
const modalSign = document.querySelector(".modal-sign");
const modalContainerSign = document.querySelector(".modal-sign-container");

//Send Modal
const modalSend = document.querySelector(".modal-send");
const modalContainerSend = document.querySelector(".modal-send-container");
const modalCreate = document.querySelector(".modal-create")


//Buttons
const buttonSign = document.querySelector(".button-sign");
const buttonSend = document.querySelector(".button-new");
const createModal = document.querySelector(".button-create");
const cancelButton = document.querySelector(".create-cancel");

const confirmSendButton = document.querySelector(".send-confirm");
const cancelSendButton = document.querySelector(".send-cancel");

//Modal Lever
const modalLever = "modal-show";

//Send Mail
const emailSentMessage = document.querySelector(".email-sent");
const emailNotSentMessage = document.querySelector("email-not-sent");
const inputEmail = document.querySelector(".send-input");

//Functions
function openModal(name, lever){

    name.classList.add(lever);
}

function closeModal(name, lever){

    name.classList.remove(lever);
}

async function sendEmail(email, sent, notSent){

    fetch("http://localhost:8080/email", {

        method: POST,
        body: JSON.stringify({
            "to": `${email}`,
            "subject": "Contrato de Serviço Cerimonial",
            "message": "string"
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

        //Alterar o Display Aqui depois
        sent.style.display = "block";
    })

    .catch((error) =>{

        //Alterar o Display Aqui depois
        notSent.style.display = "block";
        console.error("Erro de Envio:", error);
        alert(error.message || "Erro de Envio");
    });
}

//Buttons and Div Config
createModal.addEventListener("click", (e)=>{
    openModal(modalCreate, modalLever)
})

cancelButton.addEventListener("click", (e) =>{
    closeModal(modalCreate, modalLever)
})

buttonSign.addEventListener("click", (event) =>{

    openModal(modalSign, modalLever);
});

modalSign.addEventListener("click", (event) =>{

    if (modalContainerSign.contains(event.target)) {
        
        return;
    } else{

        closeModal(modalSign, modalLever);
    };
});

buttonSend.addEventListener("click", (event) =>{

    confirmSendButton.disabled = false;
    openModal(modalSend, modalLever);
});

modalSend.addEventListener("click", (event) =>{

    if (modalContainerSend.contains(event.target)) {
        
        return;
    } else{

        closeModal(modalSend, modalLever);
    };
});

//Send Buttons Config
cancelSendButton.addEventListener("click", (event) =>{

    closeModal(modalSend, modalLever);
});

confirmSendButton.addEventListener("click", (event) =>{

    confirmSendButton.disabled = true;
    // sendEmail(inputEmail.value, emailSentMessage, emailNotSentMessage);
});


const confirmeCreate = document.querySelector(".create-confirm");
const mensage = document.getElementById("mensage");

confirmeCreate.addEventListener("click", async (e) => {
    e.preventDefault();

    const createInput = document.getElementById("create-input").value.trim();
    const pdfInput = document.getElementById("pdf-input").value.trim();

    const showError = (message) => {
        mensage.textContent = message;
        mensage.style.color = "red";
    };
    const contractData = JSON.parse(localStorage.getItem("contractData"));

    const contract = contractData[0];
    // Validações
    if (!pdfInput) return showError("O texto é obrigatório.");
    if (!createInput || isNaN(Number(createInput))) return showError("O número do orçamento deve ser válido.");

    try {
        // Importa jsPDF
        const { jsPDF } = window.jspdf;
        if (!jsPDF) return showError("Erro ao carregar jsPDF.");

        const doc = new jsPDF();
        doc.text("Contrato de Serviço", 10, 10);
        doc.text(`Cliente: ${contract.clientName}`, 10, 20);
        doc.text(`Número do Contrato: ${contract.contractId}`, 10, 30);
        doc.text(`Data do Evento: ${contract.date}`, 10, 40);
        doc.text(`Fornecedor: ${contract.supplierName}`, 10, 50);
        doc.text(`Cerimonialista: ${contract.ceremonialistName}`, 10, 60);

        doc.save("relatorio.pdf");
        // Converte PDF para Base64
        const pdfBase64 = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result.split(",")[1]); // Remove o prefixo "data:application/pdf;base64,"
            reader.readAsDataURL(new Blob([doc.output("blob")], { type: "application/pdf" }));
        });

        // Envia JSON para o backend
        const response = await fetch("http://localhost:8080/contract", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                idBudget: createInput,
                pdf: pdfBase64 // Enviando como string Base64
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            return showError(errorData.message || "Erro ao processar a solicitação.");
        }

        showError("PDF gerado e enviado com sucesso!");
        location.reload();

    } catch (error) {
        console.error("Erro ao gerar/enviar o PDF:", error);
        showError("Erro ao processar a solicitação. Tente novamente.");
    }
});