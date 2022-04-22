import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import {  getstores } from "../../store/store/storeSlice";
import style from './StoreList.module.css';

const StoreList = () => {
  const { stores, isLoading } = useSelector((state) => state.stores);
  const dispatch = useDispatch();
  const navigate=useNavigate()
  useEffect(() => {
    dispatch(getstores());
  }, [dispatch]);
  const storesList = stores && stores.map((stores) => (<tr key={stores._id}>
    <td className="text-center" >{stores.storeName}</td>
    <td className="text-center">{stores.storePhone}</td>
    <td className="text-center">{stores.storeCategoriesId.map((category)=>(category.name))}</td>
    <td className="text-center">{stores.storeAddress.storeCity}</td>
    <td className="text-center"><span className='fa-solid fa-pen-to-square' role="button"  onClick={() => { navigate(`/stores/${stores._id}/edit`, { state: { storeData: stores } }) }} ></span></td>
  </tr>))
 
  return (
    <>
     <Sidebar />
     <div className={style.storeList}>
     {isLoading ? 'loading...' : <div className='container'>
     <h2 className="text-center fw-bold text-dark my-2">Stores</h2>
        <NavLink to='/stores/add' className='btn btn-primary my-2'>
              Add Store
            </NavLink>
     <table className="table table-hover table-bordered table-striped">
            
              <thead>
                <tr>
                  <th className="text-center">Store Name</th>
                  <th className="text-center">Store phone</th>
                  <th className="text-center">Category name</th>
                  <th className="text-center">Store Address</th>
                  <th className="text-center">operation</th>


                </tr>
              </thead>
              <tbody>{storesList}</tbody>
            </table>
      </div>
     }
     </div>
    </>
  );
};

export default StoreList;
