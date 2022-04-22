import Sidebar from "../../components/Sidebar/Sidebar";
import {React,useState} from 'react'
import {useLocation,useNavigate } from 'react-router-dom'
import {useDispatch, useSelector  } from 'react-redux';
import { editstores, getstores } from "../../store/store/storeSlice";
import { getCategory } from "../../store/category/categorySlice";

const StoreEdit = () => {
    const location = useLocation()
    console.log(location);
const storeinfo = location.state.storeData
const id = storeinfo._id
console.log(id)
const [storeName,setstoreName] = useState(storeinfo.storeName)
const [storePhone,setstorePhone] = useState(storeinfo.storePhone)
const [storeRent,setstoreRent] = useState(storeinfo.storeRent)
const [storeEmployeesId,setstoreEmployeesId] = useState(storeinfo.storeEmployeesId)
const [storeCategoriesId,setstoreCategoriesId] = useState(storeinfo.storeCategoriesId)
const [storeCity,setstoreCity] = useState(storeinfo.storeAddress.storeCity)
const [storeStreet,setstoreStreet] = useState(storeinfo.storeAddress.storeStreet)
console.log(storeName,storePhone,storeRent,storeEmployeesId,storeCategoriesId,storeCity,storeStreet)
const dispatch = useDispatch()
const navigate =useNavigate()
const {Category} = useSelector((state) => state.Category)

const handleSubmit = (e)=>{
e.preventDefault()
const data = {
    storeName: storeName,
    storePhone:storePhone,
    storeRent: storeRent,
    storeEmployeesId: storeEmployeesId,
    storeCategoriesId: storeCategoriesId,
    storeAddress:JSON.stringify(
        {
            storeCity: storeCity,
            storeStreet: storeStreet,
        }
      )
  };


dispatch(editstores({Data:data,id:id}))
dispatch(getCategory())
dispatch(getstores())


 navigate("/stores")
}
 
    return (
        <>
        <Sidebar/>
        
 <div className="row justify-content-center  align-items-center mx-auto mb-3">
      <form
        className="continer px-5 py-5 text-center  mx-auto sign-Up"
        onSubmit={(e)=>handleSubmit(e)} encType='multipart/form-data'
        >
          <h2 className='mb-4 fw-bold'>Edit Store</h2>

           <div className="d-flex align-items-center justify-content-evenly w-100 ">
          <label htmlFor="name">
            <i
              className="fa-solid fa-key border p-2 mx-2 rounded-circle "
              role="button"
            ></i>
          </label>
          <input className='form-control col-md-6' value={storeName} onChange={(e)=>setstoreName(e.target.value)}/>

          </div>
        <div className="d-flex align-items-center justify-content-evenly w-100 ">
          <label htmlFor="name">
            <i
              className="fa-solid border p-2  mx-2 rounded-circle fa-user "
              role="button"
            ></i>
            
          </label>
          <input className='form-control col-md-6' value={storePhone} onChange={(e)=>setstorePhone(e.target.value)}/>

        </div>
        <div className="d-flex align-items-center justify-content-evenly w-100 ">
          <label htmlFor="categoryImage">
          <i className="fa-solid fa-image border  mx-2 p-2 rounded-circle" role="button"></i>
          </label>
            <input className='form-control col-md-6' value={storeRent} onChange={(e)=>setstoreRent(e.target.value)}/>
        </div>
        <div className="d-flex align-items-center justify-content-evenly w-100 ">
          <label htmlFor="categoryImage">
          <i className="fa-solid fa-image  mx-2 border p-2 rounded-circle" role="button"></i>
          </label>
          <input className='form-control col-md-6' value={storeEmployeesId} onChange={(e)=>setstoreEmployeesId(e.target.value)}/>
        </div>

        <div className="d-flex align-items-center justify-content-evenly w-100 ">
          <label>
        <i className='fa-solid border  mx-2 p-2 rounded-circle fa-book my-2' role="button"></i>
         </label>
          <select className='form-select' onChange={(e) => setstoreCategoriesId(e.target.value)}>
            <option selected disapled>Change Category</option>
            {Category && Category.map((Category) =>
              <option value={Category._id}>{Category.name}</option>
            )}
          </select>
        </div>

        <div className="d-flex align-items-center justify-content-evenly w-100">
          <label htmlFor="categoryImage">
          <i className="fa-solid fa-image border  mx-2 p-2 rounded-circle" role="button"></i>
          </label>
          <input className='form-control col-md-6' value={storeCity} onChange={(e)=>setstoreCity(e.target.value)}/>

        </div>
        <div className="d-flex align-items-center justify-content-evenly w-100 ">
          <label htmlFor="categoryImage">
          <i className="fa-solid fa-image  mx-2 border p-2 rounded-circle" role="button"></i>
          </label>
          <input className='form-control col-md-6' value={storeStreet} onChange={(e)=>setstoreStreet(e.target.value)}/>

        </div>
       
          <button className="btnSubmit btn mt-3" type="submit" style={{color:"white"}} >
        edit<i className="fa-solid fa-clipboard-list mx-1"></i> 
        </button>
     
        
      </form>
    </div>
     
      
           
          
           
   
          
        
        
        </>
    );
  };
  
  export default StoreEdit;
  