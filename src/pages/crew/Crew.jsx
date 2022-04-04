import React, { useState } from 'react'
import DisplayImg from '../../components/displayContent/displayImg/DisplayImg'
import Navbar from '../../components/nav/Navbar'
import Slide from '../../components/slide/Slide'
import DisplayCrewContent from '../../components/displayContent/displayCrewContent/DisplayCrewContent'
import './crew.scss'
const Crew = ({ Data }) => {
	const [display, setDisplay] = useState(0)
	const displayHandler = id => {
		setDisplay(id)
	}

	return (
		<div className='crew'>
			<Navbar page='crew' />
			<div className='container'>
				<div className='sectionTitle'>
					<span>02</span>meet your crew
				</div>
				<div className='content'>
					<DisplayCrewContent data={Data[display]} />
					<Slide data={Data} displayState={display} changeSlide={displayHandler} />
					<div className='crewImgContainer'>
						<DisplayImg className={'crewImg'} data={Data[display]} />
						<div className='line'></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Crew
