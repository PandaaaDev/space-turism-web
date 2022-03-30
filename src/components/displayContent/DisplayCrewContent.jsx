import React from 'react'

const DisplayCrewContent = ({ data }) => {
	return (
		<div className='contentContainer'>
			<p className='role'>{data.role}</p>
			<p className='name'>{data.name}</p>
			<p className='description'>{data.description}</p>
		</div>
	)
}

export default DisplayCrewContent
