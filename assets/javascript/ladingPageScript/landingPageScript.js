const schedule = document.querySelector("#schedule");
const checklist = document.querySelector("#checklist");
const budget = document.querySelector("#budget");
const communication = document.querySelector("#communication");
const suppliers = document.querySelector("#suppliers")
const elements = document.querySelectorAll(".hidden")

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            schedule.classList.add('show')
            checklist.classList.add('show')
            budget.classList.add('show')
            communication.classList.add('show')
            suppliers.classList.add('show')
        } else {
            schedule.classList.remove('show')
            checklist.classList.remove('show')
            budget.classList.remove('show')
            communication.classList.remove('show')
            suppliers.classList.remove('show')
        }
    })
});

myObserver.observe(communication);
myObserver.observe(suppliers);

