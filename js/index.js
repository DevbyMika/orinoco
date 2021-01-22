var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(req) {
    if (req.target.readyState == XMLHttpRequest.DONE && req.target.status == 200) {
       var cameras = JSON.parse(req.target.responseText);
       console.log("connecté");
       this.createCameras(cameras);
    }
}.bind(this);
xhr.open("GET", "http://localhost:3000/api/cameras");
xhr.send();

function createCameras(cameras) {
    var productList = document.querySelector("#productList");

    cameras.forEach((camera)=>{
    //html building elements//
    var productContainer = document.createElement("div");
    var productLink = document.createElement("a");
    var cardImg = document.createElement("img");
    var productCardBody = document.createElement("div");
    var productRef = document.createElement("div");
    var productName = document.createElement("div");
    var productPrice = document.createElement("div", "class");
    var productDescription = document.createElement("div");
    // elements attribute//
    productContainer.setAttribute("class","col-5 border-secondary p-0 m-2 greybg");
    cardImg.setAttribute("class","card-img-top img-fluid");
    cardImg.setAttribute("src",camera.imageUrl);
    productCardBody.setAttribute("class","card-body text-center greybg");
    productRef.setAttribute("class","d-flex justify-content-between");
    productName.setAttribute("class","font-weight-bold");
    productPrice.setAttribute("class","font-weight-bold");
    productDescription.setAttribute("class","mt-3 text-left");
    productLink.setAttribute("href","product.html?id" + camera._id);
    productLink .setAttribute("class","btn btn-dark mt-3");
    //elmements html creation//
    productList.appendChild(productContainer);
    productContainer.appendChild(cardImg);
    productContainer.appendChild(productCardBody);
    productCardBody.appendChild(productRef)
    productRef.appendChild(productName);
    productRef.appendChild(productPrice);
    productCardBody.appendChild(productDescription);
    productCardBody.appendChild(productLink);
    /* Contenu des balises index HTML */
    productName.textContent = camera.name;
    productPrice.textContent = camera.price / 100 + " €";
    productDescription.textContent= camera.description;
    productLink.textContent = "En savoir plus";
});
};