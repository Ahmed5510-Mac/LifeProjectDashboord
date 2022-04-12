import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';
import style from './App.module.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserList from './pages/UserList/UserList';
import ProductList from './pages/ProductList/ProductList';
import Product from './pages/Product/Product';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <div className={style.container}>
          <Sidebar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/users' element={<UserList />} />
            <Route path='/products' element={<ProductList />} />
            <Route path='/products/:productId' element={<Product />} />
            <Route path='*' />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
