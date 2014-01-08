var router = require('koa-route');
var views = require('koa-render');
var serve = require('koa-static');
var koa = require('koa');
var app = koa();

app.use(serve('.'));

app.use(views('./views', {
    map: {
        html: 'underscore'
    },
    cache: false
}));

app.use(router.get('/', function *(next){
    this.body = yield this.render('index');
}));

app.listen(3000);