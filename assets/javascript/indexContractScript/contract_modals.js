//Sign Modal
const modalSign = document.querySelector(".modal-sign");
const modalContainerSign = document.querySelector(".modal-sign-container");

//Send Modal
const modalSend = document.querySelector(".modal-send");
const modalContainerSend = document.querySelector(".modal-send-container");

//Buttons
const buttonSign = document.querySelector(".button-sign");
const buttonSend = document.querySelector(".button-new");

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

    closeModal(modalLever, modalLever);
});

confirmSendButton.addEventListener("click", (event) =>{

    confirmSendButton.disabled = true;
    // sendEmail(inputEmail.value, emailSentMessage, emailNotSentMessage);
});