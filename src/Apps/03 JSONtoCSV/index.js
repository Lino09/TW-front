import React, { useEffect, useState } from "react";
import "./styles.css";

function JSONtoCSVApp() {

  const [csvOutput, csvOutputSet] = useState('');
  const [jsonInput, jsonInputSet] = useState('');
  const [jsonFormatted, jsonFormattedSet] = useState('');
  const [errors, errorsSet] = useState(null);
  const [notice, noticeSet] = useState(null);
  
  const createError = () => {
    errorsSet(true)
    setTimeout(() => errorsSet(false),2000)
  }
  
  const createNotice = () => {
    if(csvOutput)noticeSet(true)
    setTimeout(() => noticeSet(false),2000)
  }
  const csvMaker = (stringJson) => {
    try {

      const json = JSON.parse(stringJson)
      const replacer = (key, value) => value === null ? '' : value
      const header = Object.keys(json[0]);
      const csv = [
        header.join(','), // header row first
        ...json.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
      ].join('\r\n');
      csvOutputSet(csv)
    } catch {
      createError()
    }
  }

  const handleCsvOnclick = () => {
    navigator.clipboard.writeText(csvOutput)
    createNotice()
  };
  
  const clear = () => {
    jsonInputSet('')
    jsonFormattedSet('')
    csvOutputSet('')
  }

  return (
    <div className="App">
      <div className="flex flex-col items-center space-y-4 text-black">
      <h1>JSONtoCSV App</h1>
      <textarea className="rounded" name="csv" id="csv" cols="60" rows="10" value={jsonInput} onChange={(e)=>jsonInputSet(e.target.value)}></textarea>
      <div className="space-x-4 relative">
        <button className="text-indigo-600 font-semibold bg-white py-1 px-2 rounded hover:bg-indigo-600 hover:text-white" onClick={() => jsonFormattedSet(JSON.parse(jsonInput))}>Format Json</button>
        <button className="text-indigo-600 font-semibold bg-white py-1 px-2 rounded hover:bg-indigo-600 hover:text-white" onClick={() => csvMaker(jsonInput)}>
          Convert to CSV
        </button>
        <span className={`text-red-300 text-xs font-bold p-1 rounded absolute w-40 -right-48 transition-opacity duration-500 select-none ${errors ? 'opacity-100': 'opacity-0'}`}>Please add a valid JSON</span>
      </div>
      <textarea className="rounded" name="csv" id="csv" cols="60" rows="10" readOnly={true} value={csvOutput} onClick={() => handleCsvOnclick()} ></textarea>
      <span className={`text-indigo-400 text-xs font-bold p-1 rounded transition-opacity duration-500 select-none ${notice ? 'opacity-100': 'opacity-0'}`}>CSV Copied</span>
      <button className="text-red-600 font-semibold bg-white py-1 px-4 rounded hover:bg-red-600 hover:text-white" onClick={()=>clear()}>Clear</button>
      </div>
      <pre>{JSON.stringify(jsonFormatted,null,2)}</pre>
    </div>
  );
}

export default JSONtoCSVApp;
