import Sidebar from './../../components/Sidebar/Sidebar';
import style from './Employees.module.css';

const Employees = () => {

    return (<>
        <Sidebar />
        <div className={style.employeesList}>
            employees
        </div>

    </>);
}

export default Employees;