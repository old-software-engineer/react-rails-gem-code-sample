import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'
const Auth = ({ setToken }) => {
  const [login, setLogin] = useState(true)

  return (
    <div>
      {login
        ? (
          <Login setToken={setToken} setLogin={setLogin} />
          )
        : (
          <Register setToken={setToken} setLogin={setLogin} />
          )}
    </div>
  )
}
export default Auth
