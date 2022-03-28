import React from 'react'

const Slide = ({ data, displayState, changeSlide }) => {
	return (
		<div className='slideContainer'>
			{data.map(e => (
				<div className={displayState === e.id ? 'slideBtn active' : 'slideBtn'} key={e.id} onClick={() => changeSlide(e.id)}>
					{''}
				</div>
			))}
		</div>
	)
}

export default Slide
