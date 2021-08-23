import React, { useState } from 'react'

const Item = ({ id, image, name, info, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-item">
      <img src={image} alt={name} />
      <footer>
        <div className="item-info">
          <h4>{name}</h4>
          <h4 className="item-price">${price}</h4>
        </div>
        <p>
          { readMore ? info : `${info.substring(0, 100)}...` }
          <button onClick={ () => setReadMore(!readMore) }>
            { readMore ? 'Show Less' : 'Read More' }
          </button>
        </p>
        <button className="delete-btn" onClick={ () => removeTour(id) }>Not Interested</button>
      </footer>

    </article>
  )
}

export default Item
