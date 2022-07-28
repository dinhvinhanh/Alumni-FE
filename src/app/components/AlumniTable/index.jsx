import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useMemo } from 'react';
import Avatar from '@mui/material/Avatar';

const columns = [
  { id: 'avatar', label: 'Avatar', minWidth: 50, align: 'center' },
  { id: 'name', label: 'Họ tên', minWidth: 170 },
  { id: 'code', label: 'Mã SV', minWidth: 100 },
  {
    id: 'email',
    label: 'Email',
    minWidth: 120,
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'year',
    label: 'Ngày sinh',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'class',
    label: 'Lớp',
    minWidth: 170,
    align: 'center',
  },
];

function createData(name, code, year, cLass) {
  const email = code + '@vnu.edu.vn'
  return { name, code, email, year, class: cLass };
}

const rows = [
  createData('Vũ Văn Đại ', '17020664', '03/03/1998', 'K62AE'),
  createData('Vũ Tiến Hiệp ', '17020289', '29/01/1999', 'K62AE'),
  createData('Nguyễn Đắc Hiệu ', '17021190', '30/01/1998', 'K62AE'),
  createData('Hoàng Đình Hoan ', '17020756', '03/10/1998', 'K62AE'),
  createData('Bành Đức Minh ', '17023721', '21/02/1998', 'K62AE'),
  createData('Hoàng Tích Phúc ', '17020202', '14/09/1998', 'K62AE'),
  createData('Hoàng Văn Tâm ', '17024315', '22/08/1998', 'K62AE'),
  createData('Trần Đại Việt ', '17022827', '12/11/1998', 'K62AE'),
  createData('Lê Mai An ', '17020972', '03/02/1998', 'K62CAC'),
  createData('Nguyễn Đăng An', '17023983', '25/06/1998', 'K62CAC'),
  createData('Phạm Lê Việt Anh  ', '17022203', '11/09/1998', 'K62CAC'),
  createData('Trần Đăng Anh', '1702064392', '09/12/1998', 'K62CAC'),
];

export default function AlumniTable({ onClick }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const tableHeight = useMemo(() => window.innerHeight - 220, []) || 500;

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: tableHeight }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code} onClick={onClick}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      if (column.id === 'avatar') {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <Avatar src={''} className={'mx-auto'}/>
                          </TableCell>
                        )
                      }
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
