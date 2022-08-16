import React, {useState} from 'react';

export default function TextInput() {

    const [value, setValue] = useState(0)

    return (
        <div>
            <TextField 
                type="number"
                onChange={handleInputChange}
                value={value}
            />
        </div>
    )
}