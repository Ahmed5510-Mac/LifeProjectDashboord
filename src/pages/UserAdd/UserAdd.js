import { React, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { insertCustomer,getCustomers } from '../../store/user/userSlice';
import { useNavigate } from "react-router-dom";
import "./UserAdd.css"

const UserAdd = () => {
    const [customerName, setName] = useState(null)
    const [customerPhone, setPhone] = useState(null)
    const [customerEmail, setEmail] = useState(null)
    const [customerPassword, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const role= useRef('')
    const [customerCountry, setCountry] = useState(null)
    const [customerCity, setCity] = useState(null)
    const [customerStreet, setStreet] = useState(null)
    const [customerBuilding, setBuilding] = useState(null)
    const [customerFloor, setFloor] = useState(null)
    const [file, setFile] = useState(null)

    const dispatch = useDispatch()
    let navigate = useNavigate();

     const  handleSubmit = async  (e) => {
        e.preventDefault()
        let formData = new FormData();
        formData.append('fullName', customerName)
        formData.append('customerPhone', customerPhone)
        formData.append('customerEmail', customerEmail)
        formData.append('image', file)
        formData.append('customerPassword', customerPassword)
        formData.append('confirmPassword', confirmPassword)
        formData.append('role', role.current.value)
        formData.append('customerAddress',
            JSON.stringify(
                {
                    country: customerCountry,
                    city: customerCity,
                    streetName: customerStreet,
                    buildingNumber: customerBuilding,
                    floorNumber: customerFloor,
                }
            ))
            dispatch(insertCustomer(formData))
            dispatch(getCustomers())
            navigate("/users")
    }

    return (
        <div className="row justify-content-center  align-items-center mx-auto mb-3">
            <form className='continer px-5 py-5 text-center  mx-auto sign-Up' onSubmit={(e)=>handleSubmit(e)} encType='multipart/formData'>
                <div className='d-flex align-items-center justify-content-evenly w-100'>
                    <label htmlFor="userName"><i className="fa-solid border p-2 rounded-circle fa-user" role="button"></i></label>
                    <input className='form-control w-75 ' placeholder='Enter Your fullname' type="text" name='fullName' onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='d-flex align-items-center justify-content-evenly w-100'>
                    <label htmlFor="userName"><i className="fa-solid fa-phone border p-2 rounded-circle " role="button"></i></label>
                    <input className='form-control w-75 ' type="number" placeholder='Enter Your Phonenumber' name='customerPhone' onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className='d-flex align-items-center justify-content-evenly w-100'>
                    <label htmlFor="userName"><i className="fa-solid fa-at border p-2 rounded-circle  " role="button"></i></label>
                    <input className='form-control w-75 ' type="email" placeholder='Enter Your Email' name='customerEmail' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='d-flex align-items-center justify-content-evenly w-100'>
                    <label htmlFor="userImage"><i className="fa-solid fa-image border p-2 rounded-circle  " role="button"></i></label>
                    <input className='form-control w-75' type="file" accept=".png,.jpeg,.jpg" name='image' onChange={(e) => setFile(e.target.files[0])} />
                </div>
                <div className='d-flex align-items-center justify-content-evenly w-100'>
                    <label htmlFor="Passoword"><i className="fa-solid fa-unlock-keyhole border p-2 rounded-circle " role="button"></i></label>
                    <input className='form-control w-75 ' type="password" placeholder='Enter Your Password' name='customerPassword' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='d-flex align-items-center justify-content-evenly w-100'>
                    <label htmlFor="Passoword"><i className="fa-solid fa-unlock-keyhole border p-2 rounded-circle  " role="button"></i></label>
                    <input className='form-control w-75 ' type="password" placeholder='Confirm Your Password' name='confirmPassword' onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <div className='d-flex align-items-center justify-content-evenly w-100'>
                    <label htmlFor="userName"><i className="fa-solid border p-2 rounded-circle fa-user  " role="button"></i></label>
                    <select className='form-select w-75 mb-1' ref={role}>
                    <option value="Doctor">Doctor</option>
                    <option value="Merchant">Merchant</option>
                    </select>
                </div>
                <div className='d-flex align-items-center justify-content-evenly w-100'>
                    <label htmlFor="userName"><i className="fa-solid fa-location-dot border rounded-circle p-2  " role="button"></i></label>
                    <input className='form-control w-75' type="text" placeholder='Enter Your country' name='customer.country' onChange={(e) => setCountry(e.target.value)} />
                </div>
                <div className='d-flex align-items-center justify-content-evenly w-100'>
                    <label htmlFor="userName"><i className="fa-solid fa-location-dot border rounded-circle p-2  " role="button"></i></label>
                    <input className='form-control w-75' type="text" placeholder='Enter Your city' name='customer.city' onChange={(e) => setCity(e.target.value)} />
                </div>
                <div className='d-flex  align-items-center justify-content-evenly w-100'>
                    <label htmlFor="userName"><i className="fa-solid fa-location-dot border rounded-circle p-2  " role="button"></i></label>
                    <input className='form-control w-75' type="text" placeholder='Enter Your street name' name='customer.streetName' onChange={(e) => setStreet(e.target.value)} />
                </div>
                <div className='d-flex  align-items-center justify-content-evenly w-100'>
                    <label htmlFor="userName"><i className="fa-solid fa-location-dot border rounded-circle p-2  " role="button"></i></label>
                    <input className='form-control w-75' type="number" placeholder='Enter Your building number' name='customer.buildingNumber' onChange={(e) => setBuilding(e.target.value)} />
                </div>
                <div className='d-flex align-items-center justify-content-evenly w-100'>
                    <label htmlFor="userName"><i className="fa-solid fa-location-dot border rounded-circle p-2  " role="button"></i></label>
                    <input className='form-control w-75' type="number" placeholder='Enter Your floor number' name='customer.floorNumber' onChange={(e) => setFloor(e.target.value)} />
                </div>
                <button className='btnSubmit btn mt-3' type="submit">Add<i className="fa-solid fa-clipboard-list mx-1"></i></button>
            </form>
        </div>
    )
}

export default UserAdd