let eventCards = document.getElementById('eventCards');
let fragment = document.createDocumentFragment();

eventInfo.forEach((event) => {
    let card = `
        <div class="card m-3">
            <div class="card-image p-3">
                <img src="${event.image}" class="card-img-top" alt="${event.name}">
            </div>
            <div class="card-body">
                <h5 class="card-title">${event.name}</h5>
                <p class="card-text">${event.description}</p>
                <p class="card-text">Category: ${event.category}</p>
                <p class="card-text">Place: ${event.place}</p>
                <p class="card-text">Capacity: ${event.capacity}</p>
                <p class="card-text">Assistance: ${event.assistance || event.estimate}</p>
                <div class="card-btn-section">
                    <p>Price ${event.price}</p>
                    <a href="./pages/details.html" class="btn btn-dark">More info</a>
                </div>
            </div>
        </div>
    `;

    let cardDiv = document.createElement('div');
    cardDiv.innerHTML = card;

    fragment.appendChild(cardDiv);
});

eventCards.innerHTML = '';
eventCards.appendChild(fragment);