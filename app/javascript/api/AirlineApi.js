import axios from 'axios'

// Airlines Details
export function airlinesRender (token) {
  return axios.get('/api/v1/airlines.json', {
    method: 'GET',
    headers: {
      Authorization: `${token}`
    }
  })
}

// Create review for Airline
export function reviewCreate (review, token) {
  // console.log("user_id", user_id);
  return axios.post(
    '/api/v1/reviews',
    { review },
    {
      method: 'POST',
      headers: {
        Authorization: `${token}`
      }
    }
  )
}
// Review Details

export function reviewDetail (slug, token) {
  return axios.get(`/api/v1/airlines/${slug}`, {
    method: 'GET',
    headers: {
      Authorization: `${token}`
    }
  })
}

export function signIn (user) {
  return axios.post('/users/sign_in', { user })
}

export function signUp (user) {
  return axios.post('/users', { user })
}
