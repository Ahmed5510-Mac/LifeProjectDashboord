import style from './ProductList.module.css';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import { getProducts, deleteProduct } from '../../store/product/productSlice';
import Sidebar from './../../components/Sidebar/Sidebar';

const ProductList = () => {
  const navigate = useNavigate()
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
    <td>{product.expirationDate.split('T')[0]}</td>
    <td className={style.productListDelete}><span className='fa-solid fa-trash' onClick={() => handleDelete(product._id)}></span></td>
    <td><span className='fa-solid fa-pen-to-square' role="button"  onClick={() => { navigate(`/products/${product._id}`, { state: { productData: product } }) }} ></span></td>
  </tr>))

  return (<>
      <Sidebar />
  <div className={style.productList}>
    {isLoading ? 'loading...' : <div className='container'><NavLink to="/products/add" className="btn btn-primary my-2">Add product</NavLink><table className="table table-hover table-bordered table-striped">
      <thead>
        <tr>
          <th className="text-center">Product Name</th>
          <th className="text-center">Company</th>
          <th className="text-center">Price</th>
          <th className="text-center">Quantity</th>
          <th className="text-center">CountryOfManufacture</th>
          <th className="text-center">Description</th>
          <th className="text-center">ExpirationDate</th>
        </tr>
      </thead>
      <tbody>{productsList}</tbody>
    </table>
    </div>
    }
    </div>
  </>);
}

export default ProductList;