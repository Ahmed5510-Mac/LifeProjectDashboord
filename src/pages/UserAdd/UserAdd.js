import { React, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { insertCustomer, getCustomers } from '../../store/user/userSlice';
import { useNavigate } from 'react-router-dom';
import './UserAdd.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Sidebar from './../../components/Sidebar/Sidebar';

const validationSchema = Yup.object({
  fullName: Yup.string().required('Please Enter your Fullname'),
  customerPhone: Yup.string().required('Please Enter your Phone'),
  customerEmail: Yup.string()
    .required('Please Enter your Email')
    .email('Invalid email format'),
  customerPassword: Yup.string().required('Please Enter your Password'),
  confirmPassword: Yup.string().required('Please confirm your Password'),
  role: Yup.string().required('Please Enter your Role'),
  customerCountry: Yup.string().required('Please Enter your Role'),
  customerCity: Yup.string().required('Please Enter your Role'),
  customerStreet: Yup.string().required('Please Enter your Role'),
  customerBuilding: Yup.string().required('Please Enter your Role'),
  customerFloor: Yup.string().required('Please Enter your Role'),
});

const UserAdd = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      fullName: '',
      customerPhone: '',
      customerEmail: '',
      customerPassword: '',
      confirmPassword: '',
      customerTotalPurchase: '',
      role: '',
      customerCountry: '',
      customerCity: '',
      customerStreet: '',
      customerBuilding: '',
      customerFloor: '',
    },
    onSubmit: (values) => {
      console.log(values);
      let formData = new FormData();
      formData.append('fullName', values.fullName);
      formData.append('customerPhone', values.customerPhone);
      formData.append('customerEmail', values.customerEmail);
      formData.append('customerPassword', values.customerPassword);
      formData.append('confirmPassword', values.confirmPassword);
      formData.append('role', values.role);
      formData.append('image', ' ');
      formData.append(
        'customerAddress',
        JSON.stringify({
          country: values.customerCountry,
          city: values.customerCity,
          streetName: values.customerStreet,
          buildingNumber: values.customerBuilding,
          floorNumber: values.customerFloor,
        })
      );

      dispatch(insertCustomer(formData));
      dispatch(getCustomers());
      navigate('/users');

      // dispatch(reset())
    },
    validationSchema,
  });

  return (
    <>
    <Sidebar/>
    <div className='row justify-content-center  align-items-center mx-auto mb-3'>
      <h2 className='text-center text-dark my-2'>Add Customer</h2>
      <form
        onSubmit={formik.handleSubmit}
        className='continer px-5 py-5 text-center  mx-auto sign-Up'
      >
        <div className='d-flex align-items-center justify-content-evenly w-100'>
          <label htmlFor='fullName'>
            <i
              className='fa-solid border p-2 rounded-circle fa-user'
              role='button'
            ></i>
          </label>
          <input
            className='form-control w-75 '
            placeholder='Enter Your fullname'
            type='text'
            name='fullName'
            {...formik.getFieldProps('fullName')}
          />
        </div>
        {formik.touched.fullName && formik.errors.fullName ? (
          <div className='errorForm'>{formik.errors.fullName}</div>
        ) : null}

        <div className='d-flex align-items-center justify-content-evenly w-100'>
          <label htmlFor='customerPhone'>
            <i
              className='fa-solid fa-phone border p-2 rounded-circle '
              role='button'
            ></i>
          </label>
          <input
            className='form-control w-75 '
            type='text'
            placeholder='Enter Your Phonenumber'
            name='customerPhone'
            {...formik.getFieldProps('customerPhone')}
          />
        </div>
        {formik.touched.customerPhone && formik.errors.customerPhone ? (
          <div className='errorForm'>{formik.errors.customerPhone}</div>
        ) : null}

        <div className='d-flex align-items-center justify-content-evenly w-100'>
          <label htmlFor='customerEmail'>
            <i
              className='fa-solid fa-at border p-2 rounded-circle  '
              role='button'
            ></i>
          </label>
          <input
            className='form-control w-75 '
            type='email'
            placeholder='Enter Your Email'
            name='customerEmail'
            {...formik.getFieldProps('customerEmail')}
          />
        </div>
        {formik.touched.customerEmail && formik.errors.customerEmail ? (
          <div className='errorForm'>{formik.errors.customerEmail}</div>
        ) : null}

        <div className='d-flex align-items-center justify-content-evenly w-100'>
          <label htmlFor='customerPassword'>
            <i
              className='fa-solid fa-unlock-keyhole border p-2 rounded-circle '
              role='button'
            ></i>
          </label>
          <input
            className='form-control w-75 '
            type='password'
            placeholder='Enter Your Password'
            name='customerPassword'
            {...formik.getFieldProps('customerPassword')}
          />
        </div>
        {formik.touched.customerPassword && formik.errors.customerPassword ? (
          <div className='errorForm'>{formik.errors.customerPassword}</div>
        ) : null}

        <div className='d-flex align-items-center justify-content-evenly w-100'>
          <label htmlFor='confirmPassword'>
            <i
              className='fa-solid fa-unlock-keyhole border p-2 rounded-circle  '
              role='button'
            ></i>
          </label>
          <input
            className='form-control w-75 '
            type='password'
            placeholder='Confirm Your Password'
            name='confirmPassword'
            {...formik.getFieldProps('confirmPassword')}
          />
        </div>
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div className='errorForm'>{formik.errors.confirmPassword}</div>
        ) : null}

        <div className='d-flex align-items-center justify-content-evenly w-100'>
          <label htmlFor='role'>
            <i
              className='fa-solid border p-2 rounded-circle fa-user  '
              role='button'
            ></i>
          </label>
          <select
            className='form-select w-75 mb-1'
            name='role'
            value={formik.values.role}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option selected>Select Your Role</option>
            <option value='Doctor'>Doctor</option>
            <option value='Merchant'>Merchant</option>
          </select>
        </div>
        {formik.touched.role && formik.errors.role ? (
          <div className='errorForm'>{formik.errors.role}</div>
        ) : null}

        <div className='d-flex align-items-center justify-content-evenly w-100'>
          <label htmlFor='customerCountry'>
            <i
              className='fa-solid fa-location-dot border rounded-circle p-2  '
              role='button'
            ></i>
          </label>
          <input
            className='form-control w-75'
            type='text'
            placeholder='Enter Your customerCountry'
            name='customerCountry'
            {...formik.getFieldProps('customerCountry')}
          />
        </div>
        {formik.touched.customerCountry && formik.errors.customerCountry ? (
          <div className='errorForm'>{formik.errors.customerCountry}</div>
        ) : null}

        <div className='d-flex align-items-center justify-content-evenly w-100'>
          <label htmlFor='customerCity'>
            <i
              className='fa-solid fa-location-dot border rounded-circle p-2  '
              role='button'
            ></i>
          </label>
          <input
            className='form-control w-75'
            type='text'
            placeholder='Enter Your customerCity'
            name='customerCity'
            {...formik.getFieldProps('customerCity')}
          />
        </div>
        {formik.touched.customerCity && formik.errors.customerCity ? (
          <div className='errorForm'>{formik.errors.customerCity}</div>
        ) : null}

        <div className='d-flex align-items-center justify-content-evenly w-100'>
          <label htmlFor='customerStreet'>
            <i
              className='fa-solid fa-location-dot border rounded-circle p-2  '
              role='button'
            ></i>
          </label>
          <input
            className='form-control w-75'
            type='text'
            placeholder='Enter Your customerStreet'
            name='customerStreet'
            {...formik.getFieldProps('customerStreet')}
          />
        </div>
        {formik.touched.customerStreet && formik.errors.customerStreet ? (
          <div className='errorForm'>{formik.errors.customerStreet}</div>
        ) : null}

        <div className='d-flex align-items-center justify-content-evenly w-100'>
          <label htmlFor='customerBuilding'>
            <i
              className='fa-solid fa-location-dot border rounded-circle p-2  '
              role='button'
            ></i>
          </label>
          <input
            className='form-control w-75'
            type='text'
            placeholder='Enter Your customerBuilding'
            name='customerBuilding'
            {...formik.getFieldProps('customerBuilding')}
          />
        </div>
        {formik.touched.customerBuilding && formik.errors.customerBuilding ? (
          <div className='errorForm'>{formik.errors.customerBuilding}</div>
        ) : null}

        <div className='d-flex align-items-center justify-content-evenly w-100'>
          <label htmlFor='customerFloor'>
            <i
              className='fa-solid fa-location-dot border rounded-circle p-2  '
              role='button'
            ></i>
          </label>
          <input
            className='form-control w-75'
            type='text'
            placeholder='Enter Your customerFloor'
            name='customerFloor'
            {...formik.getFieldProps('customerFloor')}
          />
        </div>
        {formik.touched.customerFloor && formik.errors.customerFloor ? (
          <div className='errorForm'>{formik.errors.customerFloor}</div>
        ) : null}

        <button className='btnSubmit btn mt-3' type='submit'>
          submit <i className='fa-solid fa-clipboard-list'></i>
        </button>
      </form>
    </div>
    </>
  );
};

export default UserAdd;
