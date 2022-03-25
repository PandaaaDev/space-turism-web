import React, { useState } from 'react'
import Navbar from '../../components/nav/Navbar'
import DisplayContent from '../../components/displayContent/DisplayContent'
import './destination.scss'
const Destination = ({ Data }) => {
	const [display, setDisplay] = useState(0)
	const displayChangeHanlder = () => {
		setDisplay(1)
		console.log(display)
	}
	const displayChangeHanlder2 = () => {
		setDisplay(0)
		console.log(display)
	}
	return (
		<div className='destination'>
			<Navbar page='destination' />
			<div className='SliderBtn' onClick={displayChangeHanlder}>
				klikacz
			</div>
			<div className='SliderBtn' onClick={displayChangeHanlder2}>
				klikacz 2
			</div>
			<DisplayContent data={Data[display]} display={display} />
		</div>
	)
}

export default Destination
