import React, { useState } from 'react'
import firebase from 'firebase'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { toast } from 'react-toastify'
// import logo from "../src/bfoh2i9icdx0mgmsykwe.png";
import logo from "./react-redux.png"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DashboardTwoToneIcon from '@material-ui/icons/DashboardTwoTone';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
import WidgetsTwoToneIcon from '@material-ui/icons/WidgetsTwoTone';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import FormatAlignRightRoundedIcon from '@material-ui/icons/FormatAlignRightRounded';
import MaterialTable from 'material-table';
// import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';



export const Dashs = () => {


  
  
  

    const [tableData , setTableData] = useState([
     {
         name:"Name",
     },
    ]);

        const columns=[
          {
            title:"Name" , field:"name" , filterPlaceholder:"name", cellStyle:{color:"53, 128, 163"} , headerStyle:{color:"white"}
          },
          // {
          //   title:"Email" , field:"email" , filterPlaceholder:"Filter by email", cellStyle:{color:"53, 128, 163"} , headerStyle:{color:"white"} , 
          // },
          // {
          //   title:"PhoneNumber" , field:"phone" , filterPlaceholder:"number" , cellStyle:{color:"53, 128, 163"} , headerStyle:{color:"white"}
          // },
          // {
          //   title:"Age" , field:"age" , filterPlaceholder:"age" , cellStyle:{color:"53, 128, 163"} , headerStyle:{color:"white"}
          // },
          // {
          //   title:"Gender" , field:"gender" , filterPlaceholder:"gender" , cellStyle:{color:"53, 128, 163"} , headerStyle:{color:"white"}
          // },
          // {
          //   title:"City" , field:"city" , filterPlaceholder:"city" , cellStyle:{color:"53, 128, 163"} , headerStyle:{color:"white"}
          // },
        ]

       

    const [show,setShow] = useState();
    const [shows,setShows] = useState();


    const dispatch = useDispatch();
    const history = useHistory();
    // const data = useSelector(state=>state)


    const logout = () => {
        firebase.auth().signOut() //This is an predefined function in firebase sign out the data.
        dispatch({                //here we are dispatching data to our redux state null as we signout where type is LOGGED_OUT .
          type:"LOGGED_OUT",
          payload:null,  
        })
        toast.success("logged out successfully")
        history.push("/")
    }
    return (
        <>
      
         <div className="main-sign">
         <div className="left-sign">
        <div className="left-sign-content">


       {/* <img className="logos"src=""/> */}
       <AccountCircleIcon className="accounts"/>
       <SearchIcon className="search"/>
       <DashboardTwoToneIcon className="dashboard"/>
       {
        show?
        <div className="dotss">
       <FiberManualRecordOutlinedIcon className="dots"/>
       <FiberManualRecordOutlinedIcon className="dots"/>
       <FiberManualRecordOutlinedIcon className="dots"/>
       <FiberManualRecordOutlinedIcon className="dots"/>
       </div>:null
       }
       <WidgetsTwoToneIcon className="widgets"/>
       <FiberManualRecordOutlinedIcon className="dots"/>
       <FiberManualRecordOutlinedIcon className="dots"/>
       <FiberManualRecordOutlinedIcon className="dots"/>
       <FiberManualRecordOutlinedIcon className="dots"/>
       
       
      
       </div>
       </div>
       {
        shows?
       <div className="right-sign">
       <div className="right-sign-content">
       {/* <span className="c-name">ABC COMPANY</span> */}
       <span className="client-name">Devansh Shukla</span>
       <input type="text" className="text" placeholder="search"></input>
       <div className="dash">
       <span className="dashboard-1">Dashboard</span>
       <ArrowDropDownIcon onClick={()=>setShow(!show)}  className="drop"/>
       </div>
        {
        show? 
            <div className="dashboard-2">
         <Link to ="/app/page:1" className="dashboard-2">Dashboard-1</Link>
         <a className="dashboard-2">Dashboard-1</a>
         <a  className="dashboard-2">Dashboard-2</a>
         <a className="dashboard-2">Dashboard-3</a>
         </div>:null
        }
       </div>
       </div>:null
       }
       
      
       <div className="center-sign-content">
       <div className="center-sign">
       <FormatAlignRightRoundedIcon 
       onClick={()=>setShows(!shows)}
       className="menu"/>
       <div className="a" >
       <Link to ="/" className="home">Sign up</Link> 
        <Link to = "/login" className="home">Log in</Link>
        <Link to = "/forgot-password" className="home">Forgot password</Link>
       <button className="b"
        onClick={logout}>Logout</button>
       </div>
       </div>

       
         
       <div className="table-cont">


       <div className="main-table">

      <div className="table">
      <div className="tab-con">


         <MaterialTable className="m-table"
         title="Table"
         data={tableData}
         columns={columns}

         editable={
             {
                 onRowAdd:(newRow)=> new Promise((resolve,reject) =>  //ADDING DATA TO TABLE :
                 {
                     setTableData([...tableData , newRow])
                     setTimeout(()=>resolve(),5000)
                     console.log(newRow)
                 }),
                 onRowUpdate:(newRow , oldRow)=> new Promise((resolve,reject)=>  //UPDATEING DATA IN TABLE :
                 {
                     const updatedData = [...tableData]
                     updatedData[oldRow.tableData.id] = newRow
                     setTableData(updatedData);
                     setTimeout(()=>resolve(),5000) 
                     console.log(newRow,oldRow)  
                 }),
                 onRowDelete:(selectedRow)=> new Promise((resolve,reject)=>  //DELETEING DATA IN TABLE :
                 {
                      const updatedData = [...tableData]
                      updatedData.splice(selectedRow.tableData.id,1)
                      setTableData(updatedData)
                      setTimeout(()=>resolve(),5000)
                      console.log(updatedData)
                 })
             }
         }
             options={{
             filtering:true,
            //  tableLayout:"fixed",
             pageSizeOptions:[1,2,3,4,5],
             paginationType:"stepped",
            //  tableLayout:"fixed",
             exportButton:true,
             actionsColumnIndex:-1,
             rowStyle:{background:"#f5f5f5"},
             headerStyle:{background:"rgb(53, 128, 163)"},
            //  actionsCellStyle:{background:"rgb(53, 128, 163)"},
             actionsCellStyle:{color:"rgb(53, 128, 163)"},
            //  actionsCellStyle:{color:"white"},
         }}
    
 
/>

</div>




</div>



 </div>
 </div>
       

      
       {/* <div className="main-dash-cont">
     
       
       <div className="table">
       <MaterialTable className="material-table"
         title="Dashboard Table"
        //  style={style}
         data={tableData}
         columns={columns}
         className="col" 
         editable={
             {
                 onRowAdd:(newRow)=> new Promise((resolve,reject) =>  //ADDING DATA TO TABLE :
                 {
                     setTableData([...tableData , newRow])
                     setTimeout(()=>resolve(),5000)
                     console.log(newRow)
                 }),
                 onRowUpdate:(newRow , oldRow)=> new Promise((resolve,reject)=>  //UPDATEING DATA IN TABLE :
                 {
                     const updatedData = [...tableData]
                     updatedData[oldRow.tableData.id] = newRow
                     setTableData(updatedData);
                     setTimeout(()=>resolve(),5000) 
                     console.log(newRow,oldRow)  
                 }),
                 onRowDelete:(selectedRow)=> new Promise((resolve,reject)=>  //DELETEING DATA IN TABLE :
                 {
                      const updatedData = [...tableData]
                      updatedData.splice(selectedRow.tableData.id,1)
                      setTableData(updatedData)
                      setTimeout(()=>resolve(),5000)
                      console.log(updatedData)
                 })
             }
         }
         options={{
             filtering:true,
            //  tableLayout:"fixed",
             pageSizeOptions:[1,2,3,4,5],
             paginationType:"stepped",
            //  tableLayout:"fixed",
             exportButton:true,
             actionsColumnIndex:-1,
             rowStyle:{background:"#f5f5f5"},
             headerStyle:{background:"rgb(53, 128, 163)"},
            //  actionsCellStyle:{background:"rgb(53, 128, 163)"},
             actionsCellStyle:{color:"rgb(53, 128, 163)"},
            //  actionsCellStyle:{color:"white"},
         }}
    
       />



       </div>
      




       </div> */}





    </div>
    </div>
    
    </>
       
    )
}
