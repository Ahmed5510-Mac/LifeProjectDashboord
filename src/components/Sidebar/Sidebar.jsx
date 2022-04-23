import React from 'react'
import style from './Sidebar.module.css'
import LineStyleIcon from '@material-ui/icons/LineStyle';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import { NavLink } from "react-router-dom";


const Sidebar = () => {
    return (<>
        <div className={style.sidebar}>
            <div className={style.sidebarWrapper}>
                <div className={style.sidebarMenu}>
                    <h3 className={style.sidebarTitle}>
                        Quick Menu
                    </h3>
                    <ul className={style.sidebarList}>
                        <NavLink to="/home" className={style.sidebarListItem}>
                            <LineStyleIcon className={style.sidebarIcon} />Home
                        </NavLink>
                        <NavLink to="/users" className={style.sidebarListItem}>
                            <span className='fa-solid  p-1 fa-user me-1'></span>
                            Users
                        </NavLink>
                        <NavLink to="/blackListCustomers" className={style.sidebarListItem}>
                            <span className='fa-solid fa-user-slash p-1 me-1'></span>
                            BlackList Users
                        </NavLink>
                        <NavLink to="/products" className={style.sidebarListItem}>
                            <span className='fa-brands  p-1 fa-product-hunt me-1'></span>
                            Products
                        </NavLink>
                        <h3 className={style.sidebarTitle}>
                            Dashboard
                        </h3>
                        <NavLink to="/discounts" className={style.sidebarListItem}>
                            <span className='fa-solid fa-percent me-1'></span>
                            Discounts
                        </NavLink>
                        <NavLink to="/orders" className={style.sidebarListItem}>
                           <span className='fa-solid fa-cart-shopping me-1'></span>
                           Pending Orders
                        </NavLink>
                        <NavLink to="/confirmedOrders" className={style.sidebarListItem}><span className='fa-solid fa-cart-shopping me-1'></span>
                            Confirmed orders
                            </NavLink>
                            <NavLink to="/rejectedOrders" className={style.sidebarListItem}><span className='fa-solid fa-cart-shopping me-1'></span>
                            Rejected orders
                            </NavLink>
                        <NavLink to="/category" className={style.sidebarListItem}>
                            <span className='fa-brands fa-deezer p-1  me-1'></span>
                            Categories
                        </NavLink>
                        <h3 className={style.sidebarTitle}>
                            Staff
                        </h3>
                        <NavLink to="/employees" className={style.sidebarListItem}>
                            <span className='fa-solid fa-users p-1  me-1'></span>
                            Employees
                        </NavLink>
                        <NavLink to="/stores" className={style.sidebarListItem}>
                            <span className='fa-solid fa-store p-1  me-1'></span>
                            Store
                        </NavLink>
                        <NavLink to="/reports" className={style.sidebarListItem}>
                            <span className='fa-solid fa-file p-1  me-1'></span>
                            Reports
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    </>);
}

export default Sidebar;
