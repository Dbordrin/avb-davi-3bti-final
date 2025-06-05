import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  return (
    <BrowserRouter>
      <header className="bg-gray-800 text-white p-4 flex justify-between">
        <h1 className="text-xl">Minha Aplicação</h1>
        <nav className="space-x-4">
          <Link to="/">Início</Link>
          <Link to="/favoritos">Favoritos</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
