let nameUser = document.querySelectorAll('.nameUser')
let URL = "http://localhost:3000/users"

async function getUserName() {
    let response = await fetch(URL)
    let users = await response.json()

    nameUser.forEach(element => {
        element.textContent = users[0].firstName
    });

}

getUserName()