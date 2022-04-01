import React from 'react'

const DisplayTechImg = ({ vievPortWidth, data, className }) => {
	if (vievPortWidth > 1099) {
		return <img className={className} src={data.images.portrait} alt={data.name} />
	} else {
		return <img className={className} src={data.images.landscape} alt={data.name} />
	}
}

export default DisplayTechImg
