var mount = require('koa-mount');
var koa = require('koa');
var app = koa();
var a = koa();
a.use(function *(next){
	console.log('step1');
	yield next;
	
	this.body = 'Hello';
});
a.use(function * (){
	console.log('temp');
});
var b = koa();
b.use(function *(next){
	console.log('step2');
    yield next;
    this.body = 'world';
});
app.use(mount('/hello',a));
app.use(mount('/world',b));

app.listen(3000);