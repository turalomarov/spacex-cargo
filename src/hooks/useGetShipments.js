import { useQuery } from 'react-query';
import { getShipments } from 'api/index';
import { useDispatch } from 'react-redux';
import { setShipments } from 'redux/shipmentsSlice';
import { useLocalStorage } from './useLocalStorage';
import { useSnackbar } from 'notistack';

//makes api call to get shipments and saves data both to redux and localStorage
export default function useGetShipments (options = {}) {
    const [_, setLocalData] = useLocalStorage('shipments')
    const { enqueueSnackbar } = useSnackbar()
    const dispatch = useDispatch()

    return useQuery(['shipments'], () => getShipments(), {
        ...options,
        onSuccess:(res)=>{
            dispatch(setShipments(res.data))
            setLocalData(res.data)
            enqueueSnackbar('Shipments loaded successfully!', { variant:'success' });
        },
        onError:(_err)=>{
            enqueueSnackbar('Error when loading shipments!', { variant:'error' });
        }
    })
}

