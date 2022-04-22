import { React, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { insertDiscount,getDiscounts } from '../../store/discount/discountSlice';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
    discountAmount: Yup.number().required('Please Enter your Discount Amount'),
    fontColor: Yup.string().required('Please Enter your Discount Font Color'),
    layoutColor: Yup.string().required('Please Enter your Layout Color'),
    discountStart: Yup.date().required('Please Enter your Discount Start Date'),
    discountEnd: Yup.date().required('Please Enter your Discount End Date'),
})

const DiscountAdd = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            discountAmount: '',
            fontColor: '',
            layoutColor: '',
            discountStart: '',
            discountEnd: '',
        },

        onSubmit: values => {
            console.log(values)
            let formData = new FormData();
            formData.append('discountAmount', values.discountAmount)

            formData.append('date',
                JSON.stringify({
                    from: values.discountStart,
                    to: values.discountEnd,
                })
            )

            formData.append('style',
                JSON.stringify({

                    fontColor: values.fontColor,
                    layoutColor: values.layoutColor,

                })

            )

            dispatch(insertDiscount(formData))
            navigate("/discounts")
        },
        validationSchema,
    })

    return (
        <>
            <Sidebar />
            <div className="row justify-content-center  align-items-center mx-auto">
                <form className='continer px-5 py-5 text-center  mx-auto sign-Up' onSubmit={formik.handleSubmit} encType="multipart/form-data">
                <h2 className='mb-4 fw-bold'>Add Discount</h2>
                    <div className='d-flex align-items-center justify-content-evenly w-100'>
                        <label htmlFor="discountAmount"><i className="fa-brands border p-2 rounded-circle fa-product-hunt" role="button"></i></label>
                        <input className='form-control w-75 ' placeholder='Enter Discount Amount' type="text" name='discountAmount'
                            {...formik.getFieldProps('discountAmount')}
                        />
                    </div>
                    {formik.touched.discountAmount && formik.errors.discountAmount ? <div >{formik.errors.discountAmount}</div> : null}

                    <div className='d-flex align-items-center justify-content-evenly w-100'>
                        <label htmlFor="discountStart"><i className="fa-solid fa-calendar-days border p-2 rounded-circle  " role="button"></i></label>
                        <input
                            className='form-control w-75 '
                            type="date"
                            placeholder='enter Your Discount Start Date'
                            name='discountStart'
                            {...formik.getFieldProps('discountStart')}
                        />
                    </div>
                    {formik.touched.discountStart && formik.errors.discountStart ? <div >{formik.errors.discountStart}</div> : null}

                    <div className='d-flex align-items-center justify-content-evenly w-100'>
                        <label htmlFor="discountEnd"><i className="fa-solid fa-calendar-days border p-2 rounded-circle  " role="button"></i></label>
                        <input
                            className='form-control w-75 '
                            type="date"
                            placeholder='enter Your Discount End Date'
                            name='discountEnd'
                            {...formik.getFieldProps('discountEnd')}
                        />
                    </div>
                    {formik.touched.discountEnd && formik.errors.discountEnd ? <div >{formik.errors.discountEnd}</div> : null}

                    <div className='d-flex align-items-center justify-content-evenly w-100'>
                        <label htmlFor="fontColor"><i className="fa-solid border p-2 rounded-circle fa-box  " role="button"></i></label>
                        <input
                            className='form-control w-75 '
                            type="color"
                            placeholder='Enter Your Discount Font color'
                            name='fontColor'
                            {...formik.getFieldProps('fontColor')}
                        />
                    </div>
                    {formik.touched.fontColor && formik.errors.fontColor ? <div >{formik.errors.fontColor}</div> : null}

                    <div className='d-flex align-items-center justify-content-evenly w-100'>
                        <label htmlFor="layoutColor"><i className="fa-solid border p-2 rounded-circle fa-box  " role="button"></i></label>
                        <input
                            className='form-control w-75 '
                            type="color"
                            placeholder='Enter Your Discount background color'
                            name='layoutColor'
                            {...formik.getFieldProps('layoutColor')}
                        />
                    </div>
                    {formik.touched.layoutColor && formik.errors.layoutColor ? <div >{formik.errors.layoutColor}</div> : null}


                    <button className='btnSubmit btn mt-3' type="submit">Add Discount<i className="fa-solid fa-clipboard-list mx-1"></i></button>
                </form>
            </div>
        </>);

}

export default DiscountAdd;
