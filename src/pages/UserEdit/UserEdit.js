import {React,useState,useEffect} from 'react'
import {useLocation,useNavigate } from 'react-router-dom'
import {useDispatch  } from 'react-redux';
import { editCustomer ,getCustomers } from './../../store/user/userSlice';
import Sidebar from './../../components/Sidebar/Sidebar';

function UserEdit() {
const location = useLocation()
const customerInfo = location.state.customerData
const id = customerInfo._id
console.log(id)

const [fullName,setName] = useState(customerInfo.fullName)
const [image,setFile] = useState(customerInfo.image)
const [customerPhone,setPhone] = useState(customerInfo.customerPhone)
const [role,setRole] = useState(customerInfo.role)
const [country,setCountry] = useState(customerInfo.customerAddress.country)
const [city,setCity] = useState(customerInfo.customerAddress.city)
const [streetName,setStreetName] = useState(customerInfo.customerAddress.streetName)
const [buildingNumber,setBuildingNumber] = useState(customerInfo.customerAddress.buildingNumber)
const [floorNumber,setFloorNumber] = useState(customerInfo.customerAddress.floorNumber)
console.log(fullName,image,customerPhone,role,country,city,streetName,buildingNumber,floorNumber)
const dispatch = useDispatch()
const navigate =useNavigate()

const handleSubmit = (e)=>{
e.preventDefault()
 const formData = new FormData();
 formData.append('fullName',fullName)
 formData.append('image',image)
 formData.append('customerPhone',customerPhone)
 formData.append('role', role)
 formData.append('customerAddress', JSON.stringify(
  {
    country: country,
    city: city,
    streetName: streetName,
    buildingNumber: buildingNumber,
    floorNumber: floorNumber,
  }
))


dispatch(editCustomer({formData:formData,id:id}))
dispatch(getCustomers())

 navigate("/users")
}

  return (
    <>
    <Sidebar/>
 
    <div className='row justify-content-center  align-items-center mx-auto mb-3'>
      <form className='continer px-5 py-5 text-center  mx-auto sign-Up' onSubmit={(e)=>handleSubmit(e)} encType="multipart/form-data">
      <h2 className='mb-4 fw-bold'>Edit User</h2>

        <div className='d-flex align-items-center justify-content-evenly w-100'>
        <span className='fa-solid border p-2 rounded-circle fa-user me-1'></span><input className='form-control col-md-6' value={fullName} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className='d-flex align-items-center justify-content-evenly w-100'>
        <span className='fa-solid fa-phone border p-2 rounded-circle  me-1'></span><input className='form-control col-md-6' disabled value={`Email : ${customerInfo.customerEmail}`}/>
        </div>
        <div className='d-flex align-items-center justify-content-evenly w-100'>
        <span className='fa-solid fa-image border p-2 rounded-circle  me-1'></span><img src={image} style={{width:"50px",height:"50px"}}/><input type="file" className='ms-1' onChange={(e)=>setFile(e.target.files[0])}/>
        </div>
        <div className='d-flex align-items-center justify-content-evenly w-100'>
        <span className='fa-solid fa-unlock-keyhole border p-2 rounded-circle me-1'></span><input className='form-control col-md-6' value={customerPhone} onChange={(e)=>setPhone(e.target.value)}/>
        </div>
        <div className='d-flex align-items-center justify-content-evenly w-100'>
        <span className='fa-solid fa-unlock-keyhole border p-2 rounded-circle me-1'></span><input className='form-control col-md-6' disabled placeholder= {`Customer Role is ${customerInfo.role}`} />
        </div>
        <div className='d-flex align-items-center justify-content-evenly w-100'>
        <span className='fa-solid fa-user border p-2 rounded-circle me-1'></span>
        <select className='form-select col-md-6' onChange={(e)=>setRole(e.target.value)}>
        <option value="Doctor">Doctor</option>
        <option value="Merchant">Merchant</option>
        </select>
        </div>
        <div className='d-flex align-items-center justify-content-evenly w-100'>
        <span className='fa-solid fa-unlock-keyhole border p-2 rounded-circle me-1'></span><input className='form-control col-md-6' value={country} onChange={(e)=>setCountry(e.target.value)}/>
        </div>
        <div className='d-flex align-items-center justify-content-evenly w-100'>
        <span className='fa-solid fa-unlock-keyhole border p-2 rounded-circle me-1'></span><input className='form-control col-md-6' value={city} onChange={(e)=>setCity(e.target.value)}/>
        </div>
        <div className='d-flex align-items-center justify-content-evenly w-100'>
        <span className='fa-solid fa-unlock-keyhole border p-2 rounded-circle me-1'></span><input className='form-control col-md-6' value={streetName} onChange={(e)=>setStreetName(e.target.value)}/>
        </div>
        <div className='d-flex align-items-center justify-content-evenly w-100'>
        <span className='fa-solid fa-unlock-keyhole border p-2 rounded-circle me-1'></span><input className='form-control col-md-6' value={buildingNumber} onChange={(e)=>setBuildingNumber(e.target.value)}/>
        </div>
        <div className='d-flex align-items-center justify-content-evenly w-100'>
        <span className='fa-solid fa-unlock-keyhole border p-2 rounded-circle me-1'></span><input className='form-control col-md-6' value={floorNumber} onChange={(e)=>setFloorNumber(e.target.value)}/>
        </div>
        <div className='d-flex align-items-center justify-content-evenly w-100'>
          <button className='btn btn-primary' type='submit'>Submit</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default UserEdit