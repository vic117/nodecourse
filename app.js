const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
//const expressHbs = require('express-handlebars');
//app.engine('hbs','pug')
//app.set('view engine', 'pug');
app.set('view engine', 'ejs');
app.set('views','views');
const path = require('path');
const errorController = require('./controllers/error')
const adminRoutes = require('./routes/admin');
const shopRoutes = require ('./routes/shop');

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))
app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use(errorController.get404);

//const routes = require('./routes');
const server = http.createServer(app);
server.listen(3000);