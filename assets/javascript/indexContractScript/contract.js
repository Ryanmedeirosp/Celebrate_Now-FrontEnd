const editButton = document.querySelector(".button-edit");
const textContractField = document.querySelector(".contract-text")

editButton.addEventListener("click", (event) =>{

    textContractField.readOnly = false;
    textContractField.style.border = "solid #000 1px";
});