import React from 'react'
import Navbar from '../../components/nav/Navbar'

const Crew = ({ Data }) => {
	console.log(Data)
	return (
		<div className='crew'>
			<Navbar page='crew' />
		</div>
	)
}

export default Crew
