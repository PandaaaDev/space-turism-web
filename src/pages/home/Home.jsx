import React, { useState } from 'react'
import Navbar from '../../components/nav/Navbar'
import { Link } from 'react-router-dom'
import './home.scss'
const Home = () => {
	const [mouseOverExplore, setMosueOverExplore] = useState(false)
	const exploreHandler = () => {
		if (!mouseOverExplore) {
			setMosueOverExplore(true)
			return
		}
		if (mouseOverExplore) {
			setMosueOverExplore(false)
			return
		}
	}
	return (
		<div className='home'>
			<Navbar page='home' />
			<div className='content'>
				<p className='textOverTitle'>So, you want to travel to</p>
				<h2 className='title'>Space</h2>
				<p className='description'>
					Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of
					on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
				</p>
			</div>
			<div className='exploreContainer'>
				<div className={mouseOverExplore ? 'exploreBackground active' : 'exploreBackground'}></div>
				<Link to={'/destination'} className='exploreBtn' onMouseOver={exploreHandler} onMouseLeave={exploreHandler}>
					Explore
				</Link>
			</div>
		</div>
	)
}

export default Home
