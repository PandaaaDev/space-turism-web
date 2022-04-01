import React, { useState, useEffect } from 'react'
import Navbar from '../../components/nav/Navbar'
import Slide from '../../components/slide/Slide'
import DisplayTechnologyContent from '../../components/displayContent/displayTechnologyContent/DisplayTechnologyContent'
import './technology.scss'
import DisplayTechImg from '../../components/displayContent/displayImg/DisplayTechImg'
const Technology = ({ Data }) => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
	const [display, setDisplay] = useState(0)
	const updateWindowWidth = () => {
		setWindowWidth(window.innerWidth)
	}
	useEffect(() => {
		window.addEventListener('resize', updateWindowWidth)
		return () => window.removeEventListener('resize', updateWindowWidth)
	}, [])
	const displayHandler = id => {
		setDisplay(id)
	}
	return (
		<div className='technology'>
			<Navbar page='technology' />
			<div className='container'>
				<div className='sectionTitle'>
					<span>03</span>space launch 101
				</div>
				<div className='content'>
					<div className='left'>
						<DisplayTechImg data={Data[display]} className='technologyImg' vievPortWidth={windowWidth} />
					</div>
					<div className='right'>
						<Slide data={Data} displayState={display} changeSlide={displayHandler} />
						<DisplayTechnologyContent data={Data[display]} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Technology
