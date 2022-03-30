import React from 'react'

const DisplayTechnologyContent = ({ data }) => {
	return (
		<div className='content'>
			<p>The terminology</p>
			<div className='technologyName'>{data.name}</div>
			<div className='technologyDescription'>{data.description}</div>
		</div>
	)
}

export default DisplayTechnologyContent
