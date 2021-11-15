
import React, { useEffect } from 'react';
import ResponsiveDrawer from './components/Main';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { setShipments } from 'redux/shipmentsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { SnackbarProvider } from 'notistack';

function App() {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        retry: false
      }
    }
  })

  const [localData, _] = useLocalStorage('shipments')
  const { shipments } = useSelector(state => state.shipmentsReducer)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(setShipments(localData || []))
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider
        autoHideDuration={2000}
        maxSnack={2}>
        {shipments && <ResponsiveDrawer />}
      </SnackbarProvider>
    </QueryClientProvider>
  );
}

export default App;
