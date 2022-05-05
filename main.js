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

let getImg = ``;

imgs.forEach(function (img) {
    getImg +=
        `
      <secsion>
        <div>
        <img src="${img.pictureUrl}">
        </div>
        <div class="description_container" >
        <h1> ${img.title} </h1>
        <h2>${img.description} </h2>
        <h3 class="img_price"> ${img.price} 
        <img src="img/arrow.png"></h3>
        </div>
      </secsion>
    `;
});

const imgsContainer = document.querySelector(".imgs_container");
imgsContainer.innerHTML = getImg;

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

let getCard = ``;

cards.forEach(function (card) {
    getCard +=
        `
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
});

const cardsContainer = document.querySelector(".cards_container");
cardsContainer.innerHTML = getCard;



