//GETTING THE CONTAINER CARDS OF SHOP
const newCard = document.getElementById("containerCards");

//RENDERING PRODUCTS OF THE SHOP
function renderProducts(arrayProducts, etiquetaCardHTML){
    
    etiquetaCardHTML.innerHTML="";
    for(let product of arrayProducts){
        etiquetaCardHTML.innerHTML+=`
            <article class="product">
                <div class="img-container">
                    <img src="${product.img}" alt="product" class="product-img">
                    <button class="bag-btn" data-id="1">
                        <i class="fas fa-shopping-cart"></i>
                        añadir al carrito
                    </button>
                </div>
                <h3>${product.tittle}</h3>
                <p>$ ${product.price}</p>
                <p> <b>3</b> cuotas sin interés de </p>
            </article>
        `
    }
}
renderProducts(products, newCard);