import { useState, useEffect } from 'react';

function useSmth<T>(initialValue: T) {
    const [value, setValue] = useState<T>(initialValue);

    useEffect(() => {
        // Add any side effects or logic here if needed
        console.log('Value updated:', value);
    }, [value]);

    const updateValue = (newValue: T) => {
        setValue(newValue);
    };

    return { value, updateValue };
}

export default useSmth;