import React from 'react';

// Interface for Form component 

interface FormInterface {

}

// Input form

const Form = (props: FormInterface) => {
    return (
        <div className="form-container">
            <div className="form-input">
            <p>Input form coming soon!</p>
            </div>

            <div className="form-button">
                <button type="button">Save</button>
            </div>
        </div>
    )
}

export default Form;