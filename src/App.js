import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Home from './pages/Home';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
import ProductDetails from './pages/ProductDetails';

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
            <Route path='/products/add' element={<AddProduct />} />
            <Route path='/products/:productID' element={<ProductDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
