import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';
import {styled} from '@mui/material/styles';
import edit from "../../../../assets/icon/edit.svg"
const StyledTableCell = styled(TableCell)(() => ({
  fontSize: 14,
  padding: 8,
  '&:first-of-type': {
    paddingLeft: 20,
  },
  '&:last-of-type': {
    paddingRight: 20,
  },
}));
const StyledIcon = styled("img")(()=>({}));

const TableItem = ({data}) => {
  console.log({data})
  const getPaymentStatusColor = () => {
    switch (data.status) {
      case 'Pending': {
        return '#F84E4E';
      }
      case 'Delivered': {
        return '#43C888';
      }
      default: {
        return '#E2A72E';
      }
    }
  };

  return (
    <TableRow key={data.name} className='item-hover'>
      <StyledTableCell align='left'>{data.title}</StyledTableCell>
      <StyledTableCell align='left'>{data.phone_nr}</StyledTableCell>
      <StyledTableCell align='left'>{data?.city?.Name}</StyledTableCell>
      <StyledTableCell align='left'>{data.sgk_code}</StyledTableCell>
      <StyledTableCell align='left'><StyledIcon src={edit}/> </StyledTableCell>
    </TableRow>
  );
};

export default TableItem;

TableItem.propTypes = {
  data: PropTypes.object.isRequired,
};
