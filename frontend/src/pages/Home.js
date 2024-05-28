import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <h1>HOMEPAGE</h1>
      <button> <Link to={'/libri'}> Vedi lista libri </Link> </button>
      <button> <Link to={'/libri/aggiungi'}> Aggiungi un libro alla raccolta </Link> </button>
    </>
  )
}

export default Home
