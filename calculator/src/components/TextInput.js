import React from 'react';

export default function TextInput(valueChange) {

    const handleInputChange = (newValue) => {
        valueChange(newValue);
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