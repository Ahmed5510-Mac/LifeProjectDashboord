import LinearChart from '../../components/LinearChart/LinearChart'
import PieChart from '../../components/PieChart/PieChart'
import Chart from '../../components/Chart/Chart'
import { productsData } from '../../dummyData'
import { data } from '../../data'
import Sidebar from './../../components/Sidebar/Sidebar';
import style from './Reports.module.css';

const Reports = () => {
  return (
    <>
      <Sidebar />   
      <div className={style.reportsList}>
      <h2 className='mb-4 text-center fw-bold'>Reports</h2>
      <div className="container-fluid ">
        <div className="row ">
          <div className="col-4 mt-3">
            <LinearChart data={data} />
          </div>
          <div className="col-1 ">
            <PieChart data={data} />
          </div>
        </div>
        <div className="row">
          <div style={{ width: '100%' }}>
            <Chart
              data={productsData}
              title="Sales Analytics"
              grid
              dataKey="Sales"
            />
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Reports
