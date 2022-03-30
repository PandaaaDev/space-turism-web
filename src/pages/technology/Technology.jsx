import React, { useState } from 'react'
import DisplayImg from '../../components/displayImg/DisplayImg'
import Navbar from '../../components/nav/Navbar'
import Slide from '../../components/slide/Slide'
import DisplayTechnologyContent from '../../components/displayTechnologyContent/DisplayTechnologyContent'
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
					<div className='technologyImg'></div>
				</div>
			</div>
		</div>
	)
}

export default Technology
