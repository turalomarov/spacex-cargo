import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = React.memo(() => {
    const { shipments = [], searchText = '' } = useSelector(state => state.shipmentsReducer)

    //changes company name replacing spaces with '-'
    const transformToUrl = (name) => {
        try {
            const url = name.replace(/\s+/g, '-').toLowerCase();
            return url
        } catch (err) {
            return name
        }
    }

    return (
        <div>
            <List>
                {shipments.filter(({ name }) => name.toLowerCase().includes(searchText)).map((shipment) => (
                    <Link to={transformToUrl(shipment.name)} state={{ id: shipment.id }} key={shipment.id}>
                        <ListItem button key={shipment.id}>
                            <ListItemText>{shipment.name}</ListItemText>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </div>
    );
});

export default Sidebar;