import React from 'react';
import { useSelector } from 'react-redux';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const Message = React.memo(() => {

    const { shipments = [] } = useSelector(state => state.shipmentsReducer)

    return (
        shipments.length > 0 ? <Alert severity="success">
                <AlertTitle>Select Company</AlertTitle>
                {/* This is a success alert — <strong>check it out!</strong> */}
            </Alert> : <Alert severity="warning">
                <AlertTitle>No local data</AlertTitle>
                Please click <strong>Load</strong> button
            </Alert>
    );
});

export default Message;