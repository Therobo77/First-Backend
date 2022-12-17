const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3000

server.use(middlewares)
server.use(router)
server.listen(port, () => {
  console.log('JSON Server is running')
})

// npm init
// npm i json-server
// heroku login or npm i heroku -g
// heroku create

// go to heroku app --go to deployment
// copy the command 
// then open app again

// git add .
// git commit -am "make it better"
// git push heroku master


// https://young-plains-09698.herokuapp.com/employee


//  mera khabar 

// mai agar kho jau to mere hone ki khabar use jarrur de dena !
// wo bechari har din mujhe jina sikhati hai !!

// mai agar thak jau to mere thakne ki khabar use mat dena !
// wo bechari har din mujhe ladna sikhati hai !!

// mai agar so jau to mere rone ki khabar use mat dena !
// wo bechari har din mujhe hasna sikhati hai !!

// mai jab na khau to use , mat batana !
// wo wanaha dur baithkar ,sirf mere lie ruk jati hai !!

// mai agar bate na batau , phone na uthau to use mat batana !
// ki 
// yanaha dur ,tanha baithkar mujhe bhi uski badi yad aati hai !!