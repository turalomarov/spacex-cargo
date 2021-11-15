import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import useGetShipments from 'hooks/useGetShipments';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import { useSnackbar } from 'notistack';


const ButtonHolder = React.memo(() => {
    const { isFetching, refetch } = useGetShipments({ enabled: false })
    const { shipments = [] } = useSelector(state => state.shipmentsReducer)
    const [_, setLocalData] = useLocalStorage('shipments')

    const { enqueueSnackbar } = useSnackbar()

    const loadShipments = () => {
        refetch()
    }

    const saveShipments = () => {
        setLocalData(shipments)
        enqueueSnackbar('Saved locally!', { variant: 'success' });
    }

    return (
        <Stack spacing={2} direction="row">
            <Button variant="contained" color='warning' onClick={loadShipments} disabled={isFetching} sx={{ minWidth: 71 }}>{isFetching ? <CircularProgress size={20} color="inherit" /> : 'Load'}</Button>
            <Button variant="contained" onClick={saveShipments}>Save</Button>
        </Stack>
    );
});

export default ButtonHolder;