import React from 'react'
import './displayTechData.scss'
const DisplayTechnologyContent = ({ data }) => {
	return (
		<div className='displayContentContainer'>
			<p className='technologyTerminolgy'>The terminology</p>
			<div className='technologyName'>{data.name}</div>
			<div className='technologyDescription'>{data.description}</div>
		</div>
	)
}

export default DisplayTechnologyContent
