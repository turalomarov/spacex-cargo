import React, { useCallback } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import useDebounce from 'hooks/useDebounce';
import { useDispatch } from 'react-redux';
import { updateSearchText } from 'redux/shipmentsSlice';
import InputBase from '@mui/material/InputBase';

const SearchHolder = React.memo(() => {
  const dispatch = useDispatch()

  //debounces value, to avoid unnecessary redux updates
  const debouncedSearch = useDebounce((value) => {
    dispatch(updateSearchText(value))
  }, [])

  const onSearch = useCallback((e) => {
      const { value = '' } = e.target
      debouncedSearch(value.toLowerCase())
  }, [])

  return (
    <InputBase
      size="small"
      onChange={onSearch}
      placeholder="Search by company"
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
      sx={{
        color: theme => theme.palette.primary.contrastText,
        '& .MuiInputAdornment-root': {
          color: '#ffffffd1'
        },
        '& .MuiInputBase-input': {
          padding: 0
        }
      }}
    />
  );
})

export default SearchHolder;

