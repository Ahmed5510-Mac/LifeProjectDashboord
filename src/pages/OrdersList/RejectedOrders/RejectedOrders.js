import {React,useEffect} from 'react'
import Sidebar from './../../../components/Sidebar/Sidebar';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate ,NavLink} from 'react-router-dom';
import { getOrders } from '../../../store/orders/ordersSlice';

function RejectedOrders() {
    const { orders,rejectedOrders, isLoading } = useSelector(state => state.order)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getOrders())
      }, [dispatch])
   
   
    const ordersList = rejectedOrders && rejectedOrders.map((order) => (<tr key={order._id}>
        <td scope="row">{order.customerId.fullName}</td>
        <td>{order.receipt.total} LE</td>
        <td ><ul>{order.receipt.products.map((product)=>(
         <li key={product._id}>{`${product.productName }`}</li>
        )
        )}</ul>
        </td>
        <td style={{color:"red"}}>{order.status}</td>
        <td>{order.orderDate.requestDate.split('T')[0]}</td>
        <td>{order.orderDate.deliverDate.split('T')[0]}</td>
        {/* <td >{<span>
              <span className='fa-solid fa-circle-check text-success me-3 fa-lg'role="button" onClick={() => {handleEdit(order,true)}}></span>
              <span className='fa-solid fa-circle-xmark text-danger ms-1 fa-lg' role="button" onClick={() => {handleEdit(order,false)}}></span>
              </span>}
        </td> */}
        {/* <td><span className='fa-solid fa-pen-to-square'  onClick={() => { navigate(`/orders/${order._id}`, { state: { orderData: order } }) }} ></span></td> */}
      </tr>))
    
  return (
      <>
      <Sidebar/>
      <div >
    { rejectedOrders && rejectedOrders.length>0 ?<div className='mx-auto-con'><NavLink to="/discounts/add" className="btn btn-primary my-2">Add Order</NavLink>
    <h2 className='text-center text-dark'>Rejeclted Orders</h2>
    <table className="table table-hover table-bordered table-striped mx-auto my-1">
      <thead>
        <tr>
          <th>Customer Name</th>
          <th>receipt Total Price</th>
          <th>receipt Total Products</th>
          <th>Order Status</th>
          <th>Order Request Date</th>
          <th>Order Deliver Date</th>
        </tr>
      </thead>
      <tbody>{ordersList}</tbody>
    </table>
    </div>
    : <div className="text-center w-75 mx-auto" style={{height:"30vh"}}><h3 className='text-primary'>There is no Rejected Orders</h3></div>
    }
    </div>

      </>
  )
}

export default RejectedOrders