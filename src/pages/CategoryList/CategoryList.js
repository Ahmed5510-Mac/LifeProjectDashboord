import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  getCategory,
  deleteCategory,
} from '../../store/category/categorySlice';
import { CircularProgress } from '@material-ui/core';
import style from './CategoryList.module.css';

const CategoryList = () => {
  const { Category, isLoading } = useSelector((state) => state.Category);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);
  const handleDelete = (_id) => {
    dispatch(deleteCategory(_id));
  };

  return (
    <>
      <div className={style.categoryList}>
        {isLoading ? (
          <div
            height='400px'
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 'auto',
            }}
          >
            <CircularProgress /> loading...
          </div>
        ) : (
          <div className='container'>
            <NavLink to='/Category/add' className='btn btn-primary my-2'>
              Add Category
            </NavLink>
            <table className='table table-hover table-bordered table-striped'>
              <thead>
                <tr>
                  <th>Category Name</th>
                  <th>Category image</th>
                  <th>operation</th>
                </tr>
              </thead>
              <tbody>
                {Category &&
                  Category.map((Category) => (
                    <tr key={Category._id}>
                      <td>{Category.name}</td>
                      <td>
                        {' '}
                        <img
                          src={Category.image}
                          alt={Category.name}
                          style={{
                            width: '300px',
                            height: '100px',
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                          }}
                        ></img>
                      </td>
                      <td>
                        <span
                          className='fa-solid fa-trash'
                          onClick={() => handleDelete(Category._id)}
                          style={{ cursor: 'pointer', margin: '5px' }}
                        ></span>
                        <span
                          className='fa-solid fa-pen-to-square'
                          onClick={() =>
                            navigate(`/Category/${Category._id}/edit`, {
                              state: { info: Category },
                            })
                          }
                          style={{
                            cursor: 'pointer',
                            color: 'black',
                            margin: '5px',
                          }}
                        ></span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default CategoryList;
