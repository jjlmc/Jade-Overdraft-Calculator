import React, {useState} from 'react';

export default function TextInput() {

    const [value, setValue] = useState(0);

    const handleInputChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <input 
                label="0"
                type="number"
                onChange={(newValue) => {
                    handleInputChange(newValue.target.value)
                }}
                placeholder="0"
            />
        </div>
    )
}