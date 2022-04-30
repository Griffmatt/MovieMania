import React from 'react'

function Crew({crew}) {
    const getCrewInfo = (position) => {
        const results = crew.filter(
          (person) => person.job === position
        );
    
        if (results.length === 0) {
          return <p>coming soon...</p>;
        }
    
        return (
          <div className="crew">
            {results.map((result, i) => (
            <p key={i} className="crewMember">
              {result.name}
            </p>))}
          </div>
        )
      };
  return (
    <div className="crewInfo">
        <div>
        <h4>Director</h4>
        {crew && getCrewInfo('Director')}
        </div>
        <div>
        <h4>Producer</h4>
        {crew && getCrewInfo('Producer')}
        </div>
        <div>
        <h4>Screenplay</h4>
        {crew && getCrewInfo('Screenplay')}
        </div>
  </div>
  )
}

export default Crew;