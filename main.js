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
        description: "Insulated cooler - 4 colors",
        price: "$19.99",
        pictureUrl: "img/p2.png"
    },
    {
        id: 7,
        title: "Fairy Lights Hat",
        description: "Insulated cooler - 4 colors",
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
        Discount: "extra 25% off",
        pictureUrl: "img/1.png",
    },
    {
        id: 2,
        title: "Jewelery",
        Discount: "extra 25% off",
        pictureUrl: "img/2.png"
    },
    {
        id: 3,
        title: "Lifestyle",
        Discount: "extra 25% off",
        pictureUrl: "img/3.png"
    },
    {
        id: 4,
        title: "Kids",
        Discount: "extra 25% off",
        pictureUrl: "img/4.png"

    }
];

let getCard = ``;

cards.forEach(function (card) {

    getCard +=
        `
      <article>
        <div>
         <h4> ${card.Discount}</h4>
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



