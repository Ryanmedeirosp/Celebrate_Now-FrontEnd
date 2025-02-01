const supplierField = document.querySelector("#supplier-input");

function autocompleteSupplier(inputField, possibleSupplier){

    var currentFocus;

    inputField.addEventListener("input", function(e){

        var itemListDiv;
        var itemDiv;
        var value = this.value;

        closeAllList();
         
    })
}

function addActive(item) {
    
    if(!item) return false;

    removeActive(item);

    if(currentFocus >= item.length ) currentFocus = 0;
    if(currentFocus < 0) currentFocus = (item.length - 1);

    item[currentFocus].classList.add("autocomplete-active");
}

function removeActive(activeItem){

    for (let index = 0; index < array.length; index++) {

        activeItem[index].classList.remove("autocomplete-active");
    }
}

function closeAllList(input) {
    
    var listItem = document.querySelector("autocomplete-items");

    for (let index = 0; index < array.length; index++) {

        if(input != listItem && input != inputField){

            listItem[index].parentNode.removeChild(listItem[index]);
        }     
    }
}