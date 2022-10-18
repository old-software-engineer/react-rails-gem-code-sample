import axios from "axios";

// Airlines Details 
export function airlinesRender(){
    return axios.get('/api/v1/airlines.json')
}

// Create review for Airline 
export function reviewCreate(review, airline_id){
    return axios.post('/api/v1/reviews',{review, airline_id})
}
// Review Details 

export function reviewDetail(slug){
    return axios.get(`/api/v1/airlines/${slug}`)
}

// Delete review for Airline 
export function reviewDelete(id){
    return axios.delete(`/api/v1/reviews/${id}`)
}

// Update review for Airline
export function reviewUpdate(review,id){
    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken
    return axios.put(`/api/v1/reviews/${id}`,{id, review})
}