import React, {useState} from 'react'
import { Rating } from 'react-simple-star-rating'
import{ useDispatch, useSelector } from 'react-redux'
import { addReview, removeReview, selectReview} from './../redux/reviewSlice'


function YourReview({movie}) {

    const [rating, setRating] = useState(0)
    const [review, setReview] = useState("")

 
  const dispatch = useDispatch()
  const reviews = useSelector(selectReview)

  const handleAddReview = (movie) =>{
      let filteredReviews = reviews.filter(review => review.title === movie.title)
      if(filteredReviews.length > 0){
          dispatch(removeReview(movie.title))
      }
      dispatch(addReview({title: movie.title, rating: rating, review: review}))
  }

  const handleRating = (rate) => {
    setRating(rate/10)
    console.log(reviews)
  }

  return (
    <div className="yourReview">
        <h4>Write A Review</h4>
        <form>
            <Rating allowHalfIcon={true} allowHover={false} fillColor={"rgb(206, 174, 34)"} emptyColor={"rgb(122, 122, 122)"} iconsCount={10} onClick={handleRating} size={30}/>
            <textarea rows={4} placeholder="What did you think of this movie?" onChange={(event)=>setReview(event.target.value)}/>
            <button onClick={()=> handleAddReview(movie)} type="button">Submit Review</button>
        </form>
    </div>
  )
}

export default YourReview