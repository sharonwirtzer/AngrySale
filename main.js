
const imgs = [
    {
        id: 5,
        title: "Picnic Tote Bag",
        description: "Insulated cooler - 4 colors",
        price: "$18.99",
        pictureUrl: "img/p1.png",
    },
    {
        id: 6,
        title: "Beach Hat",
        description: "Your nose will never be sunburnt again - 3 colors",
        price: "$19.99",
        pictureUrl: "img/p2.png"
    },
    {
        id: 7,
        title: "Fairy Lights Hat",
        description: "Be the life of the party  - 2 colors",
        price: "$18.99",
        pictureUrl: "img/p3.png"
    }
];

const cards = [
    {
        id: 1,
        title: "Home",
        extra: "extra",
        DiscountNum: "25%",
        off: "off",
        pictureUrl: "img/1.png",
    },
    {
        id: 2,
        title: "Jewelery",
        extra: "extra",
        DiscountNum: "25%",
        off: "off",
        pictureUrl: "img/2.png"
    },
    {
        id: 3,
        title: "Lifestyle",
        extra: "extra",
        DiscountNum: "25%",
        off: "off",
        pictureUrl: "img/3.png"
    },
    {
        id: 4,
        title: "Kids",
        extra: "extra",
        DiscountNum: "25%",
        off: "off",
        pictureUrl: "img/4.png"

    }
];

function renderCards(card) {
    return `
    <article>
      <div>
      <h6>
      <h4>${card.extra}<spam> ${card.DiscountNum} </spam>${card.off}</h4>
      </h6>
      <img src="${card.pictureUrl}">
      </div>
      <div>
      <h3> ${card.title}</h3>  
      </div>
    </article>
  `;
}

function renderImgs(img) {
    return `
  <section>
    <div>
    <img src="${img.pictureUrl}">
    </div>
    <div class="description_container" >
    <h1> ${img.title} </h1>
    <h2>${img.description} </h2>
    <h3 class="img_price"> ${img.price} 
    <img src="img/arrow.png"></h3>
    </div>
  </section>

`;
}

function setContainer(id,data) {
    const container = document.querySelector(id);
    container.innerHTML = data.join(" ");
}

setContainer(".imgs_container", imgs.map(renderImgs))
setContainer(".cards_container", cards.map(renderCards)
)
