import React, { useState } from "react";

const PatientInfoCard = () => {
  const [patientName, setPatientName] = useState('');
  const [patientPlace, setPatientPlace] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const patientName = e.target.elements.patientName.value;
    const patientPlace = e.target.elements.patientPlace.value;
    setPatientName(patientName);
    setPatientPlace(patientPlace);
  };

  const resetPatientInfo = () => {
    document.getElementById('patientForm').reset();
    setPatientName('');
    setPatientPlace('')
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="Form shadow-xl rounded-lg text-center bg-lightPink p-4">
        <h1 className="text-xl">Patient Information</h1>
        <p className="text-brown">Name: {patientName}</p>
        <p className="text-brown">Place: {patientPlace}</p>
        <button className="bg-customBlue text-white rounded-lg pl-4 pr-4 pt-1 mt-2 pb-1" onClick={resetPatientInfo} >Reset</button>
        <form id="patientForm" onSubmit={handleSubmit}>
          <div className="flex mt-3 justify-center items-center inputs">
            <p className="text-brown">Name:</p>
            <input
              name="patientName"
              className="border rounded-lg p-1 m-4"
              type="text"
              placeholder="Enter patient Name"
            />
            <p className="text-brown">Place:</p>
            <input
              name="patientPlace"
              className="border rounded-lg p-1 m-4"
              type="text"
              placeholder="Enter patient Place"
            />
          </div>
          <button className="bg-customBlue text-white rounded-lg pl-4 pr-4 pt-1 mt-2 pb-1" type="submit">
            Display
          </button>
        </form>
      </div>
    </div>
  );
};

export default PatientInfoCard;
