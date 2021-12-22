import React, {useEffect, useState} from 'react';
import {Table, TableBody, TableHead} from '@mui/material';
import {AppTableContainer} from "../../../../@crema";
import {connect} from "react-redux";
import TableHeading from "./TableHeading";
import {listAppUsers, listVehicles} from "../../../../redux/actions";
import TableItem from "./TableItem";

const Vehicles = ({listVehicles}) => {
  const [vehicles,setVehicles]= useState([])
  useEffect(()=>{
    listVehicles().then((response)=>{
      console.log({response})
      if(!response){
        return;
      }
      setVehicles(response);
    })
  },[])
  return (
    <AppTableContainer>
      <Table stickyHeader className='table'>
        <TableHead>
          <TableHeading />
        </TableHead>
        <TableBody>
          {vehicles.map((data) => (
            <TableItem data={data} key={data.id} />
          ))}
        </TableBody>
      </Table>
    </AppTableContainer>
  );
};
const mapDispatchToProps = {listVehicles}
const mapStateToProps= (state)=>({})
export default connect(null,mapDispatchToProps)(Vehicles);
