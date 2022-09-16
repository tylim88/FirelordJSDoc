import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'

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
				<img src={useBaseUrl(src)} />
				<small>{text}</small>
			</div>
			<br />
		</>
	)
}
