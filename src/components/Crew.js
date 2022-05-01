import React from 'react'

function Crew({crew, budget, revenue}) {
    const getCrewInfo = (position) => {
        const results = crew.filter(
          (person) => person.job === position
        );
    
        if (results.length === 0) {
          return (
            <>
              <h4>{position}</h4>
              <p>coming soon...</p>
            </>
          );
        }
    
        return (
          <>
          <h4>{position}</h4>
          <div className="crew">
            {results.map((result, i) => (
            <p key={i} className="crewMember">
              {result.name}
            </p>))}
          </div>
          </>
        )
      };
  return (
    <div className="crewAndBudgetInfo">
    <div className="crewInfo">
        <div>
        {crew && getCrewInfo('Director')}
        </div>
        <div>        
        {crew && getCrewInfo('Producer')}
        </div>
        <div>
        {crew && getCrewInfo('Screenplay')}
        </div>
    </div>
    <div className="budgetInfo">
        <div>
          <h4>Budget</h4>
          <p>{budget}</p>
        </div>
        <div>
          <h4>Revenue</h4>
          <p>{revenue}</p>
        </div>
    </div>
  </div>
  )
}

export default Crew;