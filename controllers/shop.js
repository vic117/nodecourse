const Product = require('../models/product');
const Cart = require('../models/cart');


exports.getProducts = (req, res, next) => {
    // res.sendFile(path.join(rootDir,'views','shop.html'));
    // console.log(adminData.products);
    const products = Product.fetchAll((products)=>{
        res.render('./shop/product-list', {prods:products, pageTitle: 'All products', path:'/products'});

    });
};

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    console.log(prodId);
    Product.findById(prodId, product => {
        res.render('shop/product-detail', {
            product:product,
            pageTitle:product.title,
            path:'/products'});
    });

}

exports.getIndex = (req, res, next) => {
    const products = Product.fetchAll((products)=>{
        res.render('./shop/index', {prods:products, pageTitle: 'Shop', path:'/'});

    });
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart',{
        path:'/cart',
        pageTitle:'Your Cart'
        
    });
}

exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, (product) => {
        console.log(product);
        Cart.addProduct(prodId, product.price);
    });
    res.redirect('/cart');
};

exports.getOrders = (req, res, next) => {
    res.render('shop/orders',{
        path:'/orders',
        pageTitle:'Orders'
        
    });
}

exports.getCheckout = (req, res, next) => {
    res.render('/checkout'), {
        path:'/checkout',
        pageTitle:'Checkout'
    }
}