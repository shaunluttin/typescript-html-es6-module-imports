'use strict';

let koa = require('koa'),
    serve = require('koa-static');

let app = new koa();

// serve files in public folder (css, js etc)
app.use(serve(__dirname + '/public'));
app.use(serve(__dirname + '/dist'));

app.listen(4000);

console.log('localhost:4000');