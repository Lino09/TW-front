import React, {useState} from "react";
import axios from 'axios';
import "./styles.css";

function URLShortenerApp() {

  const [longUrl, longUrlSet] = useState('')
  const [shorten, shortenSet] = useState({shorty:'code', count: 0 })
  const [notice,noticeSet] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:5000/shortMyURL', {url: longUrl})
      shortenSet(response.data)
      longUrlSet('')
    }catch(e) {
      console.log(e)
    }
  }

  const createNotice = (msg) => {
    noticeSet(msg)
    setTimeout(() => noticeSet(''),2000)
  }

  const handleCopy = () => {
    if(shorten.sendto) {
      navigator.clipboard.writeText(`http://localhost:5000/shortys/${shorten.shorty}`)
      createNotice('URL copiado ;-)')
    }else {
      createNotice('Nada que copiar')
    }
  }

  return (
    <div className="App text-indigo-600 flex flex-col items-center font-semibold mt-16">
      <form action="/" method="POST" onSubmit={(e) => handleSubmit(e)} className="flex flex-col items-center bg-indigo-100 p-12 space-y-8 max-w-3xl w-full">
        <h1>URL Shortener</h1>
        <label htmlFor="longUrl">
          <p>Short is always better... right?</p>
          <input type="text" id="longUrl" value={longUrl} onChange={(e)=>longUrlSet(e.target.value)} placeholder="wwww.pagehub.com" autoComplete="off" className="bg-transparent w-96 rounded" />
        </label>
        <button type="submit" className="border border-indigo-600 rounded font-semibold py-1 px-2 hover:bg-indigo-200 hover:text-indigo-900">Make it short!</button>
      </form>
      <div className="bg-indigo-100 max-w-3xl w-full flex flex-col items-center space-y-2 py-4">
        <h2 className="relative">Your url:
          {' '}
          <span>http://localhost:5000/shortys/{shorten.shorty}</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute -right-12 top-0 cursor-pointer hover:text-indigo-400" onClick={()=>handleCopy()} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
          </svg>
          <span className={`text-indigo-600 text-sm font-bold transition-opacity duration-500 select-none absolute -top-8 w-40 left-1/2 transfgor -translate-x-1/2 ${notice ? 'opacity-100': 'opacity-0'}`} >{notice}</span>
        </h2>
        <h3>It has been clicked {shorten.count} times</h3>
      </div>
    </div>
  );
}

export default URLShortenerApp;
