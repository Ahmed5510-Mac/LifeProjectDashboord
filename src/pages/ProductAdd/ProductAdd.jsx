import { React, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { insertProduct, getProducts } from '../../store/product/productSlice';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Sidebar from './../../components/Sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';
import { getDiscounts } from '../../store/discount/discountSlice';
import { getCategory } from '../../store/category/categorySlice';


const validationSchema = Yup.object({
    productName: Yup.string().required('Please Enter your productName'),
    company: Yup.string().required('Please Enter your company'),
    price: Yup.number().required('Please Enter your price'),
    quantity: Yup.number().required('Please Enter your quantity'),
    countryOfManufacture: Yup.string().required('Please Enter your countryOfManufacture'),
    description: Yup.string().required('Please Enter your description'),
    discount: Yup.number().required('Please Enter your discount'),
    category: Yup.number().required('Please Enter your category'),
    expirationDate: Yup.date().required('Please Enter your expirationDate'),
})

const ProductAdd = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getCategory())
        dispatch(getDiscounts())

    }, [dispatch])
    const { discounts } = useSelector((state) => state.discount)
    const categories = useSelector((state) => state.Category.Category)
    console.log(categories)
    console.log(discounts)
    const [file, setFile] = useState(null)

    const formik = useFormik({
        initialValues: {
            productName: '',
            company: '',
            price: '',
            quantity: '',
            countryOfManufacture: '',
            description: '',
            discount: '',
            category: '',
            expirationDate: ''
        },

        onSubmit: values => {
            console.log(values)
            let formData = new FormData();
            formData.append('productName', values.productName)
            formData.append('company', values.company)
            formData.append('price', values.price)
            formData.append('image', file)
            formData.append('quantity', values.quantity)
            formData.append('countryOfManufacture', values.countryOfManufacture)
            formData.append('description', values.description)
            formData.append('discount', values.discount)
            formData.append('category', values.category)
            formData.append('expirationDate', values.expirationDate)


            dispatch(insertProduct(formData))

            navigate("/products")
            dispatch(getProducts())
        },
        validationSchema,
    })

    return (
        <>
            <Sidebar />
            <div className="row justify-content-center  align-items-center mx-auto">
                <form className='continer px-5 py-5 text-center  mx-auto sign-Up' onSubmit={formik.handleSubmit} encType="multipart/form-data">
                    <h2 className='mb-4 fw-bold'>Add Product</h2>
                    <div className='d-flex align-items-center justify-content-evenly w-100'>
                        <label htmlFor="productName"><i className="fa-brands border p-2 rounded-circle fa-product-hunt" role="button"></i></label>
                        <input className='form-control w-75 ' placeholder='Enter productName' type="text" name='productName'
                            {...formik.getFieldProps('productName')}
                        />
                    </div>
                    {formik.touched.productName && formik.errors.productName ? <div >{formik.errors.productName}</div> : null}

                    <div className='d-flex align-items-center justify-content-evenly w-100'>
                        <label htmlFor="company"><i className="fa-solid fa-building border p-2 rounded-circle " role="button"></i></label>
                        <input
                            className='form-control w-75 '
                            type="text"
                            placeholder='Enter Your company'
                            name='company'
                            {...formik.getFieldProps('company')} />
                    </div>
                    {formik.touched.company && formik.errors.company ? <div >{formik.errors.company}</div> : null}

                    <div className='d-flex align-items-center justify-content-evenly w-100'>
                        <label htmlFor="price"><i className="fa-solid fa-dollar-sign border p-2 rounded-circle  " role="button"></i></label>
                        <input
                            className='form-control w-75 '
                            type="number"
                            placeholder='Enter Your price'
                            name='price'
                            {...formik.getFieldProps('price')}
                        />
                    </div>
                    {formik.touched.price && formik.errors.price ? <div >{formik.errors.price}</div> : null}

                    <div className='d-flex align-items-center justify-content-evenly w-100'>
                        <label htmlFor="image"><i className="fa-solid fa-file border p-2 rounded-circle  " role="button"></i></label>
                        <input className='form-control w-75'
                            type="file" accept=".png,.jpeg,.jpg" name='image'
                            onChange={(e) => setFile(e.target.files[0])} />

                    </div>

                    <div className='d-flex align-items-center justify-content-evenly w-100'>
                        <label htmlFor="discount"><i className="fa-solid fa-boxes-stacked border rounded-circle p-2  " role="button"></i></label>
                        <select className='form-select w-75 mb-1' name="discount"
                            value={formik.values.discount}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}>
                            <option selected disapled>Change Discount Amount</option>
                            {discounts && discounts.map((discount) =>
                                <option value={discount._id}>{discount.discountAmount}</option>
                            )}
                        </select>
                    </div>

                    <div className='d-flex align-items-center justify-content-evenly w-100'>
                        <label htmlFor="expirationDate"><i className="fa-solid fa-calendar-days border p-2 rounded-circle  " role="button"></i></label>
                        <input
                            className='form-control w-75 '
                            type="date"
                            placeholder='enter Your expirationDate'
                            name='expirationDate'
                            {...formik.getFieldProps('expirationDate')}
                        />
                    </div>
                    {formik.touched.expirationDate && formik.errors.expirationDate ? <div >{formik.errors.expirationDate}</div> : null}

                    <div className='d-flex align-items-center justify-content-evenly w-100'>
                        <label htmlFor="quantity"><i className="fa-solid border p-2 rounded-circle fa-box  " role="button"></i></label>
                        <input
                            className='form-control w-75 '
                            type="number"
                            placeholder='Enter Your quantity'
                            name='quantity'
                            {...formik.getFieldProps('quantity')}
                        />
                    </div>
                    {formik.touched.quantity && formik.errors.quantity ? <div >{formik.errors.quantity}</div> : null}

                    <div className='d-flex align-items-center justify-content-evenly w-100'>
                        <label htmlFor="countryOfManufacture"><i className="fa-solid fa-location-dot border rounded-circle p-2  " role="button"></i></label>
                        <input
                            className='form-control w-75'
                            type="text"
                            placeholder='Enter Your countryOfManufacture'
                            name='countryOfManufacture'
                            {...formik.getFieldProps('countryOfManufacture')} />
                    </div>
                    {formik.touched.countryOfManufacture && formik.errors.countryOfManufacture ? <div >{formik.errors.countryOfManufacture}</div> : null}

                    <div className='d-flex align-items-center justify-content-evenly w-100'>
                        <label htmlFor="description"><i className="fa-solid fa-book border rounded-circle p-2  " role="button"></i></label>
                        <input
                            className='form-control w-75'
                            type="text"
                            placeholder='Enter Your description'
                            name='description'
                            {...formik.getFieldProps('description')}
                        />
                    </div>
                    {formik.touched.description && formik.errors.description ? <div >{formik.errors.description}</div> : null}

                    <div className='d-flex align-items-center justify-content-evenly w-100'>
                        <label htmlFor="category"><i className="fa-solid fa-boxes-stacked border rounded-circle p-2  " role="button"></i></label>
                        <select className='form-select w-75 mb-1' name="category"
                            value={formik.values.category}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}>
                            <option selected disapled>Change Category</option>
                            {categories && categories.map((category) =>
                                <option value={category._id}>{category.name}</option>
                            )}
                        </select>
                    </div>


                    <button className='btnSubmit btn mt-3' type="submit">Add<i className="fa-solid fa-clipboard-list mx-1"></i></button>
                </form>
            </div>
        </>);

}

export default ProductAdd;
