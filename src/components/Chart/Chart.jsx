import style from './Chart.module.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = ({title,data,dataKey,grid}) => {

  
    return (<>
        <div className={style.chart}>
            <h3 className={style.chartTitle}>{title}</h3>
            <ResponsiveContainer width='100%' aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke='#5550bd' />
                    <Line type='monotone' dataKey={dataKey} />
                    <YAxis />
                    <Tooltip />
                   {grid && <CartesianGrid stroke='#e0dfdf' />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    </>);
}

export default Chart;