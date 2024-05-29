import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

function UpdateBook() {
  const [book, setBook] = useState({
    title: "",
    price: null,
    description: "",
    cover: ""
  })

  const navigate = useNavigate()
  const location = useLocation()
  const bookpath = location.pathname.split("/")[3]
  

  
  function addInput(e){
    setBook((prev)=>({...prev, [e.target.name]:e.target.value}))
  }

  async function updateBook(e){
    e.preventDefault()
    try{
      await axios.put(`http://localhost:3000/books/${bookpath}`, book)
      navigate('/libri')
    } 
    catch (error) {
      console.error("Errore nella modifica del libro:", error)
    }
  }
  // console.log(book)
  // console.log(updateBook)

  return (
    <>
      <h2>Modifica il libro</h2>
      <div className="form">
        <input type="text" placeholder="title" name="title" onChange={addInput}></input>
        <input type="number" placeholder="price" name="price" onChange={addInput}></input>
        <input type="text" placeholder="description" name="description" onChange={addInput}></input>
        <input type="text" placeholder="cover" name="cover" onChange={addInput}></input>
        <button onClick={updateBook}>Modifica libro</button>
      </div>
    </>
  )
}

export default UpdateBook

