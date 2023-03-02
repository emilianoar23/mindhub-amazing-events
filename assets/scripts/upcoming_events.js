let eventInfo = data.events;

let container = document.getElementById('upcomingContainer');

let fragment = document.createDocumentFragment();

eventInfo.filter(event => event.date >= '2022-01-01')
.forEach(event => {
let eventDiv = document.createElement('div');
eventDiv.classList.add('event');
eventDiv.innerHTML = `
<div class="card m-4" style="width: 25rem; height: 40rem;">
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
            <a href="./details.html" class="btn btn-dark">More info</a>
        </div>
    </div>
</div>
`;
fragment.appendChild(eventDiv);
});

container.innerHTML = '';
container.appendChild(fragment);

