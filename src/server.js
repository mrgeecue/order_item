const Koa = require('koa');
const router = require('koa-router')();
const mount = require('koa-mount');

const app = new Koa();
app.use(mount(require('./data/inventory.json')));

if(require.main === module) {
     app.listen(3000); // default
}
