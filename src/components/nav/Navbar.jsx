import React, { useState } from 'react'
import Logo from '../UI/Logo'
import { Link } from 'react-router-dom'
import './navbar.scss'
import BurgerIcon from '../UI/BurgerIcon'
import CrossIcon from '../UI/CrossIcon'
const Navbar = ({ page }) => {
	const [showMenu, setShowMenu] = useState('false')
	const showMenuHandler = () => {
		if (showMenu) {
			setShowMenu(false)
			return
		}
		setShowMenu('true')
	}
	return (
		<nav className='navbar'>
			<Logo />
			<button className='burgerBtn' onClick={showMenuHandler}>
				{showMenu ? <BurgerIcon /> : <CrossIcon />}
			</button>
			<ul className={showMenu ? 'menu' : 'menu show'}>
				<li>
					<Link className={page === 'home' ? 'link active' : 'link'} to='/'>
						<span>00</span> Home
					</Link>
				</li>
				<li>
					<Link className={page === 'destination' ? 'link active' : 'link'} to='/destination'>
						<span>01</span> Destination
					</Link>
				</li>
				<li>
					<Link className={page === 'crew' ? 'link active' : 'link'} to='/crew'>
						<span>02</span> Crew
					</Link>
				</li>
				<li>
					<Link className={page === 'technology' ? 'link active' : 'link'} to='/technology'>
						<span>03</span> Technology
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
