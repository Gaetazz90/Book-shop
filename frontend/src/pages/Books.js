import React from 'react'
import { useState } from 'react'
import  { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function Books() {

  const [books,setBooks] = useState([])

  useEffect(()=>{
    async function fetchAllBooks(){
      try{
        const response = await axios.get('http://localhost:3000/books')
        setBooks(response.data)
      } 
      catch(error){
        console.log(error)
      }
    }
    fetchAllBooks()
  },[])

  async function cancelBook(id){
    try {
      await axios.delete('http://localhost:3000/books/'+id)
      window.location.reload()
    } 
    catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <h1> TUTTI I LIBRI DISPONIBILI </h1>
      <div className="books-container">
        {books.map(book=>(
          <div className="book-card" key={book.id}>
            {book.cover && <img className="book-cover" src={book.cover} alt="book-cover"></img>}
            <h3>{book.title}</h3>
            <p>Prezzo: {book.price}€</p>
            <p>{book.desc}</p>
            <button className="deletebtn" onClick={()=>cancelBook(book.id)}>Elimina</button>
            <button className="updatebtn"><Link to={`/libri/modifica/${book.id}`}>Modifica</Link></button>
          </div>
        )
        )}
      </div>
      <button> <Link to={'/libri/aggiungi'}> Aggiungi un libro alla raccolta </Link> </button>
      <button> <Link to={'/'}> Torna alla homepage </Link> </button>
    </>
  )
}

export default Books
