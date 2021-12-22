import React, {useEffect, useState} from 'react';
import {Box, Paper, Table, TableBody, TableHead} from '@mui/material';
import {AppTableContainer} from "../../../../@crema";
import {connect, useDispatch} from "react-redux";
import TableHeading from "./TableHeading";
import {listAppUsers} from "../../../../redux/actions";
import TableItem from "./TableItem";

const Users = ({listAppUsers}) => {
  const [appUsers,setAppUsers]= useState([])
  const dispatch = useDispatch();
  // const appUsersList = use
  useEffect(()=>{
    listAppUsers().then((response)=>{
      console.log({response})
      if(!response){
        return;
      }
      console.log({response})
      setAppUsers(response);
    })
  },[])
  return (
    <AppTableContainer>
      <Table stickyHeader className='table'>
        <TableHead>
          <TableHeading />
        </TableHead>
        <TableBody>
          {appUsers.map((data) => (
            <TableItem data={data} key={data.id} />
          ))}
        </TableBody>
      </Table>
    </AppTableContainer>
  );
};
const mapDispatchToProps = {listAppUsers}
const mapStateToProps= (state)=>({})
export default connect(null,mapDispatchToProps)(Users);
