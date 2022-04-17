import React from 'react'
import style from './Sidebar.module.css'
import LineStyleIcon from '@material-ui/icons/LineStyle';
import TimelineIcon from '@material-ui/icons/Timeline';
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
                        <NavLink to="/" className={style.sidebarListItem}>
                            <LineStyleIcon className={style.sidebarIcon} />Home
                        </NavLink>
                        <li className={style.sidebarListItem}>
                            <span className='fa-solid  p-1 fa-chart-simple me-1'></span>
                            Analytics
                        </li>
                        <li className={style.sidebarListItem}>
                            <TrendingUpIcon className={style.sidebarIcon} />Sales
                        </li>
                    </ul>
                </div>
                <div className={style.sidebarMenu}>
                    <h3 className={style.sidebarTitle}>
                        Quick Menu
                    </h3>
                    <ul className={style.sidebarList}>
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
                        <li className={style.sidebarListItem}>
                            <span className='fa-solid  p-1 fa-receipt me-1'></span>Reports
                        </li>
                    </ul>
                </div>
                <div className={style.sidebarMenu}>
                    <h3 className={style.sidebarTitle}>
                        Notifications
                    </h3>
                    <ul className={style.sidebarList}>
                        <li className={style.sidebarListItem}>
                            <span className='fa-solid  p-1 fa-inbox me-1'></span>
                            Mail
                        </li>
                        <li className={style.sidebarListItem}>
                            <span className='fa-solid  p-1 fa-comments me-1'></span>
                            Feedback
                        </li>
                        <li className={style.sidebarListItem}>
                            <span className='fa-solid  p-1 fa-message me-1'></span>
                            Messages
                        </li>
                    </ul>
                </div>
                <div className={style.sidebarMenu}>
                    <h3 className={style.sidebarTitle}>
                        Staff
                    </h3>
                    <ul className={style.sidebarList}>
                        <li className={style.sidebarListItem}>
                            <LineStyleIcon className={style.sidebarIcon} />Manage
                        </li>
                        <li className={style.sidebarListItem}>
                            <span className='fa-solid  p-1 fa-chart-simple me-1'></span>
                            Analytics
                        </li>
                        <li className={style.sidebarListItem}>
                            <span className='fa-solid  p-1 fa-receipt me-1'></span>
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>);
}

export default Sidebar;
