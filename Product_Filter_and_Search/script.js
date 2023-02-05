let products = {
    data :[
        {
        productName:"beauty 1",
        category:"Jacket",
        price:"33",
        image:"prod1.jpg",
        },
        {
            productName:"beauty 2",
            category:"Bottomwear",
            price:"28",
            image:"prod2.jpg",
        },
        {
            productName:"beauty 3",
            category:"watch",
            price:"91",
            image:"prod3.jpg",
        },
        {
            productName:"beauty 4",
            category:"topwear",
            price:"67",
            image:"prod4.jpg",
        },
        {
            productName:"beauty 5",
            category:"topwear",
            price:"92",
            image:"prod5.jpg",
        },
        {
            productName:"beauty 6",
            category:"topwear",
            price:"48",
            image:"prod6.jpg",
        },
    ],
};

for(let i of products.data){
    //create card
    let card = document.createElement("div");
    //card should have category
    card.classList.add("card","i.category");
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    let image = document.createElement("img");
    image.setAttribute("src",i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    document.getElementById("imgContainer");
    document.getElementById("products").appendChild(card);
}