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
                        Dashboard
                    </h3>
                    <ul className={style.sidebarList}>
                        <NavLink to="/home" className={style.sidebarListItem}>
                            <LineStyleIcon className={style.sidebarIcon} />Home
                        </NavLink>
                        <li className={style.sidebarListItem}>
                            <TrendingUpIcon className={style.sidebarIcon} />Sales
                        </li>
                        <NavLink to="/users" className={style.sidebarListItem}>
                            <span className='fa-solid  p-1 fa-user me-1'></span>
                            Users
                        </NavLink>
                        <NavLink to="/products" className={style.sidebarListItem}>
                            <span className='fa-brands  p-1 fa-product-hunt me-1'></span>
                            Products
                        </NavLink>
                        <NavLink to="/category" className={style.sidebarListItem}>
                            <span className='fa-brands fa-deezer p-1  me-1'></span>
                            Categories
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    </>);
}

export default Sidebar;
