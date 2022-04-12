import React from 'react'
import style from './Home.module.css';
import FeaturesInfo from './../../components/FeaturesInfo/FeaturesInfo';
import Chart from './../../components/Chart/Chart';
import { productsData } from '../../dummyData';
import WidgetSm from './../../components/WidgetSm/WidgetSm';
import WidgetLg from '../../components/WidgetLg/WidgetLg';

const Home = () => {
    return (<>
        <div className={style.home}>
            <FeaturesInfo />
            <Chart data={productsData} title='Sales Analytics' grid dataKey="Sales" />
            <div className={style.homeWidgets}>
                <WidgetSm /> 
                <WidgetLg />
            </div>
        </div>
    </>);
}

export default Home;