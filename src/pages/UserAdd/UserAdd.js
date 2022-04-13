import {React,useRef} from 'react'
import {useDispatch} from 'react-redux'
import { insertCustomer } from '../../store/user/userSlice';
import updateFile  from "../../store/user/userSlice";
import"./UserAdd.css"

const  UserAdd = () => {
    const customerName = useRef(null)
    const customerPhone = useRef(null)
    const customerEmail = useRef(null)
    const image = useRef(null)
    const customerPassword = useRef(null)
    const confirmPassword = useRef(null)
    const role = useRef(null)
    const customerAddresses = useRef(null)

    const dispatch = useDispatch()
    
    const handleSubmit =(e)=>{
        e.preventDefault()
        const data = {
            fullName: customerName.current.value,
            customerPhone: customerPhone.current.value,
            customerEmail: customerEmail.current.value,
            // image: e.target.files[0],
            customerPassword: customerPassword.current.value,
            confirmPassword: confirmPassword.current.value,
            role: role.current.value,
            customerAddresses: customerAddresses.current.value,
        }
        dispatch(insertCustomer(data))
        customerName.current.value = null
        customerPhone.current.value = null
        customerEmail.current.value = null
        image.current.value = null
        customerPassword.current.value = null
        confirmPassword.current.value = null
        role.current.value = null
        customerAddresses.current.value = null
    }

  return (
<div className="row justify-content-center  align-items-center mx-auto">
<form  className='continer px-5 py-5 text-center  mx-auto sign-Up' onSubmit={handleSubmit}>
            <div className='d-flex align-items-center justify-content-evenly w-100'>
            <label htmlFor="userName"><i className="fa-solid border p-2 rounded-circle fa-user" role="button"></i></label>
                <input className='form-control w-75 ' placeholder='Enter Your fullname' type="text" name='fullName' ref={customerName}  />
            </div>
            <div className='d-flex align-items-center justify-content-evenly w-100'>
            <label htmlFor="userName"><i class="fa-solid fa-phone border p-2 rounded-circle " role="button"></i></label>
                <input className='form-control w-75 'type="number" placeholder='Enter Your Phonenumber'  name='customerPhone'ref={customerPhone} />
            </div>
            <div className='d-flex align-items-center justify-content-evenly w-100'>
            <label htmlFor="userName"><i class="fa-solid fa-at border p-2 rounded-circle  " role="button"></i></label>
                <input className='form-control w-75 'type="email" placeholder='Enter Your Email' name='customerEmail' ref={customerEmail}  />
            </div>
            <div className='d-flex align-items-center justify-content-evenly w-100'>
            <label htmlFor="userImage"><i class="fa-solid fa-at border p-2 rounded-circle  " role="button"></i></label>
                <input className='form-control w-75 'type="file" placeholder='Enter Your Email' name='image' ref={image} />
            </div>
            <div className='d-flex align-items-center justify-content-evenly w-100'>
            <label htmlFor="Passoword"><i className="fa-solid fa-unlock-keyhole border p-2 rounded-circle " role="button"></i></label>
                <input className='form-control w-75 'type="text" placeholder='Enter Your Password' name='customerPassword'ref={customerPassword} />
            </div>
            <div className='d-flex align-items-center justify-content-evenly w-100'>
            <label htmlFor="Passoword"><i className="fa-solid fa-unlock-keyhole border p-2 rounded-circle  " role="button"></i></label>
                <input className='form-control w-75 'type="text" placeholder='Confirm Your Password' name='confirmPassword'ref={confirmPassword}  />
            </div>
            <div className='d-flex align-items-center justify-content-evenly w-100'>
            <label htmlFor="userName"><i className="fa-solid border p-2 rounded-circle fa-user  " role="button"></i></label>
                <input className='form-control w-75 'type="text" placeholder='Enter Your Role' name='role' ref={role} />
            </div>
            <div className='d-flex align-items-center justify-content-evenly w-100'>
            <label htmlFor="userName"><i className="fa-solid fa-location-dot border rounded-circle p-2  " role="button"></i></label>
                <input className='form-control w-75'type="text" placeholder='Enter Your Address' name='customerAddresses'ref={customerAddresses} />
            </div>
            <button className='btnSubmit btn mt-3' type="submit">Add<i class="fa-solid fa-clipboard-list mx-1"></i></button>
        </form>
        </div>
  )
}

export default UserAdd