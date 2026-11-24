// получение данных нового пользователя из формы 

let firstName = document.getElementById('firstName')
let lastName = document.getElementById('lastName')
let phone = document.getElementById('phone')
let password = document.getElementById('password')
let terms = document.getElementById('terms')

// создание слуштеля кнопки
let registrationForm = document.getElementById('registrationForm');

let URL = "http://localhost:3000/users"


// функция отработки и записи данных в обект User
registrationForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    let newUser = {
        firstName: firstName.value,
        lastName: lastName.value,
        phone: phone.value,
        password: password.value,
        terms: terms.checked
    }

    try {
        let check = await fetch(URL)
        let oldUsers = await check.json();

        if (oldUsers.some((users) => newUser.phone === users.phone)) {
            showPopup('Этот номер уже занят!');
        } else if (Object.values(newUser).some((res) => res.toString().trim() === '')) {
            showPopup('Заполните все поля!');
        } else if (Object.values(newUser).some((res) => res === false)) {
            showPopup('Примите условия соглашения!');
        } else {
            await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
            });

            window.location.href = "index.html"
            console.log(response.status);
console.log(response.ok);
        }

    } catch (error) {
        showPopup('ошибка 404');
    }
});

// toast

let popup = document.getElementById('popup');

function showPopup(message) {
    popup.textContent = message
    popup.classList.add('active')

    setTimeout(() => {
        popup.classList.remove('active')
    }, 3000);
}



