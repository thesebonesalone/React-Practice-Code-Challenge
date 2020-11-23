import React, { Fragment } from 'react'

const Sushi = (props) => {
  function handleClick(){
    if (!props.info.eaten){
      props.eatSushi(props.info)
    }
  }
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => handleClick()}>
        { 
           (props.info.eaten) ? null : <img src={`${props.info.img_url}`} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.info.name} - ${props.info.price}
      </h4>
    </div>
  )
}

export default Sushi