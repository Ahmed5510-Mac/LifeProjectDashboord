import {React,useEffect} from 'react'
import { getUsers } from '../../store/auth/authSlice'
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate , NavLink } from 'react-router-dom';
import { editCustomer } from '../../store/user/userSlice';
import Sidebar from './../../components/Sidebar/Sidebar';
function BlackListUsers() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {blackListUsers ,isLoading}=useSelector((state)=>state.auth)
    useEffect(()=>{
   dispatch(getUsers())
    },[dispatch])

    const removeFromBlackList=(customer)=>{
      if(window.confirm("Are You Sure you want to remove this customer from Blacklist"))
    {
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
        dispatch(getUsers())

    }
  }
    const blackUsers = blackListUsers && blackListUsers.map((customer)=>(<tr key={customer._id}>
        <td scope="row" className="text-center">{customer.fullName}</td>
        <td className="text-center">{customer.customerEmail}</td>
        <td className="text-center">{customer.customerPhone}</td>
        <td className="text-center">{customer.role}</td>
        <td><span className='fa-solid fa-trash' role="button" onClick={() => removeFromBlackList(customer)}></span></td>
        <td><span className='fa-solid fa-pen-to-square' role="button" onClick={() => { navigate(`/users/${customer._id}`, { state: { customerData: customer } }) }} ></span></td>
      </tr>))
  return (
    <>
    <Sidebar /> 
    {blackListUsers && blackListUsers.length>0 ?<div className='container'><NavLink to="/users/add" className="btn btn-primary my-2">Add user</NavLink><h2 className='text-dark text-center my-2'>Black List Customers</h2><table className="table table-hover table-bordered table-striped">
        <thead>
          <tr>
            <th className="text-center">Customer Name</th>
            <th className="text-center">Customer Email</th>
            <th className="text-center">Customer Phone</th>
            <th className="text-center">Customer Role</th>
          </tr>
        </thead>
        <tbody>{blackUsers}</tbody>
      </table>
      </div>:<div className="text-center w-75 mx-auto" style={{height:"30vh"}}><h3 className='text-primary'>There is no Customers in Blacklist</h3></div>
      
    }
    </>
  )
}

export default BlackListUsers