import debounce from "@mui/material/utils/debounce";
import { useCallback } from "react";

//Debounces passed function
const useDebounce = (func, deps = [] , delay = 250, ) => {
    const debouncedUpdate = useCallback(debounce((value) => {
        if (func) {
            func(value)
        }
    }, delay), deps)

    return debouncedUpdate
}

export default useDebounce;