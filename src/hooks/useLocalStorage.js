import { useState, useEffect } from "react";

function getStorageValue(key, defaultValue) {
    // getting stored value
    const saved = localStorage.getItem(key);
    const initial = JSON.parse(saved);
    return initial || defaultValue;
}

//Hook to set and get value in localStorage using key
export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue);
    });

    useEffect(() => {
        // storing input
        if (value !== undefined && value !== null) {
            localStorage.setItem(key, JSON.stringify(value));
        }    
    }, [key, value]);

    return [value, setValue];
};