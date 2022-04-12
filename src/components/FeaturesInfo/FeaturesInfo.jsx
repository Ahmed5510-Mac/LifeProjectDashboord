import style from './FeaturesInfo.module.css';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpward from '@material-ui/icons/ArrowUpward';

const FeaturesInfo = () => {
    return (<>
        <div className={style.featured}>
            <div className={style.featuredItem}>
                <span className={style.featuredTitle}>Revanue</span>
                <div className={style.featuredMoneyContainer}>
                    <span className={style.featuredMoney}>$2,415</span>
                    <span className={style.featuredMoneyRate}>-11.4
                     <ArrowDownwardIcon className={style.featuredIcon} /></span>
                </div>
                <span className={style.featuredSub}>Compared to last month</span>
            </div>
            <div className={style.featuredItem}>
                <span className={style.featuredTitle}>Sales</span>
                <div className={style.featuredMoneyContainer}>
                    <span className={style.featuredMoney}>$4,415</span>
                    <span className={style.featuredMoneyRate}>-8.4 <ArrowDownwardIcon /></span>
                </div>
                <span className={style.featuredSub}>Compared to last month</span>
            </div>
            <div className={style.featuredItem}>
                <span className={style.featuredTitle}>Cost</span>
                <div className={style.featuredMoneyContainer}>
                    <span className={style.featuredMoney}>$5,415</span>
                    <span className={style.featuredMoneyRate}>+7.4 <ArrowUpward /></span>
                </div>
                <span className={style.featuredSub}>Compared to last month</span>
            </div>
        </div>
    </>);
}

export default FeaturesInfo;