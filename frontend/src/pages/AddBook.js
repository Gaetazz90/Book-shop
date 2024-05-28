import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function AddBook() {
  const [book, setBook] = useState({
    title: "",
    price: null,
    description: "",
    cover: ""
  })

  const navigate = useNavigate()
  
  function addInput(e){
    setBook((prev)=>({...prev, [e.target.name]:e.target.value}))
  }

  async function addBook(e){
    e.preventDefault()
    try{
      await axios.post('http://localhost:3000/books', book)
      navigate('/libri')
    } 
    catch (error) {
      console.error("Errore nell'aggiunta del libro:", error)
    }
  }

  return (
    <>
      <h2>Aggiungi un nuovo libro</h2>
      <div className="form">
        <input type="text" placeholder="title" name="title" onChange={addInput}></input>
        <input type="number" placeholder="price" name="price" onChange={addInput}></input>
        <input type="text" placeholder="description" name="description" onChange={addInput}></input>
        <input type="text" placeholder="cover" name="cover" onChange={addInput}></input>
        <button onClick={addBook}>Aggiungi libro</button>
      </div>
    </>
  )
}

export default AddBook
