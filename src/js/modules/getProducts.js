const getProducts = () => {
    const cardBtn = document.querySelector('.cards-button')
    const cardsContainer = document.querySelector('.cards-container')
    function getCard() {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(
            {
                img: './images/cards/img2.jpg',
              title: 'COIN',
              descr: 'How to increase your productivity with a Music',
              text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
              author: 'Eugenia',
              userId: 1,
            },
        ),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then(response => {
                cardsContainer.innerHTML = `
                <article class="cards-item">
                    <img src="${response.img}" alt="card">
                    <div class="cards-content">
                        <h3 class="cards-name">${response.title}</h3>
                        <p class="cards-descr">${response.descr}</p>
                        <p class="cards-text">${response.text}</p>
                        <p class="cards-author">Posted by <strong>${response.author}</strong>, on July  24, 2019</p>
                        <a class="cards-btn" href="#">Continue reading</a>
                    </div>
                </article>
                    `
            });
    }

    cardBtn.addEventListener('click', getCard)
}
export default getProducts