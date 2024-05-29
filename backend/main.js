//Import moduli
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')


//Connessione al database 
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "booksdb"
})


//Middleware
app.use(express.json())
app.use(cors())


//Rotte e richieste
app.get('/', (req,res)=>{
    res.send("Benvenuto nel backend!")
})

app.get('/books', (req,res)=>{
    const q = "select * from bookslist"
    db.query(q, (error,data)=>{
        if(error){
            return error
        }
        return res.json(data)
    })
})

app.post('/books', (req,res)=>{
    const q = "insert into bookslist (`title`, `price`, `description`, `cover`) VALUES (?)"
    const values =[
        // "title from backend", 
        // "description from backend", 
        // "cover from backend"
        req.body.title,
        req.body.price,
        req.body.description,
        req.body.cover
        ]
    db.query(q, [values], (error,data)=>{
        if(error){
            return error
        }
        return res.json(data)
    } )
})

app.put('/books/:id', (req,res)=>{
    const bookid = req.params.id
    const q = "update bookslist set `title` = ?, `price` = ?, `description` = ?, `cover` = ? where id = ? "
    const values =[
        req.body.title,
        req.body.price,
        req.body.description,
        req.body.cover
        ]
    db.query(q, [...values,bookid], (error,data)=>{
        if(error){
            return error
        }
        return res.json(data)
    })
})

app.delete('/books/:id', (req,res)=>{
    const bookid = req.params.id
    const q = "delete from bookslist where id = ?"
    db.query(q, [bookid], (error,data)=>{
        if(error){
            return error
        }
        return res.json(data)
    })
})


//Rotte inesistenti
app.use((req, res) => {
    res.status(404).send("Error 404 - Not Found")
})


//Lancio server
app.listen(3000, ()=>{
    console.log("Connected! Server is running...")
})