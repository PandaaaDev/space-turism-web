import React from 'react'

const DisplayContent = ({ data }) => {
	return (
		<div className='contentContainer'>
			<div className='top'>
				<h2 className='name'>{data.name}</h2>
				<p className='description'>{data.description}</p>
			</div>
			<div className='bottom'>
				<p className='titleDistance'>avg. distance</p>
				<p>{data.distance}</p>
				<p className='titleTravel'>est.travel time</p>
				<p>{data.travel}</p>
			</div>
		</div>
	)
}

export default DisplayContent
