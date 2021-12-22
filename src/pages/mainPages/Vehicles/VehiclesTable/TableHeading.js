import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableHeader from '@crema/core/AppTable/TableHeader';

const TableHeading = () => {
  return (
    <TableHeader>
      <TableCell>Model</TableCell>
      <TableCell align='left'>Plaka numara</TableCell>
      <TableCell align='left'>Permi Numarasi</TableCell>
      <TableCell align='left'>Aksyonlar</TableCell>
    </TableHeader>
  );
};

export default TableHeading;
