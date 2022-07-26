import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useHistory } from 'react-router-dom';
import { useCallback } from 'react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '0ch',
      '&:focus': {
        width: '45ch',
      },
    },
  },
}));

export default function SearchBox({ className = ''}) {
  const history = useHistory();
  const handleSearchSubmit = useCallback((event) => {
    if (event.key === 'Enter') {
      history.push({
        pathname: '/search',
        search: `?q=${event.target.value}`
      });
    }
  }, [history]);
  return (
    <Search className={className}>
      <SearchIconWrapper >
        <SearchIcon style={{ cursor: 'pointer' }} onClick={handleSearchSubmit}/>
      </SearchIconWrapper>
      <StyledInputBase
        onKeyPress={handleSearchSubmit}
        placeholder="Tìm kiếm ..."
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  );
}
