fetch(`http://localhost:8080/contract/1`, {
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
    localStorage.setItem("contractData", JSON.stringify(data));
    data.forEach(contract => {
        
        localStorage.setItem("currentContractIndex", 0);
        
        clientName.innerHTML = `Cliente: ${contract.clientName}`
        contractNumber.innerHTML = `Número do Contrato: ${contract.contractId}`
        eventDay.innerHTML = `Data do envento: ${contract.date}`
    });
    

})
.catch((error) => {
    console.error( error);
}); 