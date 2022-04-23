import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import {getDiscounts,deleteDiscount} from '../../store/discount/discountSlice';
import Sidebar from './../../components/Sidebar/Sidebar';
import style from './ProductList.module.css';


function DiscountList() {
  const navigate = useNavigate()
  const { discounts, isLoading } = useSelector(state => state.discount)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDiscounts())
  }, [dispatch])

  const handleDelete = (_id) => {
    dispatch(deleteDiscount(_id))
  }
  const discountsList = discounts && discounts.map((discount) => (<tr key={discount._id}>
    <td className="text-center" scope="row">{discount.discountAmount}</td>
    <td className="text-center">{`${(discount.date.from).split('T')[0]}`}</td>
    <td className="text-center">{`${(discount.date.to).split('T')[0]}`}</td>
    {/* <td className="text-center" ><span className='fa-solid fa-trash' onClick={() => handleDelete(discount._id)}></span></td> */}
    <td className="text-center"><span className='fa-solid fa-pen-to-square' role="button"  onClick={() => { navigate(`/discounts/${discount._id}`, { state: { discountData: discount } }) }} ></span></td>
  </tr>))

  return (

  <>
      <Sidebar />
  <div className={style.productList}>
    {isLoading ? 'loading...' : <div className='container'><NavLink to="/discounts/add" className="btn btn-primary my-2">Add Discount</NavLink>
    <h2>Discounts List</h2>
    <table className="table table-hover table-bordered table-striped">
      <thead>
        <tr>
          <th className="text-center">Discount Amount</th>
          <th className="text-center">Discount Start</th>
          <th className="text-center">Discount End</th>
          <th className="text-center" colSpan={2}>Operation</th>
        </tr>
      </thead>
      <tbody>{discountsList}</tbody>
    </table>
    </div>
    }
    </div>
  </>
  
  );
        
  
}

export default DiscountList;
