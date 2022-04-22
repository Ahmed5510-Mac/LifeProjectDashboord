import style from './FeaturesInfo.module.css';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpward from '@material-ui/icons/ArrowUpward';

const FeaturesInfo = () => {
    return (<>
        <div className={style.featured}>
            <div className={style.featuredItem}>
                <span className={style.featuredTitle}>Revanue</span>
                <div className={style.featuredMoneyContainer}>
                    <span className={style.featuredMoney}>2,415 LE</span>
                </div>
            </div>
            <div className={style.featuredItem}>
                <span className={style.featuredTitle}>Sales</span>
                <div className={style.featuredMoneyContainer}>
                    <span className={style.featuredMoney}>4,415 LE</span>     
                </div>
             
            </div>
            <div className={style.featuredItem}>
                <span className={style.featuredTitle}>Cost</span>
                <div className={style.featuredMoneyContainer}>
                    <span className={style.featuredMoney}>5,415 LE</span>
                </div>
            </div>
        </div>
    </>);
}

export default FeaturesInfo;