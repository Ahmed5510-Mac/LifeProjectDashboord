import Sidebar from "../../components/Sidebar/Sidebar";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getstores, insertstores } from "../../store/store/storeSlice";
import { getCategory } from "../../store/category/categorySlice";
const validationSchema = Yup.object({
  storeName: Yup.string().required("Please Enter your storeName"),
  storePhone: Yup.string().required("Please Enter your storePhone"),
  storeRent: Yup.string().required("Please Enter your storeRent"),
  storeEmployeesId: Yup.number().required("Please confirm your storeEmployeesId"),
  storeCategoriesId: Yup.number().required(
    "Please confirm your storeCategoriesId"
  ),
  storeCity: Yup.string().required("Please Enter your  storeCity"),
  storeStreet: Yup.string().required("Please Enter your storeStreet"),
});

const StoreAdd = () => {
    const {Category} = useSelector((state) => state.Category)
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      storeName: "",
      storePhone: "",
      storeRent: "",
      storeEmployeesId: "",
      storeCategoriesId: "",
      storeCity: "",
      storeStreet: "",
    },
    onSubmit: (values) => {
      const data = {
        storeName: values.storeName,
        storePhone:values.storePhone,
        storeRent: values.storeRent,
        storeEmployeesId: values.storeEmployeesId,
        storeCategoriesId: values.storeCategoriesId,
        storeAddress:JSON.stringify(
          {
              storeCity: values.storeCity,
              storeStreet: values.storeStreet,
          }
        )
      };
      console.log(values);
    
      dispatch(insertstores(data));
      dispatch(getCategory())
      dispatch(getstores());
      navigate("/stores");
    },
    validationSchema,
  });

  return (
    <>
      <Sidebar />
      <div className="row justify-content-center  align-items-center mx-auto mb-3">
        <form
          onSubmit={formik.handleSubmit}
          className="continer px-5 py-5 text-center  mx-auto sign-Up"
        >
               <h2 className='mb-4 fw-bold'>Add Store</h2>
          <div className="d-flex align-items-center justify-content-evenly w-100">
            <label htmlFor="fullName">
              <i
                className="fa-solid border p-2 rounded-circle fa-user"
                role="button"
              ></i>
            </label>
            <input
              className="form-control w-75 "
              placeholder="Enter Your storeName"
              type="text"
              name="storeName"
              {...formik.getFieldProps("storeName")}
            />
          </div>
          {formik.touched.storeName && formik.errors.storeName ? (
            <div className="errorForm">{formik.errors.storeName}</div>
          ) : null}
          <div className="d-flex align-items-center justify-content-evenly w-100">
            <label htmlFor="storePhone">
              <i
                className="fa-solid fa-phone border p-2 rounded-circle "
                role="button"
              ></i>
            </label>
            <input
              className="form-control w-75 "
              type="text"
              placeholder="Enter Your storePhone"
              name="storePhone"
              {...formik.getFieldProps("storePhone")}
            />
          </div>
          {formik.touched.storePhone && formik.errors.storePhone ? (
            <div className="errorForm">{formik.errors.storePhone}</div>
          ) : null}
          <div className="d-flex align-items-center justify-content-evenly w-100">
            <label htmlFor="storeRent">
              <i
                className="fa-solid fa-at border p-2 rounded-circle  "
                role="button"
              ></i>
            </label>
            <input
              className="form-control w-75 "
              type="text"
              placeholder="Enter Your storeRent"
              name="storeRent"
              {...formik.getFieldProps("storeRent")}
            />
          </div>
          {formik.touched.storeRent && formik.errors.storeRent ? (
            <div className="errorForm">{formik.errors.storeRent}</div>
          ) : null}
    
          <div className="d-flex align-items-center justify-content-evenly w-100">
            <label htmlFor="storeEmployeesId">
              <i
                className="fa-solid fa-unlock-keyhole border p-2 rounded-circle "
                role="button"
              ></i>
            </label>
            <input
              className="form-control w-75 "
              type="number"
              placeholder="Enter Your storeEmployeesId"
              name="storeEmployeesId"
              {...formik.getFieldProps("storeEmployeesId")}
            />
          </div>
          {formik.touched.storeEmployeesId && formik.errors.storeEmployeesId ? (
            <div className="errorForm">{formik.errors.storeEmployeesId}</div>
          ) : null}
          
          <div className='d-flex align-items-center justify-content-evenly w-100'>
                        <label htmlFor="storeCategoriesId"><i className="fa-solid fa-boxes-stacked border rounded-circle p-2  " role="button"></i></label>
                        <select className='form-select w-75 mb-1' name="storeCategoriesId"
                            value={formik.values.storeCategoriesId}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}>
                            <option selected disapled>Change Category</option>
                            {Category && Category.map((category) =>
                                <option value={category._id}>{category.name}</option>
                            )}
                        </select>
                    </div>
          {formik.touched.storeCategoriesId && formik.errors.storeCategoriesId ? (
            <div className="errorForm">{formik.errors.storeCategoriesId}</div>
          ) : null}
          <div className="d-flex align-items-center justify-content-evenly w-100">
            <label htmlFor="storeCity">
              <i
                className="fa-solid fa-location-dot border rounded-circle p-2  "
                role="button"
              ></i>
            </label>
            <input
              className="form-control w-75"
              type="text"
              placeholder="Enter Your storeCity"
              name="storeCity"
              {...formik.getFieldProps("storeCity")}
            />
          </div>
          {formik.touched.storeCity && formik.errors.storeCity ? (
            <div className="errorForm">{formik.errors.storeCity}</div>
          ) : null}

          <div className="d-flex align-items-center justify-content-evenly w-100">
            <label htmlFor="storeStreet">
              <i
                className="fa-solid fa-location-dot border rounded-circle p-2  "
                role="button"
              ></i>
            </label>
            <input
              className="form-control w-75"
              type="text"
              placeholder="Enter Your storeStreet"
              name="storeStreet"
              {...formik.getFieldProps("storeStreet")}
            />
          </div>
          {formik.touched.storeStreet && formik.errors.storeStreet ? (
            <div className="errorForm">{formik.errors.storeStreet}</div>
          ) : null}
          
          <button className="btnSubmit btn mt-3" type="submit">
            submit <i className="fa-solid fa-clipboard-list"></i>
          </button>
        </form>
      </div>
    </>
  );
};

export default StoreAdd;
