import { useSelector, useDispatch } from "react-redux";
import { useEffect, useHistory,useState } from 'react'
import { editCustomer, getCustomers } from './../../store/user/userSlice';
import { useNavigate, NavLink } from "react-router-dom"
import style from './UserList.module.css';
import Sidebar from './../../components/Sidebar/Sidebar';
import { getUsers } from './../../store/auth/authSlice';


const UserList = () => {
  const { customers, isLoading } = useSelector(state => state.users)

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const [currentPage, setCurrentPage] = useState(1)
  const [contentPerPage, setcontentPerPage] = useState(5)
  const pageNumbers = []


  useEffect(() => {
    dispatch(getCustomers())
    dispatch(getUsers())
  }, [dispatch])

  const addToBlackList = (customer) => {
    if(window.confirm("Are You Sure you want to add this customer to Blacklist"))
    {
    const formData = new FormData();
    formData.append('fullName', customer.fullName)
    formData.append('image', customer.image)
    formData.append('customerPhone', customer.customerPhone)
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

    dispatch(editCustomer({ formData: formData, id: customer._id }))
    dispatch(getUsers())
    navigate("/blackListCustomers")
    }

  }
  const removeFromBlackList = (customer) => {
    if(window.confirm("Are You Sure you want to remove this customer from Blacklist"))
    {    const formData = new FormData();
    formData.append('fullName', customer.fullName)
    formData.append('image', customer.image)
    formData.append('customerPhone', customer.customerPhone)
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

    dispatch(editCustomer({ formData: formData, id: customer._id }))
    navigate("/users")
    dispatch(getCustomers())
  }

}

  for (let index = 1; index < Math.ceil(contentPerPage); index++) {
    pageNumbers.push(index)
  }

  const indexOfLastItem = currentPage * contentPerPage
  const indexOfFirstItem = indexOfLastItem - contentPerPage

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const customersList = customers && customers.map((customer) => (<tr key={customer._id} style={{ textDecoration: `${customer.blackList ? "line-through" : " "}` }}>
    <td scope="row" className="text-center">{customer.fullName}</td>
    <td className="text-center">{customer.customerEmail}</td>
    <td className="text-center">{customer.customerPhone}</td>
    <td className="text-center">{customer.role}</td>
    <td className="text-center">{customer.blackList ? <span className='fa-solid fa-ban' role="button" onClick={() => removeFromBlackList(customer)}></span> :
      <span className='fa-solid fa-ban' role="button" onClick={() => addToBlackList(customer)}></span>}</td>
    <td><span className='fa-solid fa-pen-to-square' role="button" onClick={() => { navigate(`/users/${customer._id}`, { state: { customerData: customer } }) }} ></span></td>
  </tr>))

  return (<>
    <Sidebar />
    <div className={style.userList}>

      {isLoading ? 'loading...' : <div className='container'>
        <h2 className="text-center fw-bold text-dark my-2">Customers List</h2>
        <NavLink to="/users/add" className="btn btn-primary my-2">Add Customer</NavLink><table className="table table-hover table-bordered table-striped">
          <thead>
            <tr>
              <th className="text-center">Customer Name</th>
              <th className="text-center">Customer Email</th>
              <th className="text-center">Customer Phone</th>
              <th className="text-center">Customer Role</th>
            </tr>
          </thead>
          <tbody>{customersList.slice(indexOfFirstItem, indexOfLastItem)}</tbody>
        </table>
        <ul className={style.listItem}>
        <i class="fa-solid fa-arrow-left my-2 mx-2" style={{cursor:'pointer'}}></i>
          {pageNumbers.map(number => (<li className={style.ulItem} key={number}>
            <NavLink to="/users"  style={{textDecoration:'none',border:'solid 2px grey',color:'black',padding:'4px',paddingLeft:'7px',paddingRight:'7px',borderRadius:'5px',}}  onClick={() => paginate(number)}>{number}</NavLink>
          </li>))}
          <i class="fa-solid fa-arrow-right my-2 mx-2" style={{cursor:'pointer'}}></i> 
        </ul>
       
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