import React from 'react'
const Rating = (props) => {
  // Render star rating based on Each review score.
  const {score} = props;
  if (Math.ceil(score) == 0){
    return (
      <div>
        <span className="fa fa-star " style={{fontSize:"24px"}}></span>
        <span className="fa fa-star " style={{fontSize:"24px"}}></span>
        <span className="fa fa-star " style={{fontSize:"24px"}}></span>
        <span className="fa fa-star" style={{fontSize:"24px"}}></span>
        <span className="fa fa-star" style={{fontSize:"24px"}}></span>
      </div>
    )
  }else if (Math.ceil(score) == 1){
    return (
      <div>
        <span className="fa fa-star checked" style={{fontSize:"24px"}}></span>
        <span className="fa fa-star " style={{fontSize:"24px"}}></span>
        <span className="fa fa-star " style={{fontSize:"24px"}}></span>
        <span className="fa fa-star" style={{fontSize:"24px"}}></span>
        <span className="fa fa-star" style={{fontSize:"24px"}}></span>
      </div>
    )
  }else if(Math.ceil(score) == 2){
    return (
      <div>
        <span className="fa fa-star checked" style={{fontSize:"24px"}}></span>
        <span className="fa fa-star checked" style={{fontSize:"24px"}}></span>
        <span className="fa fa-star" style={{fontSize:"24px"}}></span>
        <span className="fa fa-star" style={{fontSize:"24px"}}></span>
        <span className="fa fa-star" style={{fontSize:"24px"}}></span>
      </div>
    )
  }else if(Math.ceil(score) == 3){
    return (
      <div>
        <span className="fa fa-star checked" style={{fontSize:"24px"}}></span>
        <span className="fa fa-star checked" style={{fontSize:"24px"}}></span>
        <span className="fa fa-star checked" style={{fontSize:"24px"}}></span>
        <span className="fa fa-star" style={{fontSize:"24px"}}></span>
        <span className="fa fa-star" style={{fontSize:"24px"}}></span>
      </div>
    )
  }else if(Math.ceil(score) == 4){
    return (
      <div>
        <span className="fa fa-star checked" style={{fontSize:"24px"}}></span>
        <span className="fa fa-star checked" style={{fontSize:"24px"}}></span>
        <span className="fa fa-star checked" style={{fontSize:"24px"}}></span>
        <span className="fa fa-star checked" style={{fontSize:"24px"}}></span>
        <span className="fa fa-star" style={{fontSize:"24px"}}></span>
      </div>
    )
  }else{
    return (
      <div>
        <span className="fa fa-star checked" style={{fontSize:"24px"}}></span>
        <span className="fa fa-star checked" style={{fontSize:"24px"}}></span>
        <span className="fa fa-star checked" style={{fontSize:"24px"}}></span>
        <span className="fa fa-star checked" style={{fontSize:"24px"}}></span>
        <span className="fa fa-star checked" style={{fontSize:"24px"}}></span>
      </div>
    ) 
  }
}

export default Rating;