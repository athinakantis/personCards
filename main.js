
const cardsContainer = document.querySelector('.cards-container')


async function fetchPerson() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()

        data.forEach((person) => renderCard(person.name, person.username, person.email, person.id
        ))

    } catch (error) {
        console.error(error)
    }
}

fetchPerson()


function renderCard(name, username, email, id) {
    cardsContainer.innerHTML +=
        `<div class='card'>
    <h3>${username}</h3>
    <img src="https://robohash.org/${id}.png?set=set4">
    <p>${name}</p>
    <p>${email}</p>
    <p>${id}</p>
    </div>`
}




/*
10 cards
user names
robohash image
name email username and ID
upload to github pages 
*/