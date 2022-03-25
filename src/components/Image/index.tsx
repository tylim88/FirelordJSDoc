import React from 'react'

export const Image = ({ src, text }: { src: string; text: string }) => {
	return (
		<>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<img src={src} />
				<small>{text}</small>
			</div>
			<br />
		</>
	)
}
