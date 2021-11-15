import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';
import ShipmentBoxes from '../ui/ShipmentBoxes';
import Typography from '@mui/material/Typography';

const Details = React.memo(() => {

    const [shipmentIndex, setShipmentIndex] = useState(null)
    const { shipments = [] } = useSelector(state => state.shipmentsReducer)
    const id = useLocation().state?.id

    useEffect(() => {
        const selectedIndex = shipments.findIndex(shipment => shipment.id === id)
        setShipmentIndex(selectedIndex)
    }, [id])

    const { name, email, boxes } = shipments[shipmentIndex] || {}

    return (
        shipmentIndex > -1 ? <>
            <Typography variant="h4" noWrap component="div">
                {name}
            </Typography>
            <Typography variant="h6" noWrap component="div">
                {email}
            </Typography>
            <ShipmentBoxes id={id} boxes={boxes} />
        </> : <Navigate to='/' />
    );
});

export default Details;