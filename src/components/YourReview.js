import React from 'react'
import { Rating } from 'react-simple-star-rating'

function YourReview() {
  return (
    <div>
        <h4>Write A Review</h4>
        <form>
            <label>Recomend: </label><input type="radio" /><input type="radio" />
            <Rating/>
            <label>Review: </label><input/>
        </form>
    </div>
  )
}

export default YourReview