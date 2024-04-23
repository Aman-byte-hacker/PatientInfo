import React, { useState } from 'react';

const FormComponent = ({ onSubmit, nameLabel, placeLabel }) => {
    const [patientName, setPatientName] = useState('');
    const [patientPlace, setPatientPlace] = useState('');
  
    const handleReset = () => {
        setPatientName('');
        setPatientPlace('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(patientName, patientPlace);
    };

    return (
        <form id='patientForm' onSubmit={handleSubmit} onReset={handleReset}>
            <div className="flex mt-3 justify-center items-center inputs">
                <label className="text-brown" htmlFor="nameInput">{nameLabel}</label>
                <input
                    id='nameInput'
                    name="patientName"
                    className="border rounded-lg p-1 m-4"
                    type="text"
                    placeholder="Enter patient Name"
                    onChange={(e) => setPatientName(e.target.value)}
                />
                <label className="text-brown" htmlFor="placeInput">{placeLabel}</label>
                <input
                    id="placeInput"
                    name="patientPlace"
                    className="border rounded-lg p-1 m-4"
                    type="text"
                    placeholder="Enter patient Place"
                    onChange={(e) => setPatientPlace(e.target.value)}
                />
            </div>
            <button className="bg-customBlue text-white rounded-lg pl-4 pr-4 pt-1 mt-2 pb-1" type="submit">
                Display
            </button>
        </form>
    );
}

export default FormComponent;
