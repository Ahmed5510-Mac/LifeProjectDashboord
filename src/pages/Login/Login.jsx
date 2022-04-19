import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { login ,reset} from '../../store/auth/authSlice';
import style from './Login.module.css';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    email: Yup.string().required('Please Enter your Email').email('Invalid email format'),
    password: Yup.string().required('Please Enter your Password')
})

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isLoading, user, isSuccess, isError, message } = useSelector((state) => state.auth)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            console.log(values)
            const userData = {
              email:values.email,
              password:values.password
            }             
        dispatch(login(userData))
         if(isError) {
            console.log("error mesage")
          }
          if (isSuccess || user) {         
              navigate('/')
          }
        //  dispatch(reset())
        },
        validationSchema,
    })

    useEffect(() => {
        if (isError) {
          console.log('error message');
        }
        if (isSuccess || user) {
            navigate('/')
        }
        dispatch(reset())
    }, [user, isSuccess, isError, message, navigate, dispatch])

    return (<>
        <div className={style.container}>
            <form onSubmit={formik.handleSubmit} className={style.form}>
                <div className={style.formControl}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id='email'
                        name='email'
                        {...formik.getFieldProps('email')} />
                    {formik.touched.email && formik.errors.email ? <div className={style.error}>{formik.errors.email}</div> : null}
                </div>
                <div className={style.formControl}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id='password'
                        name='password'
                        {...formik.getFieldProps('password')} />
                    {formik.touched.password && formik.errors.password ? <div className={style.error}>{formik.errors.password}</div> : null}
                </div>
                <button type='submit'>submit</button>
            </form>
        </div>
    </>);
}

export default Login;
