import { React, useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { getProducts, editProduct } from '../../store/product/productSlice';

function ProductEdit() {
  const location = useLocation()
  const productInfo = location.state.productData
  const id = productInfo._id
  console.log(id)

  const [productName, setproductName] = useState(productInfo.productName)
  const [image, setFile] = useState(productInfo.image)
  const [company, setCompany] = useState(productInfo.company)
  const [price, setPrice] = useState(productInfo.price)
  const [quantity, setQuantity] = useState(productInfo.quantity)
  const [countryOfManufacture, setCountryOfManufacture] = useState(productInfo.countryOfManufacture)
  const [description, setDescription] = useState(productInfo.description)
  const [discount, setDiscount] = useState(productInfo.discount)
  const [category, setCategory] = useState(productInfo.category)
  const [expirationDate, setExpirationDate] = useState(productInfo.expirationDate)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('productName', productName)
    formData.append('image', image)
    formData.append('company', company)
    formData.append('price', price)
    formData.append('quantity', quantity)
    formData.append('countryOfManufacture', countryOfManufacture)
    formData.append('description', description)
    formData.append('category',JSON.stringify(category))
    formData.append('discount', JSON.stringify(discount))
    formData.append('expirationDate', expirationDate)

    dispatch(editProduct({ formData: formData, id: id }))

    navigate("/products")
  }

  return (
    <div className='container'>
      <form className='row' onSubmit={(e) => handleSubmit(e)} encType="multipart/form-data">
        <div className='col-md-4 d-flex me-4 mb-1'>
          <span className='fa-brands border p-2 rounded-circle fa-product-hunt me-1'></span><input className='form-control col-md-6' value={productName} onChange={(e) => setproductName(e.target.value)} />
        </div>
        <div className='col-md-4 d-flex me-4 mb-1'>
          <span className='fa-solid border p-2 rounded-circle fa-building me-1'></span><input className='form-control col-md-6' value={company} onChange={(e) => setCompany(e.target.value)} />
        </div>
        <div className='col-md-4 d-flex me-4 mb-1'>
          <span className='fa-solid border p-2 rounded-circle fa-dollar-sign me-1'></span><input className='form-control col-md-6' value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className='col-md-4 d-flex me-4 mb-1'>
          <span className='fa-solid border p-2 rounded-circle fa-box me-1'></span><input className='form-control col-md-6' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </div>
        <div className='col-md-4 d-flex me-4 mb-1'>
          <span className='fa-solid border p-2 rounded-circle fa-location-dot me-1'></span><input className='form-control col-md-6' value={countryOfManufacture} onChange={(e) => setCountryOfManufacture(e.target.value)} />
        </div>
        <div className='col-md-4 d-flex me-4 mb-1'>
          <span className='fa-solid border p-2 rounded-circle fa-book  me-1'></span><input className='form-control col-md-6' value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className='col-md-4 d-flex me-4 mb-1'>
          <span className='fa-solid border p-2 rounded-circle fa-percent me-1'></span><input className='form-control col-md-6' value={discount} onChange={(e) => setDiscount(e.target.value)} />
        </div>
        <div className='col-md-4 d-flex me-4 mb-1'>
          <span className='fa-solid border p-2 rounded-circle fa-boxes-stacked me-1'></span><input className='form-control col-md-6' value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>
        <div className='col-md-4 d-flex me-4 mb-1'>
          <span className='fa-solid border p-2 rounded-circle fa-calendar-days me-1'></span><input className='form-control col-md-6' value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)} />
        </div>
        <div className='col-md-4 d-flex me-4 mb-1'>
          <span className='fa-solid fa-image border p-2 rounded-circle  me-1'></span><img src={image} alt='' style={{ width: "50px", height: "50px" }} /><input type="file" className='ms-1' onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <div className='col-md-4 d-flex me-4  mb-1'>
          <button className='btn btn-primary' type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default ProductEdit