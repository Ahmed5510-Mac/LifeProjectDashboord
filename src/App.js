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
import Reports from './pages/Reports/Reports';
import EmployeesList from './pages/EmployeesList/EmployeesList';
import EmployeesAdd from './pages/EmployeesAdd/EmployeesAdd';
import EmployeesEdit from './pages/EmployeesEdit/EmployeesEdit';
import StoreList from './pages/StoreList/StoreList';
import StoreAdd from './pages/StoreAdd/StoreAdd';
import StoreEdit from './pages/StoreEdit/StoreEdit';
import ConfirmedOrders from  './pages/OrdersList/ConfirmedOrders/ConfirmedOrders';
import RejectedOrders from  './pages/OrdersList/RejectedOrders/RejectedOrders';
import OrdersEdit from "./pages/OrdersEdit/OrdersEdit"
import BlackListUsers from './pages/UserList/BlackListUsers';
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
            <Route path='/blackListCustomers' element={<BlackListUsers />} />
            <Route path='/users/add' element={<UserAdd />} />
            <Route path='/users/:id' element={<UserEdit />} />

            <Route path='/discounts' element={<DiscountList />} />
            <Route path='/discounts/add' element={<DiscountAdd />} />
            <Route path='/discounts/:id' element={<DiscountEdit />} />

            <Route path='/orders' element={<OrdersList />} />
            <Route path='/orders/:id' element={<OrdersEdit />} />
            <Route path='/rejectedOrders' element={<RejectedOrders />} />
            <Route path='/confirmedOrders' element={<ConfirmedOrders />} />

            <Route path='/category' element={<CategoryList />} />
            <Route path='/category/add' element={<CategoryAdd />} />
            <Route path='/category/:id/edit' element={<CategoryEdit />} />
            <Route path='/products' element={<ProductList />} />
            <Route path='/products/add' element={<ProductAdd />} />
            <Route path='/products/:id' element={<ProductEdit />} />

            <Route path='/stores' element={<StoreList />} />
            <Route path='/stores/add' element={<StoreAdd />} />
            <Route path='/stores/:id/edit' element={<StoreEdit />} />
            
            
            <Route path='/login' element={<Login />} />
            <Route path='/reports' element={<Reports />} />
            <Route path='/employees' element={<EmployeesList />} />
            <Route path='/employees/add' element={<EmployeesAdd />} />
            <Route path='/employees/:id' element={<EmployeesEdit />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
