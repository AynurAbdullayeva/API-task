let loading = document.querySelector("#loader");

fetch(` https://fakestoreapi.com/products/${id}`)
.then(res=>res.json())
.then(data=>{
    loading.style.display = "none";
    wrapper.classList.replace("d-none","d-block");
    name.textContent = data.name;
    street.textContent = data.address.street;
    phone.textContent = data.phone;
});


// function getProducts() {
//     fetch("https://fakestoreapi.com/products")
//         .then(response => response.json())
//         .then(product => {
//             console.log(product)
//             let image=product.image
//             let title=product.title
//             let price=product.price
//             let description=product.description
//             let category=product.category
//             let rate=product.rating.rate
//             let count=product.rating.count

//         });
// }

let productDetails = document.querySelector(".container .card")


function getProduct() {
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
            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" class="card-img-top" alt="${product.title}">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h3>${product.title}</h3> <br>
                <p class="price">Price: <span>${product.price}</span></p> <br>
                <p class="description">Description: <span>${product.description}</span></p> <br>
                <p class="category">Category: <span>${product.category}</span> </p> <br>
                <p class="rating"> Rate: <span class="rate">${product.rating.rate}</span><br><br> Count: <span
                        class="count">${product.rating.count}</span></p>
            </div>
        </div>
    </div>`
        productDetails.innerHTML = productsDatas
    });
}


