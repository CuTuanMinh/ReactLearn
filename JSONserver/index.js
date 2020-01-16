const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(8080, () => {
  console.log('JSON Server is running')
})

// install => npm install json-server --save-dev
// run JSON server => node index.js 

// localhost:8080/products => appear data of db.json
// note: 'products' is collection name in db.json