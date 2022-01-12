const articulos = document.getElementById("containerCards");

function renderProducts(objetos, etiquetaCardHTML){
    etiquetaCardHTML.innerHTML="";
    for(products of objetos){
        etiquetaCardHTML.innerHTML+=`
        <div class="product" data-aos="fade-up">
            <img src="${products.img}" alt="">
            <div class="card-description">
                <span class="card-tittle">${products.tittle}</span>
                <span class="card-price">$ ${products.price}</span>
                <span><b>3</b> cuotas sin interés de </span>
                <button>Agregar al carrito</button>
            </div>
        </div>
        `
    }
}

renderProducts(products, articulos);