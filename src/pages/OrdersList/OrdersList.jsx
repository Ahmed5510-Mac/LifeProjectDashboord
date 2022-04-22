import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import Sidebar from './../../components/Sidebar/Sidebar';
import { getOrders, deleteOrder, confirm } from './../../store/orders/ordersSlice';



function OrdersList() {
  const navigate = useNavigate()
  const { orders, isLoading, isConfirmed } = useSelector(state => state.order)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOrders())
  }, [dispatch])

  const handleDelete = (_id) => {
    dispatch(deleteOrder(_id))
  }
  const ordersList = orders && orders.map((order) => (<tr key={order._id}>
    <td scope="row">{order.customerId.fullName}</td>
    <td>{order.receipt.total} LE</td>
    <td ><ul>{order.receipt.products.map((product) => (
      <li key={product._id}>{`${product.productName}`}</li>
    )
    )}</ul>
    </td>
    <td>{order.status}</td>
    <td>{order.orderDate.requestDate.split('T')[0]}</td>
    <td>{order.orderDate.deliverDate.split('T')[0]}</td>
    <td >{<span>
      <span className='fa-solid fa-circle-check text-success me-1 fa-lg' role="button"></span>
      <span className='fa-solid fa-circle-xmark text-danger ms-1 fa-lg' role="button" onClick={() => dispatch(handleDelete(order._id))}></span>
    </span>}</td>
    <td><span className='fa-solid fa-pen-to-square' onClick={() => { navigate(`/orders/${order._id}`, { state: { orderData: order } }) }} ></span></td>
  </tr>))
  return (
    <>
      <Sidebar />
      <div >
        {isLoading ? 'loading...' : orders && orders.length > 0 ? <div className='container'><NavLink to="/discounts/add" className="btn btn-primary my-2">Add Order</NavLink>
          <table className="table table-hover table-bordered table-striped">
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Receipt Total Price</th>
                <th>Receipt Total Products</th>
                <th>Order Status</th>
                <th>Order Request Date</th>
                <th>Order Deliver Date</th>
              </tr>
            </thead>
            <tbody>{ordersList}</tbody>
          </table>
        </div>
          : "There is no orders"
        }
      </div>
    </>
  )
}

export default OrdersList