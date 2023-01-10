import React from 'react'

export const Header = () => (
	<>
		<div align="center">
			<img
				src="https://raw.githubusercontent.com/tylim88/Firelord/main/img/ozai.png"
				width="200px"
			/>
			<h1>Firelord 烈火君</h1>
		</div>

		<div align="center">
			<a href="https://www.npmjs.com/package/firelord" target="_blank">
				<img
					src="https://img.shields.io/npm/v/firelord"
					alt="Created by tylim88"
				/>
			</a>
			&nbsp;
			<a
				href="https://github.com/tylim88/firelord/blob/main/LICENSE"
				target="_blank"
			>
				<img
					src="https://img.shields.io/github/license/tylim88/firelord"
					alt="License"
				/>
			</a>
			&nbsp;
			<a
				href="https://www.npmjs.com/package/firelord?activeTab=dependencies"
				target="_blank"
			>
				<img
					src="https://img.shields.io/badge/dynamic/json?url=https://api.npmutil.com/package/firelord&label=dependencies&query=$.dependencies.count&color=brightgreen"
					alt="dependency count"
				/>
			</a>
			&nbsp;
			<img
				src="https://img.shields.io/badge/gzipped-2.5KB-brightgreen"
				alt="package size"
			/>
			&nbsp;
			<a href="https://github.com/tylim88/Firelord/actions" target="_blank">
				<img
					src="https://github.com/tylim88/Firelord/workflows/Main/badge.svg"
					alt="github action"
				/>
			</a>
			&nbsp;
			<a href="https://codecov.io/gh/tylim88/Firelord" target="_blank">
				<img
					src="https://codecov.io/gh/tylim88/Firelord/branch/main/graph/badge.svg"
					alt="code coverage"
				/>
			</a>
			&nbsp;
			<a href="https://github.com/tylim88/Firelord/issues" target="_blank">
				<img
					alt="GitHub issues"
					src="https://img.shields.io/github/issues-raw/tylim88/firelord"
				></img>
			</a>
			&nbsp;
			<a href="https://snyk.io/test/github/tylim88/FirelordJS" target="_blank">
				<img
					src="https://snyk.io/test/github/tylim88/FirelordJS/badge.svg"
					alt="vulnerabilities"
				/>
			</a>
		</div>
		<br />
		<div align="center">
			<i>Extremely High Precision Typescript Wrapper for Firestore Admin</i>
		</div>
		<br />
		<div align="center">
			<a href="https://github.com/tylim88/Firelord" target="_blank">
				Github
			</a>
		</div>
		<br />
	</>
)
