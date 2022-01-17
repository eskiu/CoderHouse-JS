
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


// FUNCTIONS OF CART AND MENU-MOBILE
buttonShowCart.onclick = function(){
    document.getElementById('cartV').style.visibility = 'visible'
    document.getElementById('cartT').style.transform = 'translateX(0%)'
}

buttonHideCart.onclick = function(){
    document.getElementById('cartV').style.visibility = 'hidden'
    document.getElementById('cartT').style.transform = 'translateX(100%)'
}

buttonShowMenu.onclick = function(){
    document.getElementById("navLinks").style.display = "flex";
    document.getElementById("navLinks").style.right = "0";   
}

buttonHideMenu.onclick = function(){
    document.getElementById("navLinks").style.right = "-200px";
    document.getElementById("navLinks").style.display = "none";
}