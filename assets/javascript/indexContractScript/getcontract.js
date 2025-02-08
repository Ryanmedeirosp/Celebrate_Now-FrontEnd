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
    data.forEach(contract => {
        
        localStorage.setItem("currentContractIndex", 0);

    });
    

})
.catch((error) => {
    console.error( error);
}); 