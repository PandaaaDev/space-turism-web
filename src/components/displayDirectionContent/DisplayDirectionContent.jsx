import React from 'react'
import './displayDirectionContent.scss'

const DisplayDirectionContent = ({ data }) => {
	return (
		<div className='displayContentContainer'>
			<div className='top'>
				<h3 className='name'>{data.name}</h3>
				<div className='description'>{data.description}</div>
			</div>
			<div className='bottom'>
				<div className='distance'>
					<p className='titleDistance'>avg. distance</p>
					<p className='bottomData'>{data.distance}</p>
				</div>
				<div className='travel'>
					<p className='titleTravel'>est.travel time</p>
					<p className='bottomData'>{data.travel}</p>
				</div>
			</div>
		</div>
	)
}

export default DisplayDirectionContent
