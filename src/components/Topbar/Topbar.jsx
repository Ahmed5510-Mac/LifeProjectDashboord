import { React } from 'react';
import style from './Topbar.module.css'
import { NotificationsNone } from '@material-ui/icons';
import LanguageIcon from '@material-ui/icons/Language';
import SettingsIcon from '@material-ui/icons/Settings';
import img1 from '../../assets/img1.jpg';
import { logout, reset } from '../../store/auth/authSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Topbar = () => {
    const  user  = useSelector((state) => state.auth);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate("/login");
    };

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
                    <img src={img1} alt="" className={style.avatar} />
                    {!user ?<>not found</>: (
                        <button className="btn" onClick={() => onLogout()}>
                            <span className="fa-solid fa-arrow-right-from-bracket text-danger"></span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    </>);
}

export default Topbar;