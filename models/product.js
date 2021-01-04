const products = [];
const path = require('path');
const fs = require('fs');
const p = path.join(
    path.dirname(process.mainModule.filename),
     'data',
      'products.json');
const getProductsFromFile = (cb) =>{

    fs.readFile(p, (err, fileContent) => {
        if(err){
            return cb([]);
        }
        else{
           cb(JSON.parse(fileContent));            
        }

    })
}

module.exports = class Product{
    constructor(title, imageUrl, price, description){
        this.title = title;
        this.imageUrl=imageUrl;
        this.price=price;
        this.description=description;

    }

    save(){
        this.id = Math.random().toString();
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });

        fs.readFile(p, (err,fileContent)=>{

        });
    }

    static fetchAll(cb){
        getProductsFromFile(cb);
    }

    static findById(id, cb) {
        getProductsFromFile(products =>{
            const product = products.find( p => p.id === id);
            cb(product);
        });
    }
};