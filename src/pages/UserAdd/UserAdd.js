import {React,useRef,useState} from 'react'
import {useDispatch} from 'react-redux'
import { insertCustomer } from '../../store/user/userSlice';
import"./UserAdd.css"

const  UserAdd = () => {
    const customerName = useRef(null)
    const customerPhone = useRef(null)
    const customerEmail = useRef(null)
    const customerPassword = useRef(null)
    const confirmPassword = useRef(null)
    const role = useRef(null)
    const customerCountry = useRef(null)
    const customerCity = useRef(null)
    const customerStreet= useRef(null)
    const customerBuilding = useRef(null)
    const customerFloor = useRef(null)

    const dispatch = useDispatch()
    const [file,setFile] = useState(null)

    const handleSubmit =(e)=>{
        e.preventDefault()
        let formData = new FormData();
        formData.append('fullName',customerName.current.value)
        formData.append('customerPhone',customerPhone.current.value)
        formData.append('customerEmail',customerEmail.current.value)
        formData.append('image',file)
        formData.append('customerPassword',customerPassword.current.value)
        formData.append('confirmPassword',confirmPassword.current.value)
        formData.append('role',role.current.value)  

        dispatch(insertCustomer(formData))
        customerName.current.value = null
        customerPhone.current.value = null
        customerEmail.current.value = null
        customerPassword.current.value = null
        confirmPassword.current.value = null
        role.current.value = null
    }
 

   

  return (
<div className="row justify-content-center  align-items-center mx-auto">
<form  className='continer px-5 py-5 text-center  mx-auto sign-Up' onSubmit={handleSubmit} encType='multipart/form-data'>
            <div className='d-flex align-items-center justify-content-evenly w-100'>
            <label htmlFor="userName"><i className="fa-solid border p-2 rounded-circle fa-user" role="button"></i></label>
                <input className='form-control w-75 ' placeholder='Enter Your fullname' type="text" name='fullName' ref={customerName}  />
            </div>
            <div className='d-flex align-items-center justify-content-evenly w-100'>
            <label htmlFor="userName"><i className="fa-solid fa-phone border p-2 rounded-circle " role="button"></i></label>
                <input className='form-control w-75 'type="number" placeholder='Enter Your Phonenumber'  name='customerPhone'ref={customerPhone} />
            </div>
            <div className='d-flex align-items-center justify-content-evenly w-100'>
            <label htmlFor="userName"><i className="fa-solid fa-at border p-2 rounded-circle  " role="button"></i></label>
                <input className='form-control w-75 'type="email" placeholder='Enter Your Email' name='customerEmail' ref={customerEmail}  />
            </div>
            <div className='d-flex align-items-center justify-content-evenly w-100'>
            <label htmlFor="userImage"><i className="fa-solid fa-at border p-2 rounded-circle  " role="button"></i></label>
                <input className='form-control w-75' type="file"  accept=".png,.jpeg,.jpg" name='image'  onChange={(e)=>setFile(e.target.files[0])}/>
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
                <input className='form-control w-75'type="text" placeholder='Enter Your country' name='customer.country'ref={customerCountry} />
            </div>
            <div className='d-flex align-items-center justify-content-evenly w-100'>
            <label htmlFor="userName"><i className="fa-solid fa-location-dot border rounded-circle p-2  " role="button"></i></label>
                <input className='form-control w-75'type="text" placeholder='Enter Your city' name='customer.city'ref={customerCity} />
            </div>
            <div className='d-flex align-items-center justify-content-evenly w-100'>
            <label htmlFor="userName"><i className="fa-solid fa-location-dot border rounded-circle p-2  " role="button"></i></label>
                <input className='form-control w-75'type="text" placeholder='Enter Your street name' name='customer.streetName'ref={customerStreet} />
            </div>
            <div className='d-flex align-items-center justify-content-evenly w-100'>
            <label htmlFor="userName"><i className="fa-solid fa-location-dot border rounded-circle p-2  " role="button"></i></label>
                <input className='form-control w-75'type="number" placeholder='Enter Your building number' name='customer.buildingNumber'ref={customerBuilding} />
            </div>
            <div className='d-flex align-items-center justify-content-evenly w-100'>
            <label htmlFor="userName"><i className="fa-solid fa-location-dot border rounded-circle p-2  " role="button"></i></label>
                <input className='form-control w-75'type="number" placeholder='Enter Your floor number' name='customer.floorNumber'ref={customerFloor} />
            </div>
            <button className='btnSubmit btn mt-3' type="submit">Add<i className="fa-solid fa-clipboard-list mx-1"></i></button>
        </form>
        </div>
  )
}

export default UserAdd