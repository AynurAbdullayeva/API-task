let productsContainer = document.querySelector(".products .container")
let searchInput = document.querySelector("#search-input")

function getAllProducts() {
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => dispalyProductsInfo(data));
}
let productsDatas = ""
function dispalyProductsInfo(data) {
    console.log(data)

    data.forEach((product, i) => {
        console.log(product)
        productsDatas += ` <div class="row">
      <div class="col">
          <div class="card">
              <div class="card-body">
                  <a class="title" onClick="Detail(${i})">
                      <h3>${product.title}</h3>
                  </a>
                  <p class="price">Price: <span>${product.price}</span></p>
                  <p class="description">Description: <span>${product.description}</span></p>
                  <p class="category">Category: <span>${product.category}</span> </p>
                  <img src="${product.image}" class="card-img-top"
                      alt="${product.title}">
                  <p class="rating"> Rate: <span class="rate">${[product.rating.rate]}</span><br> Count: <span
                          class="count">${product.rating.count}</span></p>
              </div>
          </div>
      </div>`
        productsContainer.innerHTML = productsDatas
    });
}

getAllProducts()

function Detail(id) {
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => {
            console.log(data[id].title)
            localStorage.setItem("productsTitle", JSON.stringify(data[id].title))
            window.location = "./detail.html"
        })
}



searchInput.addEventListener("keyup", (e) => {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
            productsContainer.innerHTML = "";
            let searhcedUsers = data.filter(item => item.title.toLowerCase().trim().includes(e.target.value.toLowerCase().trim()));
            searhcedUsers.forEach((item) => {
                productsContainer.innerHTML += `<div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <a class="title" onClick="Detail(${i})">
                            <h3>${product.title}</h3>
                        </a>
                        <p class="price">Price: <span>${product.price}</span></p>
                        <p class="description">Description: <span>${product.description}</span></p>
                        <p class="category">Category: <span>${product.category}</span> </p>
                        <img src="${product.image}" class="card-img-top"
                            alt="${product.title}">
                        <p class="rating"> Rate: <span class="rate">${[product.rating.rate]}</span><br> Count: <span
                                class="count">${product.rating.count}</span></p>
                    </div>
                </div>
            </div>`
            })
        });
});

let sortBtn = document.querySelector("#sort");
sortBtn.addEventListener("click", () => {
    productsContainer.innerHTML = "";
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
            data.sort((x, y) => x.price.localeCompare(y.price));
            data.forEach((x) => {
                productsContainer.innerHTML += `<div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <a class="title" onClick="Detail(${i})">
                            <h3>${product.title}</h3>
                        </a>
                        <p class="price">Price: <span>${product.price}</span></p>
                        <p class="description">Description: <span>${product.description}</span></p>
                        <p class="category">Category: <span>${product.category}</span> </p>
                        <img src="${product.image}" class="card-img-top"
                            alt="${product.title}">
                        <p class="rating"> Rate: <span class="rate">${[product.rating.rate]}</span><br> Count: <span
                                class="count">${product.rating.count}</span></p>
                    </div>
                </div>
            </div>`
            })
        })
})