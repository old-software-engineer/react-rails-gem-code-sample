import React, { useState, useEffect } from 'react'
import { signIn } from '../../api/AirlineApi'
const Login = ({ setToken, setLogin }) => {
  const [user, setUser] = useState({ email: '', password: '' })
  const [enable, setEnable] = useState(false)
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    setEnable(reg.test(user.email) && user.password.length > 5)
  }, [user])

  const handleSubmit = (e) => {
    e.preventDefault()
    signIn(user)
      .then((resp) => {
        setToken(resp.headers.authorization)
        document.cookie = `token=${resp.headers.authorization}`
      })
      .catch((error) => {
        console.log('error', error)
      })
  }

  return (
    <div id='background-cover' className='section'>
      <div className='section-center'>
        <div className='container'>
          <div className='user-form' style={{ maxWidth: '768px' }}>
            <h1
              className='text-white'
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              Sign In
            </h1>
            <form onSubmit={handleSubmit}>
              <div className='field-input'>
                <span className='form-label'>Email</span>
                <input
                  onChange={handleChange}
                  type='email'
                  placeholder='Email'
                  name='email'
                  value={user.email}
                />
              </div>
              <div className='field-input'>
                <span className='form-label'>Password</span>
                <input
                  onChange={handleChange}
                  type='password'
                  placeholder='password'
                  name='password'
                  value={user.password}
                />
              </div>
              <div
                className='row'
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center'
                }}
              >
                <div style={{ padding: '0', margin: '1rem 0' }}>
                  <button
                    type='submit'
                    style={{ width: '20rem' }}
                    disabled={!enable}
                    className={!enable ? 'submit-btn-disabled' : 'submit-btn'}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
            <a
              onClick={() => {
                setLogin(false)
              }}
              className='text-white link-center'
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
