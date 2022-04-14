import style from './ProductList.module.css';
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'products',
      headerName: 'Products',
      width: 150,
      editable: true,
    },
    {
      field: 'stock',
      headerName: 'Stock',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 180,
    },
    {
      field: 'status',
      headerName: 'Status',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
    {
      field: 'price',
      headerName: 'Price',
      sortable: true,
      width: 180,
    }, {
      field: 'action',
      headerName: 'Action',
      width: 180,
      renderCell:(params)=>{
        return(
          <>
       
          <button className={style.userListEdit}>Edit</button>
         
          <DeleteOutlineIcon className={style.userListDelete}/>
          </>
        )
      }
    },
  ];
  
  const rows = [
    { id: 1, products: 'Panadol', avatar: '', stock: 'Cairo', status: 'active', price: "12.00$" },
    { id: 2, products: 'Comtrex', avatar: '', stock: 'Alex', status: 'active', price: "22.00$" },
    { id: 3, products: 'Congestal', avatar: '', stock: 'Mansoura', status: 'active', price: "21.00$" },
    { id: 5, products: 'Cataflam', avatar: '', stock: 'Giza', status: 'active', price: "42.00$" },
    { id: 6, products: 'Novadol', avatar: '', stock: 'Ismailia', status: 'active', price: "62.00$" },
    { id: 7, products: 'Profin', avatar: '', stock: 'Matroh', status: 'active', price: "88.00$" },
    { id: 8, products: 'Catafast', avatar: '', stock: 'Luxor', status: 'active', price: "42.00$" },
    { id: 9, products: 'Telfast', avatar: '', stock: 'Aswan', status: 'active', price: "44.00$" },
  ];

const ProductList = () => {
    return ( <>
    <div className={style.productList}>
    <div style={{ height: 550, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={8}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
    </> );
}
 
export default ProductList;