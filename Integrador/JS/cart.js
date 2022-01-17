buttonShowCart.onclick = function(){
    document.getElementById('cartV').style.visibility = 'visible';
    document.getElementById('cartT').style.transform = 'translateX(0%)';
}
    
buttonHideCart.onclick = function(){
    document.getElementById('cartV').style.visibility = 'hidden';
    document.getElementById('cartT').style.transform = 'translateX(100%)';
}