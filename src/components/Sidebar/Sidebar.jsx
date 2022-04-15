import React from 'react'
import style from './Sidebar.module.css'
import LineStyleIcon from '@material-ui/icons/LineStyle';
import TimelineIcon from '@material-ui/icons/Timeline';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import { useNavigate , NavLink } from "react-router-dom";


const Sidebar = () => {
    const navigate = useNavigate()
    return (<>
        <div className={style.sidebar}>
            <div className={style.sidebarWrapper}>
                <div className={style.sidebarMenu}>
                    <h3 className={style.sidebarTitle}>
                        Dashboard
                    </h3>
                    <ul className={style.sidebarList}>
                        <li className={style.sidebarListItem}>
                            <LineStyleIcon className={style.sidebarIcon} />Home
                        </li>
                        <li className={style.sidebarListItem}>
                            <TimelineIcon className={style.sidebarIcon} />Analytics
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
                        <NavLink to ="/users" className={style.sidebarListItem}>
                            <LineStyleIcon className={style.sidebarIcon} />Users
                        </NavLink>
                        <li className={style.sidebarListItem}>
                            <TimelineIcon className={style.sidebarIcon} />Products
                        </li>
                        <li className={style.sidebarListItem}>
                            <TrendingUpIcon className={style.sidebarIcon} />Categories
                        </li>
                        <NavLink to ="/reports" className={style.sidebarListItem}>
                           <TrendingUpIcon className={style.sidebarIcon} />Reports 
                        </NavLink>
                    </ul>
                </div>
                <div className={style.sidebarMenu}>
                    <h3 className={style.sidebarTitle}>
                        Notifications
                    </h3>
                    <ul className={style.sidebarList}>
                        <li className={style.sidebarListItem}>
                            <LineStyleIcon className={style.sidebarIcon} />Mail
                        </li>
                        <li className={style.sidebarListItem}>
                            <TimelineIcon className={style.sidebarIcon} />Feedback
                        </li>
                        <li className={style.sidebarListItem}>
                            <TrendingUpIcon className={style.sidebarIcon} />Messages
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
                            <TimelineIcon className={style.sidebarIcon} />Analytics
                        </li>
                        <li className={style.sidebarListItem}>
                            <TrendingUpIcon className={style.sidebarIcon} />Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>);
}

export default Sidebar;