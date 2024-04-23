import React,  { useState } from "react";
import FormComponent from "./FormComponent";

const PatientInfoCard = () => {
    const [patientName, setPatientName] = useState('');
    const [patientPlace, setPatientPlace] = useState('');


    const resetPatientInfo = () => {
        setPatientName('');
        setPatientPlace('');
        const form = document.getElementById('patientForm');
        if (form) {
          form.reset();
        }
    };

    const handleSubmit = (name, place) => {
        setPatientName(name);
        setPatientPlace(place);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="Form shadow-xl rounded-lg text-center bg-lightPink p-4">
                <h1 className="text-xl">Patient Information</h1>
                <p className="text-brown">Name: {patientName}</p>
                <p className="text-brown">Place: {patientPlace}</p>
                <button className="bg-customBlue text-white rounded-lg pl-4 pr-4 pt-1 mt-2 pb-1" onClick={resetPatientInfo}>Reset</button>
                <FormComponent nameLabel="Name" placeLabel="Place" onSubmit={handleSubmit} />
            </div>
        </div>
    );
};

export default PatientInfoCard;
