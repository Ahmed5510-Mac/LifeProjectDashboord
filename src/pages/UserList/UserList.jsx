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
            <td scope="row" className="text-center">{customer.fullName}</td>
            <td className="text-center">{customer.customerEmail}</td>
            <td className="text-center">{customer.customerPhone}</td>
            <td className="text-center">{customer.role}</td>
            <td className="text-center"><img src={customer.image} alt="image" style={{width:"50px",height:"50px",borderRadius:"50%"}}/></td>
            <td><ul>{customer.customerAddresses.map((address,i)=>(<li key={i}><ul className='list-unstyled'>
              <li>Country : {address.country}</li>
              <li>City : {address.city}</li>
              <li>Street name : {address.streetName}</li>
              <li> Building Number{address.buildingNumber}</li>
              <li> Floor Number{address.floorNumber}</li>
              </ul></li>))}</ul></td>
            <td><span className='fa-solid fa-trash' role="button" onClick={()=>handleDelete(customer._id)}></span></td>
            <td><span className='fa-solid fa-pen-to-square' role="button" ></span></td>
</tr>))
  return (<>
         {isLoading ? 'loading...' : <div className='container'><NavLink to="/users/add" className="btn btn-primary my-2">Add user</NavLink><table className="table table-hover table-bordered table-striped">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Customer Email</th>
            <th>Customer Phone</th>
            <th>Customer Role</th>
            <th>Customer image</th>
            <th>Customer Addresses</th>
          </tr>
        </thead>
        <tbody>{customersList}</tbody>
        </table>
        </div>
        }
         
       
      
  </>);
}

export default UserList;