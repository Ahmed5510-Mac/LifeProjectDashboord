import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { login, reset } from '../../store/auth/authSlice';
import * as Yup from 'yup';
//import "./login.css"
import style from './Login.module.css';

const validationSchema = Yup.object({
    email: Yup.string().required('Please Enter your Email').email('Invalid email format'),
    password: Yup.string().required('Please Enter your Password')
    //    .matches(/^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}/,'Password should be alpha numeric min 8')
})

const Login = ({ handleChange }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isLoading, user, isSuccess, isError, message } = useSelector((state) => state.auth)

    /*
       const [formData, setFormData] = useState({
           email:'',
           password:''
       })*/

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            console.log(values)
            const userData = {
                email: values.email,
                password: values.password
            }
            dispatch(login(userData))
            if (isError) {
                console.log("error mesage")
            }
            if (isSuccess || user) {
                navigate('/home')
            }
            //  dispatch(reset())
        },
        validationSchema,
    })


    useEffect(() => {
        if (isError) {
            //   toast.error(message)
        }
        if (isSuccess || user) {
            dispatch(reset())
            navigate('/home')
        }

    }, [user, isSuccess, isError, message, navigate, dispatch])
    /*
        const onChange = (e) => {
            setFormData((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value
            }))
        }*/
    /*
        const handleSubmit = (e) => {
            e.preventDefault()
            const userData = {
                // customerEmail, customerPassword
                email,password
            }
            dispatch(login(userData))
              
        }
    */

    return (<>
    <div className={style.container}>
        <div className={style.formContainer}>       
        <form className={style.form}  onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="email">
                <i className="fa-solid border p-2 rounded-circle fa-user"></i></label>
                <input placeholder='Email' className={style.email}
                    type="email" name='email'
                    {...formik.getFieldProps('email')} />
            </div>
            {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
            <div>
                <label htmlFor="Password"><i className="fa-solid fa-unlock-keyhole border p-2 rounded-circle"></i></label>
                <input placeholder='Password' className={style.password}
                    type="password" name='password'
                    {...formik.getFieldProps('password')}
                />
            </div>
            {formik.touched.password && formik.errors.password ? <div className='error'>{formik.errors.password}</div> : null}
           <div className={style.btnLogin}>
           <button className={style.btnSubmit}  type="submit">Login <i className="fa-solid fa-right-to-bracket"></i></button><br />
           </div>
           
            {isError &&<div><span>userName or password is inCorrect</span></div> }
        </form>
        </div>
        </div>
    </>);
}


export default Login;

/*

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
                email: values.email,
                password: values.password
            }
            dispatch(login(userData))
            if (isError) {
                console.log("error mesage")
            }
            if (isSuccess || user) {
                navigate('/home')
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
            navigate('/home')
        }
        dispatch(reset())
    }, [user, isSuccess, isError, message, navigate, dispatch])

    return (<>
        <div className={style.paper}>
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


*/