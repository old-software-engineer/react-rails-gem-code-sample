import React from 'react'
import { Wrapper } from './Layout.style'

// Header return Airline Name , Image and Average Score.
const Header = ({ attributes, reviews }) => {
  const { name, image_url: imageUrl } = attributes
  const total = reviews.length
  return (
    <Wrapper>
      <h1 style={{ paddingBottom: '20px', paddingTop: '20px' }}>
        <img src={imageUrl} alt={name} /> {name}
      </h1>
      <div>
        <div style={{ paddingLeft: '20px' }}>Total Review: {total}</div>
        <div className='starRating' />
      </div>
    </Wrapper>
  )
}

export default Header
