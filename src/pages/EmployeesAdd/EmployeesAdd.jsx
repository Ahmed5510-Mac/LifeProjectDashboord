import { React } from 'react'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Sidebar from './../../components/Sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';
import { getEmployees, insertEmployee } from './../../store/employee/employeeSlice';



const validationSchema = Yup.object({
    fullName: Yup.string().required('Please Enter your Fullname'),
    phone: Yup.string().required('Please Enter your Phone'),
    email: Yup.string()
        .required('Please Enter your Email')
        .email('Invalid email format'),
    password: Yup.string().required('Please Enter your Password'),
    workHour: Yup.number().required('Please Enter your working hours'),
    position: Yup.string().required('Please Enter your position'),
    gender: Yup.string().required('Please Enter your gender'),
    militarystatus: Yup.string().required('Please Enter your militarystatus'),
    dateOfEmployment: Yup.date().required('Please Enter your dateOfEmployment'),
    employeecity: Yup.string().required('Please Enter your City'),
    employeestreet: Yup.string().required('Please Enter your Street'),
    employeebuilding: Yup.number().required('Please Enter your Building'),
})

const EmployeesAdd = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            fullName: '',
            phone: '',
            email: '',
            password: '',
            workHour: '',
            militarystatus: '',
            position: '',
            gender: '',
            dateOfEmployment: '',
            employeecity: '',
            employeestreet: '',
            employeebuilding: '',
        },
        onSubmit: (values) => {
            console.log(values);
            let formData = new FormData();
            formData.append('fullName', values.fullName);
            formData.append('phone', values.phone);
            formData.append('email', values.email);
            formData.append('password', values.password);
            formData.append('workHour', values.workHour);
            formData.append('position', values.position);
            formData.append('gender', values.gender);
            formData.append('militarystatus', values.militarystatus);
            formData.append('dateOfEmployment', values.dateOfEmployment);

            formData.append(
                'address',
                JSON.stringify({
                    city: values.employeecity,
                    street: values.employeestreet,
                    building: values.employeebuilding,
                })
            );


            dispatch(insertEmployee(formData));
          //  dispatch(getEmployees());
            navigate('/employees');

        },
        validationSchema,
    });

    return (
        <>
            <Sidebar />
            <div className='row justify-content-center  align-items-center mx-auto mb-3'>
                <form
                    onSubmit={formik.handleSubmit}
                    className='continer px-5 py-5 text-center  mx-auto sign-Up'
                >
                    <h2 className='mb-4 fw-bold'>Add Employee</h2>
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
                        <label htmlFor='phone'>
                            <i
                                className='fa-solid fa-phone border p-2 rounded-circle '
                                role='button'
                            ></i>
                        </label>
                        <input
                            className='form-control w-75 '
                            type='text'
                            placeholder='Enter Your Phonenumber'
                            name='phone'
                            {...formik.getFieldProps('phone')}
                        />
                    </div>
                    {formik.touched.phone && formik.errors.phone ? (
                        <div className='errorForm'>{formik.errors.phone}</div>
                    ) : null}

                    <div className='d-flex align-items-center justify-content-evenly w-100'>
                        <label htmlFor='email'>
                            <i
                                className='fa-solid fa-at border p-2 rounded-circle  '
                                role='button'
                            ></i>
                        </label>
                        <input
                            className='form-control w-75 '
                            type='email'
                            placeholder='Enter Your Email'
                            name='email'
                            {...formik.getFieldProps('email')}
                        />
                    </div>
                    {formik.touched.email && formik.errors.email ? (
                        <div className='errorForm'>{formik.errors.email}</div>
                    ) : null}

                    <div className='d-flex align-items-center justify-content-evenly w-100'>
                        <label htmlFor='password'>
                            <i
                                className='fa-solid fa-unlock-keyhole border p-2 rounded-circle '
                                role='button'
                            ></i>
                        </label>
                        <input
                            className='form-control w-75 '
                            type='password'
                            placeholder='Enter Your Password'
                            name='password'
                            {...formik.getFieldProps('password')}
                        />
                    </div>
                    {formik.touched.password && formik.errors.password ? (
                        <div className='errorForm'>{formik.errors.password}</div>
                    ) : null}

                    <div className='d-flex align-items-center justify-content-evenly w-100'>
                        <label htmlFor='workHour'>
                            <i
                                className='fa-solid fa-unlock-keyhole border p-2 rounded-circle  '
                                role='button'
                            ></i>
                        </label>
                        <input
                            className='form-control w-75 '
                            type='text'
                            placeholder='Enter working hours'
                            name='workHour'
                            {...formik.getFieldProps('workHour')}
                        />
                    </div>
                    {formik.touched.workHour && formik.errors.workHour ? (
                        <div className='errorForm'>{formik.errors.workHour}</div>
                    ) : null}

                    <div className='d-flex align-items-center justify-content-evenly w-100'>
                        <label htmlFor='position'>
                            <i
                                className='fa-solid border p-2 rounded-circle fa-user  '
                                role='button'
                            ></i>
                        </label>
                        <input
                            className='form-control w-75 '
                            type='text'
                            placeholder='Enter your position'
                            name='position'
                            {...formik.getFieldProps('position')}
                        />
                    </div>
                    {formik.touched.position && formik.errors.position ? (
                        <div className='errorForm'>{formik.errors.position}</div>
                    ) : null}

                    <div className='d-flex align-items-center justify-content-evenly w-100'>
                        <label htmlFor='gender'>
                            <i
                                className='fa-solid border p-2 rounded-circle fa-user  '
                                role='button'
                            ></i>
                        </label>
                        <select
                            className='form-select w-75 mb-1'
                            name='gender'
                            value={formik.values.gender}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            <option selected>Select Your Role</option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                        </select>
                    </div>
                    {formik.touched.gender && formik.errors.gender ? (
                        <div className='errorForm'>{formik.errors.gender}</div>
                    ) : null}

                    <div className='d-flex align-items-center justify-content-evenly w-100'>
                        <label htmlFor="dateOfEmployment"><i className="fa-solid fa-calendar-days border p-2 rounded-circle  " role="button"></i></label>
                        <input
                            className='form-control w-75 '
                            type="date"
                            placeholder='enter Your dateOfEmployment'
                            name='dateOfEmployment'
                            {...formik.getFieldProps('dateOfEmployment')}
                        />
                    </div>
                    {formik.touched.dateOfEmployment && formik.errors.dateOfEmployment ?
                        <div >{formik.errors.dateOfEmployment}</div> : null}


                    <div className='d-flex align-items-center justify-content-evenly w-100'>
                        <label htmlFor='militarystatus'>
                            <i
                                className='fa-solid border p-2 rounded-circle fa-user  '
                                role='button'
                            ></i>
                        </label>
                        <input
                            className='form-control w-75 '
                            type='text'
                            placeholder='Enter your militarystatus'
                            name='militarystatus'
                            {...formik.getFieldProps('militarystatus')}
                        />
                    </div>
                    {formik.touched.militarystatus && formik.errors.militarystatus ? (
                        <div className='errorForm'>{formik.errors.militarystatus}</div>
                    ) : null}

                    <div className='d-flex align-items-center justify-content-evenly w-100'>
                        <label htmlFor='employeecity'>
                            <i
                                className='fa-solid fa-location-dot border rounded-circle p-2  '
                                role='button'
                            ></i>
                        </label>
                        <input
                            className='form-control w-75'
                            type='text'
                            placeholder='Enter Your employeecity'
                            name='employeecity'
                            {...formik.getFieldProps('employeecity')}
                        />
                    </div>
                    {formik.touched.employeecity && formik.errors.employeecity ? (
                        <div className='errorForm'>{formik.errors.employeecity}</div>
                    ) : null}

                    <div className='d-flex align-items-center justify-content-evenly w-100'>
                        <label htmlFor='employeestreet'>
                            <i
                                className='fa-solid fa-location-dot border rounded-circle p-2  '
                                role='button'
                            ></i>
                        </label>
                        <input
                            className='form-control w-75'
                            type='text'
                            placeholder='Enter Your employeestreet'
                            name='employeestreet'
                            {...formik.getFieldProps('employeestreet')}
                        />
                    </div>
                    {formik.touched.employeestreet && formik.errors.employeestreet ? (
                        <div className='errorForm'>{formik.errors.employeestreet}</div>
                    ) : null}

                    <div className='d-flex align-items-center justify-content-evenly w-100'>
                        <label htmlFor='employeebuilding'>
                            <i
                                className='fa-solid fa-location-dot border rounded-circle p-2  '
                                role='button'
                            ></i>
                        </label>
                        <input
                            className='form-control w-75'
                            type='text'
                            placeholder='Enter Your employeebuilding'
                            name='employeebuilding'
                            {...formik.getFieldProps('employeebuilding')}
                        />
                    </div>
                    {formik.touched.employeebuilding && formik.errors.employeebuilding ? (
                        <div className='errorForm'>{formik.errors.employeebuilding}</div>
                    ) : null}


                    <button className='btnSubmit btn mt-3' type='submit'>
                        submit <i className='fa-solid fa-clipboard-list'></i>
                    </button>
                </form>
            </div>
        </>);

}

export default EmployeesAdd;
