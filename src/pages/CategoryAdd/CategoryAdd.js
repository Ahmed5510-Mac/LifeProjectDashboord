import { React, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { insertCategory } from "../../store/category/categorySlice";
import Sidebar from './../../components/Sidebar/Sidebar';

const CategoryAdd = () => {
  const categoryName = useRef(null);
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const [file, setFile] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", categoryName.current.value);
    formData.append("image", file);
    dispatch(insertCategory(formData));
    categoryName.current.value = null;
    navigate(`/Category`)
  };
  return (
    <>
    <Sidebar/>
    <div className="row justify-content-center  align-items-center mx-auto">
      <form
        className="continer px-5 py-5 text-center  mx-auto sign-Up"
        onSubmit={(e)=>handleSubmit(e)} encType='multipart/form-data'
      >
          <h2 className='mb-4 fw-bold'>Add Category</h2>
        <div className="d-flex align-items-center justify-content-evenly w-100">
          <label htmlFor="name">
            <i
              className="fa-solid border p-2 rounded-circle fa-user"
              role="button"
            ></i>
          </label>
          <input
            className="form-control w-75 "
            placeholder="Enter category name"
            type="text"
            name="name"
            ref={categoryName}
          />
        </div>
        <div className="d-flex align-items-center justify-content-evenly w-100">
          <label htmlFor="categoryImage">
          <i className="fa-solid fa-image border p-2 rounded-circle" role="button"></i>
            
          </label>
          <input
            className="form-control w-75"
            type="file"
            accept=".png,.jpeg,.jpg"
            name="image"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <button className="btnSubmit btn mt-3" type="submit">
          Add<i className="fa-solid fa-clipboard-list mx-1"></i>
        </button>
      </form>
    </div>
    </>
  );
};

export default CategoryAdd;
