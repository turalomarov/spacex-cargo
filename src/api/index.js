import axios from 'axios'

export const getShipments = () => (
    axios.get('https://61901c49f6bf450017484b58.mockapi.io/spacex/shipments')
)
