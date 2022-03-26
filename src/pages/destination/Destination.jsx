import React, { useState } from 'react'
import Navbar from '../../components/nav/Navbar'
import DisplayContent from '../../components/displayContent/DisplayContent'
import DisplayImg from '../../components/displayImg/DisplayImg'
import './destination.scss'
import Slider from '../../components/slider/Slider'
const Destination = ({ Data }) => {
	const [display, setDisplay] = useState(0)
	const displayChangeHanlder = id => {
		setDisplay(id)
	}
	console.log(display === Data[0].id)
	return (
		<div className='destination'>
			<Navbar page='destination' />
			<DisplayImg className='destinationImg' data={Data[display]} />
			<div className='container'>
				<div className='sliderBtns'>
					<Slider data ={Data} changeSlideHadler={displayChangeHanlder}/>
				</div>
			</div>
			<DisplayContent data={Data[display]} />
		</div>
	)
}

export default Destination
