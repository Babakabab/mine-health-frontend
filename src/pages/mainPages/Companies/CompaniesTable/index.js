import React, {useEffect, useState} from 'react';
import {Table, TableBody, TableHead} from '@mui/material';
import {AppTableContainer} from "../../../../@crema";
import {connect} from "react-redux";
import TableHeading from "./TableHeading";
import {listAppUsers} from "../../../../redux/actions";
import TableItem from "./TableItem";
import {listCompanies} from "../../../../redux/actions/companies";

const Companies = ({listCompanies}) => {
  const [companies,setCompanies]= useState([])
  useEffect(()=>{
    listCompanies().then((response)=>{
      console.log({response})
      if(!response){
        return;
      }
      setCompanies(response);
    })
  },[])
  return (
    <AppTableContainer>
      <Table stickyHeader className='table'>
        <TableHead>
          <TableHeading />
        </TableHead>
        <TableBody>
          {companies.map((data) => (
            <TableItem data={data} key={data.id} />
          ))}
        </TableBody>
      </Table>
    </AppTableContainer>
  );
};
const mapDispatchToProps = {listCompanies}
const mapStateToProps= (state)=>({})
export default connect(null,mapDispatchToProps)(Companies);
