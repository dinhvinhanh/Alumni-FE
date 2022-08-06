import * as React from 'react';
import { useEffect, useMemo } from 'react';
import { useDebounce } from 'use-debounce';
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
import { useGetAlumni, useSearchUser } from 'queries/alumni';
import { TextField } from '@mui/material';
import config from 'config';

const columns = [
  { id: 'avatar', label: 'Avatar', minWidth: 50, align: 'center' },
  { id: 'name', label: 'Họ tên', minWidth: 170 },
  { id: 'gender', label: 'Giới tính', minWidth: 50, align: 'center' },
  { id: 'id', label: 'Mã SV', minWidth: 100 },
  {
    id: 'email',
    label: 'Email',
    minWidth: 120,
    format: (value) => {
      try {
        return value.toLocaleString('en-US')
      } catch {}
      return value;
    },
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
    id: 'workplace',
    label: 'Công ty',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'salaryRange',
    label: 'Khoảng lương',
    minWidth: 170,
    align: 'center',
    format: (value) => {
      switch (value) {
        case '-1':
          return 'Chưa làm khảo sát';
        case '0':
          return 'Dưới 5 triệu';
        case '1':
          return 'Từ 5 đến 15 triệu';
        case '2':
          return 'Từ 15 đến 30 triệu';
        case '3':
          return 'Từ 30 đến 50 triệu';
        case '4':
          return 'Trên 50 triệu';
      }
    }
  },
];


export default function AlumniTable({ onClick }) {
  const [page, setPage] = React.useState(0);
  const [data, setData] = React.useState(null);
  const [text, setText] = React.useState('');
  const [search] = useDebounce(text, 400);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  const { data: dataAll, isLoading } = useGetAlumni(page, rowsPerPage);
  const { data: dataSearch } = useSearchUser(search);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearchInputChange = (event) => {
    setText(event.target.value);
    console.log(event.target.value);
  }

  const tableHeight = useMemo(() => window.innerHeight - 220, []) || 500;

  useEffect(() => {
    setData(dataAll);
  }, [dataAll])

  useEffect(() => {
    setData(dataSearch);
  }, [dataSearch])

  useEffect(() => {
    if (search.trim() === '')
      setData(dataAll)
  }, [search])

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TextField
        id="standard-basic"
        label="Lọc theo tên"
        variant="standard"
        className={'ml-5 w-96 mt-4'}
        onChange={handleSearchInputChange}
      />
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
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={user.id} onClick={() => onClick(user.id)}>
                    {columns.map((column) => {
                      const value = user[column.id];
                      if (column.id === 'avatar') {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <Avatar src={`${config.apiEndpoint}${value}`} className={'mx-auto'}/>
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
