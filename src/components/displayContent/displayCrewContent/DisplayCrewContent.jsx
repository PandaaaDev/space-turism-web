import React from 'react'
import './displayCrewContent.scss'

const DisplayCrewContent = ({data}) => {
  return (
    <div className='displayContentContainer'>
      <div className="crewmanRole">{data.role}</div>
      <div className="crewmanName">{data.name}</div>
      <div className="crewmanDescription">{data.description}</div>
    </div>
  )
}

export default DisplayCrewContent