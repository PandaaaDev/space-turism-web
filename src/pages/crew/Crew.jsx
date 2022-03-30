import React, { useState } from 'react'
import DisplayImg from '../../components/displayImg/DisplayImg'
import Navbar from '../../components/nav/Navbar'
import Slide from '../../components/slide/Slide'
import DisplayCrewContent from '../../components/displayCrewContent/DisplayCrewContent'
import './crew.scss'
const Crew = ({ Data }) => {
	const [display, setDisplay] = useState(0)
	console.log(Data)
	const displayHandler = id => {
		setDisplay(id)
	}

	return (
		<div className='crew'>
			<Navbar page='crew' />
			<div className='crewTitle'><span>02</span>meet your crew</div>
			<div className='crewContainer'>
				<div className='left'>
					<Slide data={Data} displayState={display} changeSlide={displayHandler} />
					<DisplayCrewContent data={Data[display]} />
				</div>
				<div className='right'>
					<DisplayImg className={'crewImg'} data={Data[display]} />
				</div>
			</div>
		</div>
	)
}

export default Crew
