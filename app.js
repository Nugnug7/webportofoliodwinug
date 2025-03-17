const express   = require('express')
const session   = require('express-session')
const app       = express()
const port      = 3000


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
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))

// View 
app.set('view engine', 'ejs')
app.set('views', './views')





app.listen(port, ()=>{
    console.log(`Aplikasi sudah menyala, buka http://localhost:${port}`)
})