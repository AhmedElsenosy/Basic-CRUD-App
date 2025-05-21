import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='row'>
        <div className='col-2 sidebar'>
          <SideBar />
        </div>
        <div className='col-10'>
          <Routes >
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
