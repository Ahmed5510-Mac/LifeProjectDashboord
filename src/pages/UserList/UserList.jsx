import { DataGrid } from '@material-ui/data-grid';
import { useSelector,useDispatch } from "react-redux";
import {useEffect} from 'react'
import { getCustomers,deleteCustomer} from './../../store/user/userSlice';
import{NavLink} from "react-router-dom"


const UserList = () => {
  const {customers,isLoading} = useSelector(state =>state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCustomers())
  }, [dispatch])

  const handleDelete = (_id) => {
    dispatch(deleteCustomer(_id))
  }
  const customersList = customers && customers.map((customer) => (<tr key={customer._id}>
            <td scope="row">{customer.fullName}</td>
            <td>{customer.customerEmail}</td>
            <td>{customer.customerPhone}</td>
            <td>{customer.role}</td>
            {/* <td>{customer.addresses.map((address)=>{
              {address}
            })}</td> */}
            <td><span className='fa-solid fa-trash' onClick={handleDelete}></span></td>
            <td><span className='fa-solid fa-pen-to-square'></span></td>
</tr>))
  return (<>
         {isLoading ? 'loading...' : <div className='container'><NavLink to="/users/add" className="btn btn-primary my-2">Add user</NavLink><table className="table table-hover table-bordered table-striped">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Customer Email</th>
            <th>Customer Phone</th>
            <th>Customer Role</th>
          </tr>
        </thead>
        <tbody>{customersList}</tbody>
        </table>
        </div>
        }
         
       
      
  </>);
}

export default UserList;