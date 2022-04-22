import { useSelector, useDispatch } from "react-redux";
import { useEffect, useHistory } from 'react'
import { editCustomer, getCustomers } from './../../store/user/userSlice';
import { useNavigate, NavLink } from "react-router-dom"
import style from './UserList.module.css';
import Sidebar from './../../components/Sidebar/Sidebar';
import { getUsers } from './../../store/auth/authSlice';


const UserList = () => {
  const { customers, isLoading } = useSelector(state => state.users)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getCustomers())
    dispatch(getUsers())
  }, [dispatch])

  const addToBlackList = (customer) => {
    
      const formData = new FormData();
      formData.append('fullName',customer.fullName)
      formData.append('image',customer.image)
      formData.append('customerPhone',customer.customerPhone)
      formData.append('role', customer.role)
      formData.append('customerAddress', JSON.stringify(
       {
         country: customer.customerAddress.country,
         city: customer.customerAddress.city,
         streetName: customer.customerAddress.streetName,
         buildingNumber: customer.customerAddress.buildingNumber,
         floorNumber: customer.customerAddress.floorNumber,
       }
     ))
     formData.append('blackList', true)
    
      dispatch(editCustomer({formData:formData,id:customer._id}))
      dispatch(getUsers())
      navigate("/blackListCustomers")
    

  }
  const removeFromBlackList=(customer)=>{
    // confirm("Are You sure to remove from Blacklist")
    const formData = new FormData();
    formData.append('fullName',customer.fullName)
    formData.append('image',customer.image)
    formData.append('customerPhone',customer.customerPhone)
    formData.append('role', customer.role)
    formData.append('customerAddress', JSON.stringify(
     {
       country: customer.customerAddress.country,
       city: customer.customerAddress.city,
       streetName: customer.customerAddress.streetName,
       buildingNumber: customer.customerAddress.buildingNumber,
       floorNumber: customer.customerAddress.floorNumber,
     }
   ))
   formData.append('blackList', false)
   
   dispatch(editCustomer({formData:formData,id:customer._id}))
   navigate("/users")
   dispatch(getCustomers())
}

  const customersList = customers && customers.map((customer) => (<tr key={customer._id} style={{textDecoration:`${customer.blackList ? "line-through" : " "}`}}>
    <td scope="row" className="text-center">{customer.fullName}</td>
    <td className="text-center">{customer.customerEmail}</td>
    <td className="text-center">{customer.customerPhone}</td>
    <td className="text-center">{customer.role}</td>
    <td className="text-center">{customer.blackList ? <span className='fa-solid fa-ban' role="button" onClick={() => removeFromBlackList(customer)}></span>:
    <span className='fa-solid fa-ban' role="button" onClick={() => addToBlackList(customer)}></span> }</td>
    <td><span className='fa-solid fa-pen-to-square' role="button" onClick={() => { navigate(`/users/${customer._id}`, { state: { customerData: customer } }) }} ></span></td>
  </tr>))

  return (<>
   <Sidebar /> 
    <div className={style.userList}>
      {isLoading ? 'loading...' : <div className='container'><NavLink to="/users/add" className="btn btn-primary my-2">Add Customer</NavLink><h2 className="text-center text-dark my-2">Customers List</h2><table className="table table-hover table-bordered table-striped">
        <thead>
          <tr>
            <th className="text-center">Customer Name</th>
            <th className="text-center">Customer Email</th>
            <th className="text-center">Customer Phone</th>
            <th className="text-center">Customer Role</th>
          </tr>
        </thead>
        <tbody>{customersList}</tbody>
      </table>
      </div>
      }
    </div>
  </>);
}

export default UserList;
/*

   <td><ul className='list-unstyled'>
      <li>Country : {customer.customerAddress.country}</li>
      <li>City : {customer.customerAddress.city}</li>
      <li>Street name : {customer.customerAddress.streetName}</li>
      <li> Building Number{customer.customerAddress.buildingNumber}</li>
      <li> Floor Number{customer.customerAddress.floorNumber}</li>
    </ul></td>

*/