function cuotas(value){
    return result = value / 3;
}

class Products{

    constructor(name, price) {
    this.name = name;
    this.price = price;
    }

    line(){
        return `${this.name} ----------- ${this.price}`
    }

}

const product1 = new Products("Mate Imperial", 5599);
const product2 = new Products("Mate Madera", 2999);
const product3 = new Products("Mate Camionero", 4999);
const product4 = new Products("Yerbera", 1999);
const product5 = new Products("Bombilla", 999);
const product6 = new Products("Termo", 9999);

i = 0;
let totalPrice = 0;

alert(`Bienvenido, a continuación podra elegir productos según su necesidad.`)

while(i < 5){
    let num = parseInt(prompt(`Elija el numero de su producto a continuación. Si ha terminado su selección, presione 0. 
    1- ${product1.line()}
    2- ${product2.line()}
    3- ${product3.line()}
    4- ${product4.line()}
    5- ${product5.line()}
    6- ${product6.line()}
    `))

    if(num == null || isNaN(num) || num > 6){
        alert("Valor incorrecto. Por favor, recuerde ingresar SÓLO EL NÚMERO correspondiente a su producto.")
        i=1;
    }else if(num == 1 || num == "1"){
        totalPrice = totalPrice + 5599;
        i=1;
    }else if(num == 2 || num == "2"){
        totalPrice = totalPrice + 2999;
        i=1;
    }else if(num == 3 || num == "3"){
        totalPrice = totalPrice + 4999;
        i=1;
    }else if(num == 4 || num == "4"){
        totalPrice = totalPrice + 1999;
        i=1;
    }else if(num == 5 || num == "5"){
        totalPrice = totalPrice + 999;
        i=1;
    }else if(num == 6 || num == "6"){
        totalPrice = totalPrice + 9999;
        i=1;
    }else if(num == 0 || num == "0"){
        i=100
    }
}

alert(`El precio total de sus productos es: $ ${totalPrice}

Puede abonar el importe en 3 cuotas sin interés de $ ${cuotas(totalPrice)}`)
