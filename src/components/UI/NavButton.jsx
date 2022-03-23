import React from 'react'

const NavButton = (text, id) => {
	return (
		<button key={id}>
			<span>{id}</span>
			{text}
		</button>
	)
}

export default NavButton
