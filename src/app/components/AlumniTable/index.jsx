import * as React from 'react';
import { useMemo } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import dateFormat from 'dateformat';
import Avatar from '@mui/material/Avatar';
import { useGetAlumni } from '../../../queries/alumni';

const columns = [
  { id: 'avatar', label: 'Avatar', minWidth: 50, align: 'center' },
  { id: 'name', label: 'Họ tên', minWidth: 170 },
  { id: 'gender', label: 'Giới tính', minWidth: 50, align: 'center' },
  { id: 'id', label: 'Mã SV', minWidth: 100 },
  {
    id: 'email',
    label: 'Email',
    minWidth: 120,
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'dateOfBirth',
    label: 'Ngày sinh',
    minWidth: 170,
    align: 'right',
    format: (value) => dateFormat(new Date(value), 'dd/mm/yyyy'),
  },
  {
    id: 'className',
    label: 'Lớp',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'job',
    label: 'Công việc',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'status',
    label: 'Trạng thái công việc',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'salaryRange',
    label: 'Khoảng lương',
    minWidth: 170,
    align: 'center',
  },
];


export default function AlumniTable({ onClick }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  const { data, isLoading } = useGetAlumni(page, rowsPerPage);

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
            {data && data.data.content.map((user) => {
              console.log(user)
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={user.id} onClick={onClick}>
                    {columns.map((column) => {
                      const value = user[column.id];
                      if (column.id === 'avatar') {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <Avatar src={value} className={'mx-auto'}/>
                          </TableCell>
                        )
                      }
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format
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
        count={data ? data.data.totalPages : 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
