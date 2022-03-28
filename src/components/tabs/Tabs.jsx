import React from 'react'
import './tabs.scss'
const Tabs = ({ data, changeSlide, displayState }) => {
	return (
		<div className='tabsContainer'>
			{data.map(e => (
				<div className={displayState === e.id ? 'tab active' : 'tab'} key={e.id} onClick={() => changeSlide(e.id)}>
					{e.name}
				</div>
			))}
		</div>
	)
}

export default Tabs
