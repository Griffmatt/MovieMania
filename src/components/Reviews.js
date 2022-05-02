import React from 'react'

function Review() {

    const reviews = [
        {
            name: "Griffin",
            rating: 7,
            date: "4/20/2022",
            review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess gregth"
        },
        {
            name: "Griffin",
            rating: 7,
            date: "4/20/2022",
            review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess gregth"
        },
        {
            name: "Griffin",
            rating: 7,
            date: "4/20/2022",
            review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess gregth"
        },
        {
            name: "Griffin",
            rating: 7,
            date: "4/20/2022",
            review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess gregth"
        },
        {
            name: "Griffin",
            rating: 7,
            date: "4/20/2022",
            review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess gregth"
        },
        {
            name: "Griffin",
            rating: 7,
            date: "4/20/2022",
            review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess gregth"
        }
    ]
  return (
    <div className="reviewContainer">
        <h4>Recent Reviews</h4>
        <div className="reviews">
            {reviews.map((review, index) =>{
                return(
                    <div key={index}>
                        <h5>{review.name}</h5>
                        <div className="review">
                            <div><h5>{review.rating}/10</h5><h5>{review.date}</h5></div>
                            <p>{review.review}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Review;
