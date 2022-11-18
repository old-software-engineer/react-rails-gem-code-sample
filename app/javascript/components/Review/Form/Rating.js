import React from 'react'
import StarRatingComponent from 'react-star-rating-component'
import { RatingBox, RatingContainer } from '../Review.style'

const Rating = ({ reviewValue, handleStarRating }) => {
  return (
    <div className='field'>
      <RatingContainer>
        <RatingBox>
          <StarRatingComponent
            name='rate'
            value={reviewValue.score}
            starCount={5}
            onStarClick={handleStarRating.bind(this)}
            renderStarIcon={() => (
              <span className='fa fa-star ' style={{ fontSize: '40px' }} />
            )}
          />
        </RatingBox>
      </RatingContainer>
    </div>
  )
}

export default Rating
