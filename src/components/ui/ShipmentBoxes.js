import React, { useCallback, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import useDebounce from 'hooks/useDebounce';
import { updateCompanyBoxes } from 'redux/shipmentsSlice';
import { useDispatch } from 'react-redux';

// @ts-ignore
const ShipmentBoxes = ({ id, boxes }) => {

    const [value, setValue] = useState('')
    const [cargoBaySum, setCargoBaySum] = useState(0)
    const dispatch = useDispatch()

    //debounces value, to avoid unnecessary redux updates
    const debouncedUpdate = useDebounce((value) => {
        dispatch(updateCompanyBoxes({
            boxes: value,
            id
        }))
    }, [id])

    useEffect(() => {
        setValue(boxes || '')
        calculateCargoBays()
    }, [boxes])

    const onChange = useCallback((e) => {
        const { value } = e.target

        //Accepting only numbers and ',', '.',
        const regex = new RegExp('^[0-9\.\,\ \]+$')
        if (regex.test(value) || value === '') {
            setValue(value)
            debouncedUpdate(value)
        }
    }, [id])

    const calculateCargoBays = useCallback(() => {
        let cargoBays = 0

        if (boxes) {
            const boxesArray = boxes.split(',').map(Number)
            const sum = boxesArray.reduce((total, current) => {
                if (!Number.isNaN(current)) {
                    return total += current
                } else {
                    return total
                }
            })
            cargoBays = Math.ceil(sum / 10)
        }

        setCargoBaySum(cargoBays)
    }, [boxes])

    return (
        <>
            <Box component="div">
                <Typography variant="subtitle1" noWrap component="div">
                    Number of required cargo bays {cargoBaySum}
                </Typography>
            </Box>
            <Box component="div" sx={{
                py: 2
            }}>
                <TextField
                    onChange={onChange}
                    label="Cargo boxes"
                    id="outlined"
                    value={value}
                />
            </Box>
        </>
    );
};

export default ShipmentBoxes;