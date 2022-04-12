import style from './WidgetLg.module.css';
import img2 from '../../assets/img2.avif';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';

const WidgetLg = () => {
    return (<>
        <div className={style.widgetLg}>
            <h3 className={style.widgetLgTitle}>Latest transactions</h3>
            <table className={style.widgetLgTable}>
                <tr className={style.widgetLgTr}>
                    <th className={style.widgetLgTh}>Products</th>
                    <th className={style.widgetLgTh}>Date</th>
                    <th className={style.widgetLgTh}>Amount</th>
                    <th className={style.widgetLgTh}>Status</th>
                </tr>
                <tr className={style.widgetLgTr}>
                    <td className={style.widgetLgUser}>
                    <img src={img2} alt="" className={style.widgetLgImg} />
                    </td>
                    <td className={style.widgetLgDate}>2 june 2022</td>
                    <td className={style.widgetLgAmount}>222</td>
                    <td className={style.widgetLgAmount}>Approved</td>
                </tr>
                <tr className={style.widgetLgTr}>
                    <td className={style.widgetLgUser}>
                    <img src={img2} alt="" className={style.widgetLgImg} />
                    </td>
                    <td className={style.widgetLgDate}>2 june 2022</td>
                    <td className={style.widgetLgAmount}>222</td>
                    <td className={style.widgetLgAmount}>Approved</td>
                </tr>
                <tr className={style.widgetLgTr}>
                    <td className={style.widgetLgUser}>
                    <img src={img2} alt="" className={style.widgetLgImg} />
                    </td>
                    <td className={style.widgetLgDate}>2 june 2022</td>
                    <td className={style.widgetLgAmount}>222</td>
                    <td className={style.widgetLgAmount}>Approved</td>
                </tr>
            </table>
        </div>
    </>);
}

export default WidgetLg;