import React from 'react'

const DisplayImg = ({ data, className }) => {
	return <img className={className} src={data.images.png} alt={`Image of ${data.name}`}></img>
}

export default DisplayImg
