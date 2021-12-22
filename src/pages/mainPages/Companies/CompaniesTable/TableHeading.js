import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableHeader from '@crema/core/AppTable/TableHeader';

const TableHeading = () => {
  return (
    <TableHeader>
      <TableCell>Firma Adi</TableCell>
      <TableCell align='left'>Telefon Numarasi</TableCell>
      <TableCell align='left'>Şehir</TableCell>
      <TableCell align='left'>SGK Kodu</TableCell>
      <TableCell align='left'>Actions</TableCell>
    </TableHeader>
  );
};

export default TableHeading;
