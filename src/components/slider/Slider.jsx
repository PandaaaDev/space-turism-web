import React from 'react'

const Slider = ({ data, changeSlideHadler }) => {
	return data.map(e => (
		<div className='sliderBtn' onClick={() => changeSlideHadler(e.id)}>
			{e.name}
		</div>
	))
}

export default Slider
