import style from './ProductList.module.css';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import { getProducts, deleteProduct } from '../../store/product/productSlice';
import Sidebar from './../../components/Sidebar/Sidebar';
import { useState } from 'react';

const ProductList = () => {
  const navigate = useNavigate()
  const { products, isLoading } = useSelector(state => state.products)
  const dispatch = useDispatch()

  const [currentPage, setCurrentPage] = useState(1)
  const [contentPerPage, setcontentPerPage] = useState(6)
  const pageNumbers = []


  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  const handleDelete = (_id) => {
    dispatch(deleteProduct(_id))
  }
  for (let index = 1; index < Math.ceil(contentPerPage); index++) {
    pageNumbers.push(index)
  }

  const indexOfLastItem = currentPage * contentPerPage
  const indexOfFirstItem = indexOfLastItem - contentPerPage

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const productsList = products && products.map((product) => (<tr key={product._id}>
    <td className="text-center" scope="row">{product.productName}</td>
    <td className="text-center">{product.company}</td>
    <td className="text-center">{product.price}</td>
    <td className="text-center">{product.quantity}</td>
    <td className="text-center">{product.countryOfManufacture}</td>
    <td className="text-center">{product.description}</td>
    {/* <td className="text-center">{product.expirationDate.split('T')[0]}</td> */}
    {/*<td className={style.productListDelete}><span className='fa-solid fa-trash' onClick={() => handleDelete(product._id)}></span></td> */}
    <td className="text-center"><span className='fa-solid fa-pen-to-square' role="button" onClick={() => { navigate(`/products/${product._id}`, { state: { productData: product } }) }} ></span></td>
  </tr>))



  return (<>
    <Sidebar />
    <div className={style.productList}>
      {isLoading && productsList.length < 0 ? 'loading...' : <div className='container'>
        <h2 className="text-center fw-bold text-dark my-2">Products List</h2>
        <NavLink to="/products/add" className="btn btn-primary my-2">Add product</NavLink><table className="table table-hover table-bordered table-striped">
          <thead>
            <tr>
              <th className="text-center">Product Name</th>
              <th className="text-center">Company</th>
              <th className="text-center">Price</th>
              <th className="text-center">Quantity</th>
              <th className="text-center">CountryOfManufacture</th>
              <th className="text-center">Description</th>
              {/* <th className="text-center">ExpirationDate</th> */}
            </tr>
          </thead>
          <tbody>{productsList.slice(indexOfFirstItem, indexOfLastItem)}</tbody>
        </table>
        <ul className={style.listItem}>
          <i class="fa-solid fa-arrow-left my-2 mx-2" style={{ cursor: 'pointer' }}></i>
          {pageNumbers.map(number => (<li className={style.ulItem} key={number}>
            <NavLink to="/products" style={{ textDecoration: 'none', border: 'solid 2px grey', color: 'black', padding: '4px', paddingLeft: '7px', paddingRight: '7px', borderRadius: '5px', }} onClick={() => paginate(number)}>{number}</NavLink>
          </li>))}
          <i class="fa-solid fa-arrow-right my-2 mx-2" style={{ cursor: 'pointer' }}></i>
        </ul>
      </div>
      }
    </div>
  </>);
}

export default ProductList;