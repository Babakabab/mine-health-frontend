import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableHeader from '@crema/core/AppTable/TableHeader';

const TableHeading = () => {
  return (
    <TableHeader>
      <TableCell>Kullanici Adi</TableCell>
      <TableCell align='left'>Kullanici Soyadi</TableCell>
      <TableCell align='left'>Email</TableCell>
      <TableCell align='left'>Telefon Numarasi</TableCell>
      <TableCell align='left'>Rol</TableCell>
      <TableCell align='left'>Actions</TableCell>
    </TableHeader>
  );
};

export default TableHeading;
