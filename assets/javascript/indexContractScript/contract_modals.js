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

async function sendEmail(){

    const { jsPDF } = window.jspdf;
    if (!jsPDF) return showError("Erro ao carregar jsPDF.");

    const doc = new jsPDF();

    //Alterei a linha abaixo e troquei o | ${createInput} | por | localStorage.getItem("currentBudget") |
    fetch(`http://localhost:8080/budget/${localStorage.getItem("currentBudget")}`, {
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

        doc.setFontSize(18);
        doc.setFont("helvetica", "bold");
        doc.text("Contrato de Serviço", 105, 10, null, null, 'center');

        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");

        doc.text(`Cliente:`, 10, 20);
        doc.setFont("helvetica", "bold");
        doc.text(data.client || "N/A", 30, 20);
        doc.setFont("helvetica", "normal");

        doc.text(`Data do Evento:`, 10, 40);
        doc.setFont("helvetica", "bold");
        doc.text(data.date || "N/A", 50, 40);
        doc.setFont("helvetica", "normal");

        doc.text(`Fornecedor:`, 10, 50);
        doc.setFont("helvetica", "bold");
        doc.text(data.supplier || "N/A", 50, 50);
        doc.setFont("helvetica", "normal");

        let y = 55;
        if (data.items && data.items.length > 0) {
            data.items.forEach((item, index) => {
                doc.text(`${index + 1}. ${item.title || "Sem título"}`, 10, y);
                doc.text(`   - Descrição: ${item.description || "Sem descrição"}`, 10, y + 5);
                doc.text(`   - Preço: R$ ${item.price ? item.price.toFixed(2) : "0.00"}`, 10, y + 10);
                y = y + 15;
            });
        } else {
            doc.text("Nenhum item cadastrado.", 10, y);
        }

        doc.text(`Total: R$ ${data.totalAmount.toFixed(2)}`, 10, y + 5 );

        y += 15;

        doc.setFontSize(14);
        doc.setFont("helvetica", "bold");
        doc.text("Termos e Condições", 10, y);

        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        doc.text("Este contrato estabelece os termos do serviço a ser prestado pelo fornecedor ao cliente. Ambas as partes concordam com os termos aqui estabelecidos, garantindo a execução adequada do serviço conforme descrito.", 10, y + 10, { maxWidth: 180 });

        y += 30;

        doc.setFont("helvetica", "bold");
        doc.text("Assinaturas:", 10, y );

        doc.setFont("helvetica", "normal");

        y += 10;
        let x = 10; // Posição horizontal inicial

        // Fornecedor
        doc.text("Fornecedor:", x, y);
        doc.text("_______________________", x, y + 10);

        x += 60; // Move a posição horizontal para o próximo item

        // Cliente
        doc.text("Cliente:", x, y);
        doc.text("_______________________", x, y + 10);

        x += 60; // Move a posição horizontal para o próximo item

        // Cerimonialista
        doc.text("Cerimonialista:", x, y);
        doc.text("_______________________", x, y + 10);

        })

    // Importa jsPDF
    // Converte PDF para Base64
    const pdfBase64 = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result.split(",")[1]); // Remove o prefixo "data:application/pdf;base64,"
        reader.readAsDataURL(new Blob([doc.output("blob")], { type: "application/pdf" }));
    });

    await fetch("http://localhost:8080/email/sendPdf", {

        // `${localStorage.getItem("actualClientEmail")}`

        method: "POST",
        body: JSON.stringify({
            "to": "ryan.mporciuncula@gmail.com",
            "subject": "Contrato de Serviço Cerimonial",
            "message": `Olá [Nome do cliente],

                Espero que esteja bem.

                Segue em anexo o contrato referente a [supplier]. 
                Pedimos que revise o documento e, caso esteja de acordo, realize a assinatura.

                Caso tenha alguma dúvida ou precise de qualquer ajuste, fico à disposição para esclarecimentos.

                Aguardo sua confirmação.

                Atenciosamente,
                [ceremonialis]
            `,
            "pdfBase64": pdfBase64
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

        console.error("Erro de Envio:", error);
        alert(error.message || "Erro de Envio");
    });
}

//Buttons and Div Config
createModal.addEventListener("click", (e)=>{

    getContractPdf();
    
    // console.log("Button Create");
    // openModal(modalCreate, modalLever);
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

/* BOTÃO DE ENVIAR */
buttonSend.addEventListener("click", (event) =>{

    // confirmSendButton.disabled = false;
    // openModal(modalSend, modalLever);

    sendEmail();
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

async function getContractPdf() {

    const showError = (message) => {
        mensage.textContent = message;
        mensage.style.color = "red";
    };

    
    // Validações
    if (!parseInt(localStorage.getItem("currentBudget")) || isNaN(Number(localStorage.getItem("currentBudget")))) return showError("O número do orçamento deve ser válido.");

    try {
        const { jsPDF } = window.jspdf;
        if (!jsPDF) return showError("Erro ao carregar jsPDF.");
        
        const doc = new jsPDF();

        //Alterei a linha abaixo e troquei o | ${createInput} | por | localStorage.getItem("currentBudget") |
        fetch(`http://localhost:8080/budget/${localStorage.getItem("currentBudget")}`, {
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

            doc.setFontSize(18);
            doc.setFont("helvetica", "bold");
            doc.text("Contrato de Serviço", 105, 10, null, null, 'center');

            doc.setFontSize(12);
            doc.setFont("helvetica", "normal");

            doc.text(`Cliente:`, 10, 20);
            doc.setFont("helvetica", "bold");
            doc.text(data.client || "N/A", 30, 20);
            doc.setFont("helvetica", "normal");

            doc.text(`Data do Evento:`, 10, 40);
            doc.setFont("helvetica", "bold");
            doc.text(data.date || "N/A", 50, 40);
            doc.setFont("helvetica", "normal");

            doc.text(`Fornecedor:`, 10, 50);
            doc.setFont("helvetica", "bold");
            doc.text(data.supplier || "N/A", 50, 50);
            doc.setFont("helvetica", "normal");

            let y = 55;
            if (data.items && data.items.length > 0) {
                data.items.forEach((item, index) => {
                    doc.text(`${index + 1}. ${item.title || "Sem título"}`, 10, y);
                    doc.text(`   - Descrição: ${item.description || "Sem descrição"}`, 10, y + 5);
                    doc.text(`   - Preço: R$ ${item.price ? item.price.toFixed(2) : "0.00"}`, 10, y + 10);
                    y = y + 15;
                });
            } else {
                doc.text("Nenhum item cadastrado.", 10, y);
            }

            doc.text(`Total: R$ ${data.totalAmount.toFixed(2)}`, 10, y + 5 );

            y += 15;

        doc.setFontSize(14);
        doc.setFont("helvetica", "bold");
        doc.text("Termos e Condições", 10, y);

        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        doc.text("Este contrato estabelece os termos do serviço a ser prestado pelo fornecedor ao cliente. Ambas as partes concordam com os termos aqui estabelecidos, garantindo a execução adequada do serviço conforme descrito.", 10, y + 10, { maxWidth: 180 });

        y += 30;

        doc.setFont("helvetica", "bold");
        doc.text("Assinaturas:", 10, y );

        doc.setFont("helvetica", "normal");

        y += 10;
        let x = 10; // Posição horizontal inicial

        // Fornecedor
        doc.text("Fornecedor:", x, y);
        doc.text("_______________________", x, y + 10);

        x += 60; // Move a posição horizontal para o próximo item

        // Cliente
        doc.text("Cliente:", x, y);
        doc.text("_______________________", x, y + 10);

        x += 60; // Move a posição horizontal para o próximo item

        // Cerimonialista
        doc.text("Cerimonialista:", x, y);
        doc.text("_______________________", x, y + 10);

        doc.save("relatorio.pdf");

        })
        // Importa jsPDF
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
                idBudget: parseInt(localStorage.getItem("currentBudget")),
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
}