import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Books from './pages/Books';
import AddBook from './pages/AddBook';
import UpdateBook from './pages/UpdateBook';
import Error404 from './pages/Error404';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/libri" element={<Books/>}/>
          <Route path="/libri/aggiungi" element={<AddBook/>}/>
          <Route path="/libri/modifica/:id" element={<UpdateBook/>}/>
          <Route path='*' element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
