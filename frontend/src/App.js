import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Books from './pages/Books';
import AddBook from './pages/AddBook';
import UpdateBook from './pages/UpdateBook';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/libri" element={<Books/>}/>
          <Route path="/libri/aggiungi" element={<AddBook/>}/>
          <Route path="/libri/modifica" element={<UpdateBook/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
