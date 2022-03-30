import React from 'react'
import './slide.scss'
const Slide = ({ data, displayState, changeSlide }) => {
	return (
		<div className='slideContainer'>
			{data.map(e => (
				<div
					className={displayState === e.id ? 'slideBtn active' : 'slideBtn'}
					key={e.id}
					onClick={() => changeSlide(e.id)}>
					<span>{e.id}</span>
				</div>
			))}
		</div>
	)
}

export default Slide
