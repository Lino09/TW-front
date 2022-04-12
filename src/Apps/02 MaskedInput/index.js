import React , { useState } from "react";
import { personalInputData, emergencyContactData } from './inputData.js'
import PaymentForm from "./PaymentForm.jsx";
import { Input, FormSpacer } from './components';

function MaskedInputApp() {
  const [userInfo, userInfoSet] = useState({});
  const [emergencyData, emergencyDataSet] = useState(false)
  const onChange = (e) => {
    const { name, value } = e.target;
    userInfoSet({ ...userInfo, [name]: value });
  };
  const changeEmergencyDataPreferences = () => emergencyDataSet(!emergencyData)
  
  return (
    <div className="App flex flex-col items-center w-full">
      <form className="bg-gray-200 text-indigo-800  w-full max-w-4xl p-8  grid grid-cols-2 gap-4 rounded-lg" autoComplete="off" >
        <legend className="col-span-2 w-full text-center text-2xl">Introduzca su Información </legend>
        <FormSpacer></FormSpacer>
        {personalInputData.map((inputItem) => (
          <Input id={inputItem.id}  type={inputItem.type} onStateChange={onChange} req={inputItem.required} val={userInfo[inputItem.id]} key={inputItem.id}>{inputItem.texto}</Input>
        ))}
        <label htmlFor="emergencyContact" className="w-full h-full flex items-center justify-between">
          <span>Use Emergency Contact Info</span>
          <input
            type="checkbox"
            id="emergencyContact"
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            onChange={() => changeEmergencyDataPreferences()}
            checked={emergencyData}
            />
        </label>
        {emergencyData &&
          <FormSpacer></FormSpacer>}
        {emergencyData &&
          <legend className="col-span-2 w-full text-center text-2xl">Introduzca su información de Contacto de Emergencia</legend>}
        {emergencyData &&
          emergencyContactData.map((inputItem) => (
            <Input id={inputItem.id}  type={inputItem.type} onStateChange={onChange} req={inputItem.required} val={userInfo[inputItem.id]} key={inputItem.id} >{inputItem.texto}</Input>
          ))
        }
        <FormSpacer></FormSpacer>
        <div className="col-span-2">
        <PaymentForm></PaymentForm>
        </div>
        <div className="col-span-2 flex justify-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-800 hover:to-indigo-800 py-2 px-16 text-white font-bold"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default MaskedInputApp;
