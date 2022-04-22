
import { React, useState } from "react";
import { useDispatch } from "react-redux";
import {  useLocation, useNavigate} from "react-router-dom";
import { editCategory } from "../../store/category/categorySlice";
import Sidebar from './../../components/Sidebar/Sidebar';

const CategoryEdit = () => {
  const location=useLocation();
  const categoryData=location.state.info
  const dispatch = useDispatch();
  const navigate =useNavigate();
  const [file, setFile] = useState({image:categoryData.image});
  const [categoryname, setcategoryname] = useState({name:categoryData.name});
    const handleSubmit = (e) => {
      e.preventDefault();
      let formData = new FormData();
      formData.append("name", categoryname.name);
      formData.append("image",file.image);
      dispatch(editCategory({formData:formData,id:categoryData._id}));
      navigate(`/Category`)
      
    };

  return (<>
 <Sidebar/>

 <div className="row justify-content-center  align-items-center mx-auto">
      <form
        className="continer px-5 py-5 text-center  mx-auto sign-Up"
        onSubmit={(e)=>handleSubmit(e)} encType='multipart/form-data'
      >
          <h2 className='mb-4 fw-bold'>Edit Category</h2>
           <div className="d-flex align-items-center justify-content-evenly w-100 my-2">
          <label htmlFor="name">
            <i
              className="fa-solid fa-key border p-2 rounded-circle fa-2x"
              role="button"
            ></i>
          </label>
          <input
            className="form-control w-75 m-0 "
            placeholder="id"
            value={categoryData._id}
            disabled
            name="id"
          />
          </div>
        <div className="d-flex align-items-center justify-content-evenly w-100 my-2">
          <label htmlFor="name">
            <i
              className="fa-solid border p-2 rounded-circle fa-user fa-2x"
              role="button"
            ></i>
            
          </label>
          <input
            className="form-control w-75 m-0"
            value={categoryname.name}
            type="text"
            name="name"
            onChange={(e) => setcategoryname({...categoryname,name:e.target.value})}
          />
        </div>
        <div className="d-flex align-items-center justify-content-evenly w-100 my-2">
          <label htmlFor="categoryImage">
          {/* <i className="fa-solid fa-image border p-2 rounded-circle" role="button"></i> */}
           <img src={file.image} width="50px" height="50px" alt={categoryname.name} className="rounded-circle "/> 
          </label>
          <input
            className="form-control w-75 m-0"
            type="file"
            accept=".png,.jpeg,.jpg"
            name="image"
            onChange={(e) => setFile({...file,image:e.target.files[0]})}
          />
         
        </div>

        {/* <button className="btnSubmit btn mt-3" type="submit">
        edit<i className="fa-solid fa-clipboard-list mx-1"></i> */}
       
          <button className="btnSubmit btn mt-3" type="submit" style={{color:"white"}} >
        edit<i className="fa-solid fa-clipboard-list mx-1"></i> 
        </button>
       
        
      </form>
    </div>
  </>);
}

export default CategoryEdit;
