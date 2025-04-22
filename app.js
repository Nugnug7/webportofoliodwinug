const express           = require('express')
const session           = require('express-session')
const cookieParser      = require('cookie-parser')
const app               = express()
const port              = 3000
const c_homepage        = require('./controller/c_homepage')
const c_contactpage     = require('./controller/c_contactpage')


app.use(cookieParser('secret'))
app.use(session({
    secret: 'rahasia',
    resave: true,
    saveUninitialized: false,
    cookie:{
        maxAge: (1000 * 60 )* 30
        // batas sesison expired
        // 1000 milidetik * 60 = 1 menit
        // 1 menit * 30 = 1/2 jam
    }
}))


// Express
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));

// Set View engine 
app.set('view engine', 'ejs')
app.set('views', './views')

//  Routing Website 
app.get('/', c_homepage.home_first)
app.get('/mycareer', c_homepage.mycareer)
app.get('/contact', c_contactpage.contactpage)
app.post('/contact/addmessage', c_contactpage.addmessage)




app.listen(port, ()=>{
    console.log(`Aplikasi sudah menyala, buka http://localhost:${port}`)
})