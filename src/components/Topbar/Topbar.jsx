import { React } from 'react';
import style from './Topbar.module.css'
import {NotificationsNone} from '@material-ui/icons';
import LanguageIcon from '@material-ui/icons/Language';
import SettingsIcon from '@material-ui/icons/Settings';
import img1 from '../../assets/img1.jpg';

const Topbar = () => {
    return (<>
        <div className={style.topbar}>
            <div className={style.topbarWrapper}>
                <div className={style.topLeft}>
                    <span className={style.logo}>Life</span>
                </div>
                <div className={style.topRight}>
                  
                    <div className={style.topbarIconContainer}>
                        <SettingsIcon />
                    </div>
                    <img src={img1} alt="" className={style.avatar}/>
                </div>
            </div>
        </div>
    </>);
}

export default Topbar;