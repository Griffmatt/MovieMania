import React, {useState} from 'react'
import { Rating } from 'react-simple-star-rating'
import{ useDispatch, useSelector } from 'react-redux'
import { addReview, removeReview, selectReview} from './../redux/reviewSlice'



function YourReview({movie}) {

    const [rating, setRating] = useState(0)
    const [review, setReview] = useState("")

    const [user, setUser] = useState(true)

 
  const dispatch = useDispatch()
  const reviews = useSelector(selectReview)

  const handleAddReview = (movie) =>{
      let filteredReviews = reviews.filter(review => review.title === movie.title)
      if(filteredReviews.length > 0){
          dispatch(removeReview(movie.title))
      }
      dispatch(addReview({title: movie.title, rating: rating, review: review, id: movie.id}))

  }

  const handleRating = (rate) => {
    setRating(rate/10)
  }

  return (
    <div className="yourReview">
        <h4>Write A Review</h4>
        <form>
            <Rating allowHalfIcon={true} allowHover={false} fillColor={"rgb(206, 174, 34)"} emptyColor={"rgb(122, 122, 122)"} iconsCount={10} onClick={handleRating} size={30} transition={true}/>
            <textarea rows={4} placeholder="What did you think of this movie?(optional)" onChange={(event)=>setReview(event.target.value)}/>
            {user?<button onClick={()=> handleAddReview(movie)} type="button">Submit Review</button>:<button type="button">Login to Submit</button>}
        </form>
    </div>
  )
}

export default YourReview;