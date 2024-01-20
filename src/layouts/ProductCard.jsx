import React from 'react'

const ProductCard = (props) => {
  return (
    <div>
        <img src={props.img} alt="img" />
        <div>
            <h2>{props.title}</h2>
            <div>
                <BsSt/>
            </div>
        </div>
    </div>
  )
}
export  default ProductCard