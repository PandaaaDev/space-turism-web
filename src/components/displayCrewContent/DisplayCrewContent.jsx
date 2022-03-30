import React from 'react'

const DisplayCrewContent = ({data}) => {
  return (
    <div className='contentContainer'>
      <div className="crewmanRole">{data.role}</div>
      <div className="crewmanName">{data.name}</div>
      <div className="crewmanDescription">{data.description}</div>
    </div>
  )
}

export default DisplayCrewContent