

const displayEmployees = (e) =>{
    if (e.target.id === "searchEmployee") {
        const search = e.target.value
    }
    else if (e.target.id === "searchBtn") {
        console.log(searchEmployee.value)
    }
    
}

searchEmployee.addEventListener('input',displayEmployees)

searchBtn.addEventListener('click',displayEmployees)



