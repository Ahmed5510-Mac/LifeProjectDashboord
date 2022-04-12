import style from './UserList.module.css';
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'username',
    headerName: 'Username',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
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
    field: 'transaction',
    headerName: 'Transaction',
    sortable: false,
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
  { id: 1, username: 'Snow', avatar: '', email: 'snow@gmail.com', status: 'active', transaction: "12.00$" },
  { id: 2, username: 'Bisho', avatar: '', email: 'bisho@gmail.com', status: 'active', transaction: "22.00$" },
  { id: 3, username: 'Omar', avatar: '', email: 'snow@gmail.com', status: 'active', transaction: "21.00$" },
  { id: 5, username: 'Ahmed', avatar: '', email: 'snow@gmail.com', status: 'active', transaction: "42.00$" },
  { id: 6, username: 'Ronaldo', avatar: '', email: 'snow@gmail.com', status: 'active', transaction: "62.00$" },
  { id: 7, username: 'Messi', avatar: '', email: 'snow@gmail.com', status: 'active', transaction: "88.00$" },
  { id: 8, username: 'Snow', avatar: '', email: 'snow@gmail.com', status: 'active', transaction: "42.00$" },
  { id: 9, username: 'Snow', avatar: '', email: 'snow@gmail.com', status: 'active', transaction: "44.00$" },
];


const UserList = () => {
  return (<>
    <div className={style.userList}>
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
  </>);
}

export default UserList;