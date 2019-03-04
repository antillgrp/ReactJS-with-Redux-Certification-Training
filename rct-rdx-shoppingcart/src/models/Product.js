export class Product {

    constructor(id, title, price, inventory){
        this.id = id;
        this.title = title;
        this.price = price;
        this.inventory = inventory;
    }
}

export class Customer {
    
    constructor(id, name, password){
        this.id = id;
        this.name = name;
        this.password = password;
        this.isLoggedIn = false;
    }
}

export class Cart {
    constructor(){
        this.customer = null;
        this.products = [];
    }
}