import React, { useState } from 'react'
import DisplayImg from '../../components/displayImg/DisplayImg'
import Navbar from '../../components/nav/Navbar'
import Slide from '../../components/slide/Slide'
const Technology = ({ Data }) => {
	const [display, setDisplay] = useState(0)
	const displayHandler = id => {
		setDisplay(id)
	}
	return (
		<div className='technology'>
			<Navbar page='technology' />
			<div className='technologyTitle'></div>
			<div className='technologyContainer'>
				<div className='left'>
					<Slide data={Data} displayState={display} changeSlide={displayHandler} />
					<DisplayTechnologyContent data={Data[display]} />
				</div>
				<div className='right'>
					<DisplayImg className={technologyImg} data={Data[display]} />
				</div>
			</div>
		</div>
	)
}

export default Technology
