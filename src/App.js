import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';
import style from './App.module.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserList from './pages/UserList/UserList';
import ProductList from './pages/ProductList/ProductList';
import ProductAdd from './pages/ProductAdd/ProductAdd';
import UserAdd from './pages/UserAdd/UserAdd';
import UserEdit from './pages/UserEdit/UserEdit';
import ProductEdit from './pages/ProductEdit/ProductEdit';
import CategoryAdd from './pages/CategoryAdd/CategoryAdd';
import CategoryEdit from './pages/CategoryEdit/CategoryEdit';
import CategoryList from './pages/CategoryList/CategoryList';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import DiscountList from './pages/DiscountList/DiscountList';
import DiscountAdd from './pages/DiscountAdd/DiscountAdd';
import DiscountEdit from './pages/discountEdit/DiscountEdit';
import OrdersList from './pages/OrdersList/OrdersList.jsx';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <div className={style.container}>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/users' element={<UserList />} />
            <Route path='/discounts' element={<DiscountList />} />
            <Route path='/users/add' element={<UserAdd />} />
            <Route path='/discounts/add' element={<DiscountAdd />} />
            <Route path='/discounts/:id' element={<DiscountEdit />} />
            <Route path='/orders' element={<OrdersList />} />

            <Route path='/users/:id' element={<UserEdit />} />
            <Route path='/category' element={<CategoryList />} />
            <Route path='/category/add' element={<CategoryAdd />} />
            <Route path='/category/:id/edit' element={<CategoryEdit />} />
            <Route path='/products' element={<ProductList />} />
            <Route path='/products/add' element={<ProductAdd />} />
            <Route path='/products/:id' element={<ProductEdit />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
