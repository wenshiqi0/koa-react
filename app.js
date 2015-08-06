/**
 * Created by Winsky on 15/8/5.
 */
var app = require('koa')();
var route = require('koa-route');
var logger = require('koa-logger');
var render = require('koa-swig');
var path = require('path');

app.use(logger());
app.context.render = render({
    root:path.join(__dirname,'./public/views'),
    autoescape:true,
    ext:'html'
})

app.use(require('koa-static')('./public/static'));
app.use(route.get('/',function*(){
    this.setStatuCOde = 200;
    this.type = 'text/html';
    this.body = yield this.render('index');
}))

app.listen(3000);
