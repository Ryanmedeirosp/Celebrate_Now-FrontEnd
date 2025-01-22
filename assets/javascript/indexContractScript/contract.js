const editButton = document.querySelector(".button-edit");
const textContractField = document.querySelector(".contract-text")

const buttonsEditDiv = document.querySelector(".contract-edit-active");
const confirmEditButton = document.querySelector(".confirm-edit");
const cancelEditButton = document.querySelector(".cancel-edit");

editButton.addEventListener("click", (event) =>{

    buttonsEditDiv.style.display = "grid";
    textContractField.readOnly = false;
    textContractField.style.border = "solid #000 1px";
});

cancelEditButton.addEventListener("click", (event)=>{

    var textContent = textContractField.textContent;

    buttonsEditDiv.style.display = "none";

    textContractField.readOnly = true;
    textContractField.style.border = "none";
    textContractField.textContent = textContent;
});

confirmEditButton.addEventListener("click", (event)=>{

    var textContent = textContractField.textContent;

    if(textContractField.textContent != textContent){

        textContractField.textContent = textContractField.textContent;
    }

    buttonsEditDiv.style.display = "none";

    textContractField.readOnly = true;
    textContractField.style.border = "none";
});