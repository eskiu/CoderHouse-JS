class Productos{
    constructor(id, tittle, img, price){
        this.id = id;
        this.name = name;
        this.img = img;
        this.tittle = tittle;
        this.price = price;
    }
    
    cuotas(){
        return this.price = this.price / 3;
    }
}

let products=[];

products.push(new Productos("1", "Mate Imperial", "../img/imperial1.jpg", 5.599));
products.push(new Productos("2", "Mate Imperial Clásico", "../img/imperial3.jpg", 5.999));
products.push(new Productos("3", "Mate Imperial Artesanal", "../img/imperial2.jpg", 5.599));
products.push(new Productos("4", "Mate Imperial Blanco", "../img/imperial4.jpg", 5.599));
products.push(new Productos("5", "Mate Camionero Madera", "../img/madera camionero.jpg", 2.999));
products.push(new Productos("6", "Mate Madera Cuello Alto", "../img/madera2.jpg", 2.499));
products.push(new Productos("7", "Mate Trensado Artesanal", "../img/trensado1.jpg", 3.499));
products.push(new Productos("8", "Mate Imperial Marrón", "../img/imperial5.jpg", 4.499));
products.push(new Productos("9", "Yerbera Cuero Blanco", "../img/yerbera1.jpg", 1.999));
products.push(new Productos("10", "Yerbera Cuero Marrón", "../img/yerbera2.jpg", 1.999));
products.push(new Productos("11", "Yerbero Cuero Marrón Oscuro", "../img/yerbera3.jpg", 1.999));
products.push(new Productos("12", "Yerbera Cuero Negro", "../img/yerbera5.jpg", 1.999));
products.push(new Productos("13", "Mate Camionero Cuero Beige", "../img/camionero1.jpg", 4.999));
products.push(new Productos("14", "Mate Camionero Artesanal", "../img/camionero2.jpg", 5.599));
products.push(new Productos("15", "Mate Camionero de Madera", "../img/camionero3.jpg", 4.999));
products.push(new Productos("16", "Mate Camionero Boca Ancha", "../img/camionero4.jpg", 4.999));
products.push(new Productos("17", "Mate Camionero Clásico", "../img/camionero5.jpg", 4.999));
products.push(new Productos("18", "Bombilla Pico Loro", "../img/bombilla picoloro.jpg", 999));
products.push(new Productos("19", "Bombilla Recto", "../img/bombilla recto.jpeg", 999));
products.push(new Productos("20", "Bombilla Resorte", "../img/bombilla1.jpg", 499));
products.push(new Productos("21", "Termo Stanley Clásico", "../img/termo-11-40424372854957be2315911216849189-1024-1024.jpg", 9.999));
products.push(new Productos("22", "Termo con Pico Vertedor", "../img/termo aluminio.jpg", 5.999));
products.push(new Productos("23", "Termo Stanley Blanco", "../img/stanley blanco.jpg", 8.999));
products.push(new Productos("24", "Termo Lumilagro", "../img/lumilagro.jpg", 3.999));