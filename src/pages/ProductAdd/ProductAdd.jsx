import { React, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { insertProduct } from '../../store/product/productSlice';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Sidebar from './../../components/Sidebar/Sidebar';

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
            const productData = {
                productName: values.email,
                company: values.company,
                price: values.price,
                quantity: values.quantity,
                countryOfManufacture: values.countryOfManufacture,
                description: values.description,
                discount: values.discount,
                category: values.category,
                expirationDate: values.expirationDate,
            }
            dispatch(insertProduct(productData))
        },
        validationSchema,
    })

    const [file, setFile] = useState(null)
    /*
        const productName = useRef(null);
        const company = useRef(null);
        const price = useRef(null);
        const quantity = useRef(null);
        const countryOfManufacture = useRef(null);
        const description = useRef(null);
        const discount = useRef(null);
        const category = useRef(null);
        const expirationDate = useRef(null);
    
        const [file, setFile] = useState(null)
    */
    /*
        const handleSubmit = (e) => {
            e.preventDefault();
            let formData = new FormData();
            formData.append('productName', productName.current.value)
            formData.append('company', company.current.value)
            formData.append('price', price.current.value)
            formData.append('image', file)
            formData.append('quantity', quantity.current.value)
            formData.append('countryOfManufacture', countryOfManufacture.current.value)
            formData.append('description', description.current.value)
            formData.append('discount', discount.current.value)
            formData.append('category', category.current.value)
            formData.append('expirationDate', expirationDate.current.value)
    
    
            dispatch(insertProduct(formData))
            productName.current.value = null
            price.current.value = null
            company.current.value = null
            discount.current.value = null
            countryOfManufacture.current.value = null
            category.current.value = null
            quantity.current.value = null
            description.current.value = null
            expirationDate.current.value = null
    
        };
    */
    return (
        <>
           <Sidebar />
            <div className="row justify-content-center  align-items-center mx-auto">
                <form className='continer px-5 py-5 text-center  mx-auto sign-Up' onSubmit={formik.handleSubmit} encType='multipart/form-data'>
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
                        <label htmlFor="discount"><i className="fa-solid fa-percent border p-2 rounded-circle " role="button"></i></label>
                        <input 
                          className='form-control w-75 '
                          type="text" 
                          placeholder='Enter Your discount'
                          name='discount'
                            {...formik.getFieldProps('discount')}
                        />
                        {formik.touched.discount && formik.errors.discount ? <div >{formik.errors.discount}</div> : null}

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
                        <input className='form-control w-75'
                            type="text"
                            placeholder='Enter Your category' 
                            name='category'  
                           {...formik.getFieldProps('category')} />
                    </div>
                    {formik.touched.category && formik.errors.category ? <div >{formik.errors.category}</div> : null}

                    <button className='btnSubmit btn mt-3' type="submit">Add<i className="fa-solid fa-clipboard-list mx-1"></i></button>
                </form>
            </div>
        </>);

}

export default ProductAdd;
/*
     <div className="row justify-content-center  align-items-center mx-auto">
                <form className='continer px-5 py-5 text-center  mx-auto sign-Up' onSubmit={handleSubmit} encType='multipart/form-data'>
                    <div className='d-flex align-items-center justify-content-evenly w-100'>
                        <label htmlFor="productName"><i className="fa-brands border p-2 rounded-circle fa-product-hunt" role="button"></i></label>
                        <input className='form-control w-75 ' placeholder='Enter productName' type="text" name='productName' ref={productName} />
                    </div>
                    <div className='d-flex align-items-center justify-content-evenly w-100'>
                        <label htmlFor="company"><i className="fa-solid fa-building border p-2 rounded-circle " role="button"></i></label>
                        <input className='form-control w-75 ' type="text" placeholder='Enter Your company' name='company' ref={company} />
                    </div>
                    <div className='d-flex align-items-center justify-content-evenly w-100'>
                        <label htmlFor="price"><i className="fa-solid fa-dollar-sign border p-2 rounded-circle  " role="button"></i></label>
                        <input className='form-control w-75 ' type="number" placeholder='Enter Your price' name='price' ref={price} />
                    </div>
                    <div className='d-flex align-items-center justify-content-evenly w-100'>
                        <label htmlFor="image"><i className="fa-solid fa-file border p-2 rounded-circle  " role="button"></i></label>
                        <input className='form-control w-75' type="file" accept=".png,.jpeg,.jpg" name='image' onChange={(e) => setFile(e.target.files[0])} />
                    </div>
                    <div className='d-flex align-items-center justify-content-evenly w-100'>
                        <label htmlFor="discount"><i className="fa-solid fa-percent border p-2 rounded-circle " role="button"></i></label>
                        <input className='form-control w-75 ' type="text" placeholder='Enter Your discount' name='discount' ref={discount} />
                    </div>
                    <div className='d-flex align-items-center justify-content-evenly w-100'>
                        <label htmlFor="expirationDate"><i className="fa-solid fa-calendar-days border p-2 rounded-circle  " role="button"></i></label>
                        <input className='form-control w-75 ' type="date" placeholder='enter Your expirationDate' name='expirationDate' ref={expirationDate} />
                    </div>
                    <div className='d-flex align-items-center justify-content-evenly w-100'>
                        <label htmlFor="quantity"><i className="fa-solid border p-2 rounded-circle fa-box  " role="button"></i></label>
                        <input className='form-control w-75 ' type="number" placeholder='Enter Your quantity' name='quantity' ref={quantity} />
                    </div>
                    <div className='d-flex align-items-center justify-content-evenly w-100'>
                        <label htmlFor="countryOfManufacture"><i className="fa-solid fa-location-dot border rounded-circle p-2  " role="button"></i></label>
                        <input className='form-control w-75' type="text" placeholder='Enter Your countryOfManufacture' name='countryOfManufacture' ref={countryOfManufacture} />
                    </div>
                    <div className='d-flex align-items-center justify-content-evenly w-100'>
                        <label htmlFor="description"><i className="fa-solid fa-book border rounded-circle p-2  " role="button"></i></label>
                        <input className='form-control w-75' type="text" placeholder='Enter Your description' name='description' ref={description} />
                    </div>
                    <div className='d-flex align-items-center justify-content-evenly w-100'>
                        <label htmlFor="category"><i className="fa-solid fa-boxes-stacked border rounded-circle p-2  " role="button"></i></label>
                        <input className='form-control w-75' type="text" placeholder='Enter Your category' name='category' ref={category} />
                    </div>
                    <button className='btnSubmit btn mt-3' type="submit">Add<i className="fa-solid fa-clipboard-list mx-1"></i></button>
                </form>
            </div>

*/