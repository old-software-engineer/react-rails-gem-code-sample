import axios from 'axios'

// Airlines Details
export function airlinesRender () {
  return axios.get('/api/v1/airlines.json')
}

// Create review for Airline
export function reviewCreate (review) {
  // console.log("user_id", user_id);
  return axios.post('/api/v1/reviews', { review })
}
// Review Details

export function reviewDetail (slug) {
  return axios.get(`/api/v1/airlines/${slug}`)
}
