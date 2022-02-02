const divFilter = $('#filter-links');


$("#filtroMate").click((e)=>{
    e.preventDefault(); //que no recargue la pág.
    const filterMate = products.filter(e => e.cat == "Mate");
    renderProducts(filterMate, newCard);
    $("#limpiarFiltro").css({"display":"flex", "background-color":"#f9bc60", "border-radius":"5px", "padding":"0 5px"});

})

$("#filtroTermo").click((e)=>{
    e.preventDefault(); //que no recargue la pág.
    const filterTermo = products.filter(e => e.cat == "Termo");
    renderProducts(filterTermo, newCard);
    $("#limpiarFiltro").css("display", "flex");
})

$("#filtroYerbera").click((e)=>{
    e.preventDefault(); //que no recargue la pág.
    const filterYerbera = products.filter(e => e.cat == "Yerbera");
    renderProducts(filterYerbera, newCard);
    $("#limpiarFiltro").css("display", "flex");
})

$("#filtroBombilla").click((e)=>{
    e.preventDefault(); //que no recargue la pág.
    const filterBombilla = products.filter(e => e.cat == "Bombilla");
    renderProducts(filterBombilla, newCard);
    $("#limpiarFiltro").css("display", "flex");
})

$("#limpiarFiltro").click((e)=>{
    e.preventDefault();
    let clearFilter = products
    renderProducts(clearFilter, newCard);
    $("#limpiarFiltro").css("display", "none");
})

function addedToCart(){
    $("#addedToCartSpan").css("display", "block");
    $("#addedToCart").css("display", "flex");
    $("#addedToCart").slideDown("slow", () =>{
    $("#addedToCart").delay(1000).slideUp("slow");
    });
}