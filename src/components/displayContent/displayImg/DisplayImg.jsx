import React from 'react'

const DisplayImg = ({ data, className }) => {
	return <img className={className} src={data.images.png} alt={` ${data.name}`}></img>
}

export default DisplayImg
