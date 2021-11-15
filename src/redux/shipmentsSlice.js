import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  shipments: null,
  searchText: ''
}

export const shipmentsSlice = createSlice({
  name: 'shipmentsReducer',
  initialState,
  reducers: {
    setShipments: (state, action) => {    
      if (Array.isArray(action.payload)) {
        state.shipments = action.payload
      }
    },
    updateSearchText: (state, action) => {
      state.searchText = action.payload
    },
    updateCompanyBoxes: (state, action) => {
      let { shipments = [] } = state
      const { id, boxes } = action.payload

      const index = shipments.findIndex(shipment => shipment.id === id)
      if (index > -1) {
        const shipment = shipments[index]
        shipment.boxes = boxes
        shipments.splice(index, 1, shipment)
      }
    }
  },
})

export const { setShipments, updateSearchText, updateCompanyBoxes } = shipmentsSlice.actions

export default shipmentsSlice.reducer