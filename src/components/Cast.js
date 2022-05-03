import React from 'react'

function Cast({cast}) {

    const base_url = "https://image.tmdb.org/t/p/w200"
    
    const getStarringCast = (cast) =>{
        const starringCast = cast.filter(actor => actor.profile_path)
        const splitActorName = (actor) => {
            let name = actor.name.split(" ")
            return (
            <>
                <h6>{name[0]}</h6> 
                <h6>{name[1]}</h6>
            </>
                
                )}
        return(
            <div className="starringCastInfo">
                {starringCast.map(actor =>{
                    return(
                        <div key={actor.id}>
                            <img src={`${base_url}${actor.profile_path}`} alt={actor.name}/>
                            {splitActorName(actor)}
                            <p>{actor.character}</p>
                        </div>
                    )
                })}
            </div>
        )
    }

  return (
    <div className="starringCastInfoContainer">
        <h4>Starring</h4>
        {getStarringCast(cast)}
    </div>
  )
}

export default Cast