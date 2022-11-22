import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Airlines from './Airlines/Airlines'
import Airline from './Airlines/[id]'
import Navbar from './SharedComponent/Navbar'
import Auth from './Auth/Auth'

const App = () => {
  const getCookie = (name) => {
    const cookieArr = document.cookie.split(';')
    for (let i = 0; i < cookieArr.length; i++) {
      const cookiePair = cookieArr[i].split('=')
      if (name == cookiePair[0].trim()) {
        return decodeURIComponent(cookiePair[1])
      }
    }
    return null
  }
  const [token, setToken] = useState(getCookie('token'))

  if (!token) {
    return <Auth setToken={setToken} />
  }

  return (
    <>
      {/* Navbar component Imported */}
      <Navbar setToken={setToken} />
      {/* Routes create for Index page and Show Page */}
      <Routes>
        <Route exact path='/' element={<Airlines token={token} />} />
        <Route exact path='/airlines/:slug' element={<Airline token={token} />}>
          {' '}
        </Route>
      </Routes>
    </>
  )
}

export default App
