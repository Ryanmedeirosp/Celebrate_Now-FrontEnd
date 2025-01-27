//Add Item modal
const modalItem = document.querySelector(".modal-add-item");
const modalItemContainer = document.querySelector(".modal-add-item-container");
const modalAddItemLever = 'modal-add-item-show';

//Buttons
const buttonAddItem = document.querySelector(".budget-button-add");

//Add Item Div 
const confirmItemButton = document.querySelector(".add-item-button-confirm");
const cancelItemButton = document.querySelector(".add-item-button-cancel");

function openModal(name, lever){

    name.classList.add(lever);
}

function closeModal(name, lever){

    name.classList.remove(lever);
}

buttonAddItem.addEventListener("click", (event) =>{

    openModal(modalItem, modalAddItemLever);
});

modalItem.addEventListener("click",(event) =>{

    if (modalItemContainer.contains(event.target)) {
        
        return;
    } else{

        closeModal(modalItem, modalAddItemLever);
    };
});

confirmItemButton.addEventListener("click", (event) =>{

    console.log("Confirm");
});

cancelItemButton.addEventListener("click", (event) =>{

    closeModal(modalItem, modalAddItemLever);
});