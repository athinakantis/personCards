
const cardsContainer = document.querySelector('.cards-container')

// Fetch user data
async function fetchPerson() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()

        data.forEach((person) => renderCard(person))

    } catch (error) {
        console.error(error)
    }
}

fetchPerson()

// Render carts
function renderCard(person) {
    cardsContainer.innerHTML +=
        `<div class='card'>
    <h3>${person.username}</h3>
    <img src="https://robohash.org/${person.id}.png?set=set4">
    <p>${person.name}</p>
    <p>${person.email}</p>
    <p>${person.id}</p>
    </div>`
}