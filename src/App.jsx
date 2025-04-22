import React from 'react'
import { BrowserRouter } from 'react-router'
import Header from './Components/Header'
import WebRoute from './Routes/WebRoute'

function App() {
  return (
    <>
     <BrowserRouter>
     <div className="">
      <Header />
     </div>
     <WebRoute />
     </BrowserRouter>
    </>
  )
}

export default App
