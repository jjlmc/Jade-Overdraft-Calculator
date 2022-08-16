import React from 'react';

export default function TextInput(props) {

    const handleInputChange = (newValue) => {
        props.valueChange(newValue);
    };

    return (
        <div>
            <input 
                type="number"
                onChange={(newValue) => {
                    handleInputChange(newValue.target.value)
                }}
                placeholder="0"
                min={props.minimumInput}
            />
        </div>
    )
}