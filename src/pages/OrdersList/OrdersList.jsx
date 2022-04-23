import {React,useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import Sidebar from './../../components/Sidebar/Sidebar';
import { getOrders,editOrder} from './../../store/orders/ordersSlice';

function OrdersList() {
  const navigate = useNavigate()
  const { inProgressOrders,isLoading } = useSelector(state => state.order)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOrders())
  }, [dispatch])



  const handleConfirm = (order)=>{
    const confirmed = {
      customerId:order.customerId,
      orderDate:order.orderDate,
      receipt:order.receipt,
      status:"Confirmed"
    }
    console.log(confirmed)
    dispatch(editOrder({confirmed , id:order._id}))
    navigate("/confirmedOrders")
  }

  const handleReject = (order ) => {
    
      const confirmed = {
        customerId:order.customerId,
        orderDate:order.orderDate,
        receipt:order.receipt,
        status:"Rejected"
    }
    
    dispatch(editOrder({confirmed , id:order._id}))
    navigate("/rejectedOrders")
    }

  
  
  const ordersList = inProgressOrders && inProgressOrders.map((order) => (<tr key={order._id}>
    <td scope="row">{order.customerId.fullName}</td>
    <td>{order.receipt.total} LE</td>
    <td ><ul>{order.receipt.products.map((product)=>(
     <li key={product._id}>{`${product.productName }`}</li>
    )
    )}</ul>
    </td>
    <td style={{color:"orange"}}>{order.status}</td>
    <td>{order.orderDate.requestDate.split('T')[0]}</td>
    <td>{order.orderDate.deliverDate.split('T')[0]}</td>
    <td >{<span>
          <span className='fa-solid fa-circle-check text-success me-3 fa-lg'role="button" onClick={() => handleConfirm (order)}></span>
          <span className='fa-solid fa-circle-xmark text-danger ms-1 fa-lg' role="button" onClick={() => handleReject (order)}></span>
          </span>}
    </td>
    <td><span className='fa-solid fa-pen-to-square'  onClick={() => { navigate(`/orders/${order._id}`, { state: { orderData: order } }) }} ></span></td>
  </tr>))

  return (
      <>
    <Sidebar />
    
    <div >
        {isLoading ? 'Loading' : inProgressOrders && inProgressOrders.length > 0 ?
          <div className="mx-auto-con">
          <div className='container w-100  mx-auto '>
            <NavLink to="/discounts/add" className="btn btn-primary my-2">Add Order</NavLink>
        <h2 className='text-center text-dark'>Orders List</h2>
        <table className="table table-hover table-bordered table-striped w-100">
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

          </div>
    : <div className="text-center w-75 mx-auto" style={{height:"30vh"}}><h3 className='text-primary'>There is noPending Orders</h3></div>
    }
    </div>
    </>
  )
}

export default OrdersList