let cardRow = document.querySelector(".card-row")
let fetchAllProducts = () => {
    let a = ""
    fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
            data.products.map((product) => {
                a += `        
                    <div class="col-lg-4 col-md-4 card-col">
                    <div class="card">
                        <div class="img-div">
                             <img class="card-img-top" src='${product.images[0]}' alt='${product.title}'>
                        </div>
                        <div class="card-body text-center">
                            <div class="card-title">
                                        ${product.title}
                                <p>
                                        ${product.description.substring(0,30)}...
                                </p>
                                <span class="">
                                        Price: ${product.price}$
                                </span>
                                <div class="card-buttons ">
                                    <button data-item=${product.id} class="card-button">
                                        Add to Basket
                                    </button>
                                    <button data-item=${product.id} class="fav-button">
                                        Add to Favourite
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    `
                cardRow.innerHTML = a
            })
        })
}
fetchAllProducts()


let allCategories = document.querySelector(".all-categories")
let allCategoriesBtns = document.querySelectorAll(".all-categories button")
allCategoriesBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let a=""
        fetch(`https://dummyjson.com/products/category/${e.target.id}`)
            .then(res => res.json())
            .then(data =>
                data.products.map((product) => {
                    a += `        
                <div class="col-lg-4 col-md-4 card-col">
                <div class="card">
                    <div class="img-div">
                         <img class="card-img-top" src='${product.images[0]}' alt='${product.title}'>
                    </div>
                    <div class="card-body text-center">
                        <div class="card-title">
                                    ${product.title}
                            <p>
                                    ${product.description.substring(0,30)}...
                            </p>
                            <span class="">
                                    Price: ${product.price}$
                            </span>
                            <div class="card-buttons ">
                                <button data-item=${product.id} class="card-button">
                                    Add to Basket
                                </button>
                                <button data-item=${product.id} class="fav-button">
                                    Add to Favourite
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                `
                    cardRow.innerHTML = a
                })
            )
    })
});

let button = document.querySelector(".menu-button")
let navigation = document.querySelector(".navigation")
let headerTop = document.querySelector(".header-top")
let headerBottom = document.querySelector(".header-bottom")
let close = document.querySelector(".close-icon")
button.addEventListener("click", function () {
    // navigation.style.display = "block"
    navigation.style.opacity = "1"
    navigation.style.right = "0"
    navigation.style.transform = "translate(0,0)"
})
close.addEventListener("click", function () {
    // navigation.style.display = "none"
    navigation.style.opacity = "0"
    navigation.style.right = "-100%"
    navigation.style.transform = "translate(0,-100%)"



})
window.onscroll = function () {
    myFunction()
};

function myFunction() {
    if (document.documentElement.scrollTop > 50) {
        headerTop.style.display = "none";
        headerBottom.style.position = "fixed"
        headerBottom.style.top = 0
        headerBottom.style.right = 0
        headerBottom.style.left = 0
        headerBottom.style.backgroundColor = "white"
    } else if (document.documentElement.scrollTop < 50) {
        headerTop.style.display = "block";
        headerBottom.style.position = "relative"
    }
}


