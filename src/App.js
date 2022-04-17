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
            <Route path='/users/add' element={<UserAdd/>} />
            <Route path='/users/:id' element={<UserEdit />} />
            <Route path='/products' element={<ProductList />} />
            <Route path='/products/add' element={<ProductAdd />} />
            <Route path='/products/:id' element={<ProductEdit />} />
            <Route path='*' />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
