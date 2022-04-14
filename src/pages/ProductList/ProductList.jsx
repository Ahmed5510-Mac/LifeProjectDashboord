import style from './ProductList.module.css';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react'
import { NavLink } from "react-router-dom"
import { getProducts,deleteProduct } from '../../store/product/productSlice';

const ProductList = () => {
  const { products, isLoading } = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  const handleDelete = (_id) => {
    dispatch(deleteProduct(_id))
  }
  const productsList = products && products.map((product) => (<tr key={product._id}>
    <td scope="row">{product.productName}</td>
    <td>{product.company}</td>
    <td>{product.price}</td>
    <td>{product.quantity}</td>
    <td>{product.countryOfManufacture}</td>
    <td>{product.description}</td>
    <td>{product.expirationDate}</td>
    {/* <td>{customer.addresses.map((address)=>{
      {address}
    })}</td> */}
    <td><span className='fa-solid fa-trash' onClick={handleDelete}></span></td>
    <td><span className='fa-solid fa-pen-to-square'></span></td>
  </tr>))

  return (<>
    {isLoading ? 'loading...' : <div className='container'><NavLink to="/products/add" className="btn btn-primary my-2">Add product</NavLink><table className="table table-hover table-bordered table-striped">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Company</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>CountryOfManufacture</th>
          <th>Description</th>
          <th>ExpirationDate</th>
        </tr>
      </thead>
      <tbody>{productsList}</tbody>
    </table>
    </div>
    }
  </>);
}

export default ProductList;