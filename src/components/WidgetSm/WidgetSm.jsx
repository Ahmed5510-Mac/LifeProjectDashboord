import style from './WidgetSm.module.css';
import img2 from '../../assets/img2.avif';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';

const WidgetSm = () => {
    return (<>
        <div className={style.widgetSm}>
            <span className={style.widgetSmTitle}>New Products</span>
            <ul className={style.widgetSmList}>
                <li className={style.widgetSmListItem}>
                    <img src={img2} alt="" className={style.widgetSmImg} />
                    <div className={style.widgetSmProduct}>
                        <span className={style.widgetSmProductName}>Panadol</span>
                    </div>
                </li>
                <li className={style.widgetSmListItem}>
                    <img src={img3} alt="" className={style.widgetSmImg} />
                    <div className={style.widgetSmProduct}>
                        <span className={style.widgetSmProductName}>Comtrex</span>
                    </div>
                </li>
                <li className={style.widgetSmListItem}>
                    <img src={img4} alt="" className={style.widgetSmImg} />
                    <div className={style.widgetSmProduct}>
                        <span className={style.widgetSmProductName}>Congestal</span>
                    </div>
                </li>
                <li className={style.widgetSmListItem}>
                    <img src={img4} alt="" className={style.widgetSmImg} />
                    <div className={style.widgetSmProduct}>
                        <span className={style.widgetSmProductName}>Coldfree</span>
                    </div>
                </li>
            </ul>
        </div>
    </>);
}

export default WidgetSm;