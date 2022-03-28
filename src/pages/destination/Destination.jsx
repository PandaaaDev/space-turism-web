import React, { useState } from 'react'
import Navbar from '../../components/nav/Navbar'
import DisplayDirectionContent from '../../components/displayDirectionContent/DisplayDirectionContent'
import DisplayImg from '../../components/displayImg/DisplayImg'
import Tabs from '../../components/tabs/Tabs'
import './destination.scss'
const Destination = ({ Data }) => {
	const [display, setDisplay] = useState(0)
	const displayChangeHanlder = id => {
		setDisplay(id)
	}
	return (
		<div className='destination'>
			<Navbar page='destination' />
			<div className='container'>
				<div className='left'>
					<div className='title'>
						<span>01</span>pick your destination
					</div>
					<DisplayImg className='destinationImg' data={Data[display]} />
				</div>
				<div className='right'>
					<Tabs displayState={display} data={Data} changeSlide={displayChangeHanlder} />
					<DisplayDirectionContent data={Data[display]} />
				</div>
			</div>
		</div>
	)
}

export default Destination
