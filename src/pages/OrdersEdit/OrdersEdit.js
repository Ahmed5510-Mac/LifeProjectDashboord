import { React, useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import Sidebar from './../../components/Sidebar/Sidebar';
// import { useNavigate ,useLocation} from 'react-router-dom';
// import { editOrder } from '../../store/orders/ordersSlice';

// // customerId:order.customerId,
// // orderDate:order.orderDate,
// // receipt:order.receipt,
// // status:"Rejected"

// const validationSchema = Yup.object({
//     customerName: Yup.string().required('Please Enter your customer name'),
//     products: Yup.number().required('Please Enter your Products'),
//     total: Yup.number().required('Please Enter your total Price'),
//     status: Yup.string().required('Please Enter your Status'),
//     orderRequestDate: Yup.date().required('Please Enter your order Request Date'),
//     orderDeliveryDate: Yup.date().required('Please Enter your DeliveryDate'),
// })

const OrdersEdit = () => {
    return(
        <>
        <div>Edit order</div>
        </>
    )
}
//     const dispatch = useDispatch()
//     const navigate = useNavigate()
//     const location = useLocation()

//     const order = location.state.orderData
   

//     const formik = useFormik({
//         initialValues: {
//             customerId:order.customerId,
//             receipt:order.receipt,
//             status:order.status,
//             orderDate:order.orderDate

//             // customerName:order.customerId.fullName ,
//             // products:order.receipt.products ,
//             // total: order.receipt.total,
//             // status: order.status,
//             // orderRequestDate: order.orderDate.requestDate,
//             // orderDeliveryDate: order.orderDate.deliveryDate,
//         },

//         onSubmit: values => {
//             console.log(values)
//             let formData = {
//                 customerId:values.customerId

//             }

//             dispatch(insertProduct(formData))
//             navigate("/products")
//         },
//         validationSchema,
//     })

//     return (
//         <>
//             <Sidebar />
//             <div className="row justify-content-center  align-items-center mx-auto">
//                 <form className='continer px-5 py-5 text-center  mx-auto sign-Up' onSubmit={formik.handleSubmit} encType="multipart/form-data">
//                     <div className='d-flex align-items-center justify-content-evenly w-100'>
//                         <label htmlFor="productName"><i className="fa-brands border p-2 rounded-circle fa-product-hunt" role="button"></i></label>
//                         <input className='form-control w-75 ' placeholder='Enter productName' type="text" name='productName'
//                             {...formik.getFieldProps('productName')}
//                         />
//                     </div>
//                     {formik.touched.productName && formik.errors.productName ? <div >{formik.errors.productName}</div> : null}

//                     <div className='d-flex align-items-center justify-content-evenly w-100'>
//                         <label htmlFor="company"><i className="fa-solid fa-building border p-2 rounded-circle " role="button"></i></label>
//                         <input
//                             className='form-control w-75 '
//                             type="text"
//                             placeholder='Enter Your company'
//                             name='company'
//                             {...formik.getFieldProps('company')} />
//                     </div>
//                     {formik.touched.company && formik.errors.company ? <div >{formik.errors.company}</div> : null}

//                     <div className='d-flex align-items-center justify-content-evenly w-100'>
//                         <label htmlFor="price"><i className="fa-solid fa-dollar-sign border p-2 rounded-circle  " role="button"></i></label>
//                         <input
//                             className='form-control w-75 '
//                             type="number"
//                             placeholder='Enter Your price'
//                             name='price'
//                             {...formik.getFieldProps('price')}
//                         />
//                     </div>
//                     {formik.touched.price && formik.errors.price ? <div >{formik.errors.price}</div> : null}

//                     <div className='d-flex align-items-center justify-content-evenly w-100'>
//                         <label htmlFor="image"><i className="fa-solid fa-file border p-2 rounded-circle  " role="button"></i></label>
//                         <input className='form-control w-75'
//                             type="file" accept=".png,.jpeg,.jpg" name='image'
//                             onChange={(e) => setFile(e.target.files[0])} />

//                     </div>
//                     <div className='d-flex align-items-center justify-content-evenly w-100'>
//                         <label htmlFor="discount"><i className="fa-solid fa-boxes-stacked border rounded-circle p-2  " role="button"></i></label>
//                         <select className='form-select w-75 mb-1' name="discount"
//                             value={formik.values.discount}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}>
//                             <option selected disapled>Change Discount Amount</option>
//                             {discounts && discounts.map((discount) =>
//                                 <option value={discount._id}>{discount.discountAmount}</option>
//                             )}
//                         </select>
//                     </div>
//                     <div className='d-flex align-items-center justify-content-evenly w-100'>
//                         <label htmlFor="expirationDate"><i className="fa-solid fa-calendar-days border p-2 rounded-circle  " role="button"></i></label>
//                         <input
//                             className='form-control w-75 '
//                             type="date"
//                             placeholder='enter Your expirationDate'
//                             name='expirationDate'
//                             {...formik.getFieldProps('expirationDate')}
//                         />
//                     </div>
//                     {formik.touched.expirationDate && formik.errors.expirationDate ? <div >{formik.errors.expirationDate}</div> : null}

//                     <div className='d-flex align-items-center justify-content-evenly w-100'>
//                         <label htmlFor="quantity"><i className="fa-solid border p-2 rounded-circle fa-box  " role="button"></i></label>
//                         <input
//                             className='form-control w-75 '
//                             type="number"
//                             placeholder='Enter Your quantity'
//                             name='quantity'
//                             {...formik.getFieldProps('quantity')}
//                         />
//                     </div>
//                     {formik.touched.quantity && formik.errors.quantity ? <div >{formik.errors.quantity}</div> : null}

//                     <div className='d-flex align-items-center justify-content-evenly w-100'>
//                         <label htmlFor="countryOfManufacture"><i className="fa-solid fa-location-dot border rounded-circle p-2  " role="button"></i></label>
//                         <input
//                             className='form-control w-75'
//                             type="text"
//                             placeholder='Enter Your countryOfManufacture'
//                             name='countryOfManufacture'
//                             {...formik.getFieldProps('countryOfManufacture')} />
//                     </div>
//                     {formik.touched.countryOfManufacture && formik.errors.countryOfManufacture ? <div >{formik.errors.countryOfManufacture}</div> : null}

//                     <div className='d-flex align-items-center justify-content-evenly w-100'>
//                         <label htmlFor="description"><i className="fa-solid fa-book border rounded-circle p-2  " role="button"></i></label>
//                         <input
//                             className='form-control w-75'
//                             type="text"
//                             placeholder='Enter Your description'
//                             name='description'
//                             {...formik.getFieldProps('description')}
//                         />
//                     </div>
//                     {formik.touched.description && formik.errors.description ? <div >{formik.errors.description}</div> : null}
//                     <div className='d-flex align-items-center justify-content-evenly w-100'>
//                         <label htmlFor="role"><i className="fa-solid border p-2 rounded-circle fa-user  " role="button"></i></label>
//                         <select className='form-select w-75 mb-1' name='role'
//                             value={formik.values.role}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur} >
//                             <option selected >Select Your Role</option>
//                             <option value="Doctor">Doctor</option>
//                             <option value="Merchant">Merchant</option>

//                         </select>

//                     </div>
//                     <div className='d-flex align-items-center justify-content-evenly w-100'>
//                         <label htmlFor="category"><i className="fa-solid fa-boxes-stacked border rounded-circle p-2  " role="button"></i></label>
//                         <select className='form-select w-75 mb-1' name="category"
//                             value={formik.values.category}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}>
//                             <option selected disapled>Change Category</option>
//                             {categories && categories.map((category) =>
//                                 <option value={category._id}>{category.name}</option>
//                             )}
//                         </select>
//                     </div>


//                     <button className='btnSubmit btn mt-3' type="submit">Add<i className="fa-solid fa-clipboard-list mx-1"></i></button>
//                 </form>
//             </div>
//         </>);

// }

export default OrdersEdit;

