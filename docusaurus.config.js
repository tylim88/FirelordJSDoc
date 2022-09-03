// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'FirelordJS',
	tagline: 'High Precision Firestore Typescript Wrapper ',
	url: 'https://firelordjs.com',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'tylim88', // Usually your GitHub org/user name.
	projectName: 'FirelordJS', // Usually your repo name.
	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarCollapsible: true,
					routeBasePath: '/',
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl: 'https://github.com/tylim88/FirelordJSDoc/tree/main',
				},
				blog: false,
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],
	plugins: [
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'rtdb',
				path: 'rtdb',
				routeBasePath: 'rtdb',
				sidebarPath: require.resolve('./sidebarsRTDB.js'),
				// ... other options
			},
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			colorMode: {
				defaultMode: 'dark',
				disableSwitch: false,
				respectPrefersColorScheme: false,
			},
			navbar: {
				title: 'FirelordJS',
				logo: {
					alt: 'FirelordJS Logo',
					src: 'img/logo.png',
				},
				items: [
					{
						type: 'doc',
						docId: 'quick_start',
						position: 'left',
						label: 'Firestore',
					},
					{
						type: 'doc',
						docId: 'quick_start',
						position: 'left',
						label: 'Realtime Database',
						docsPluginId: 'rtdb',
					},
				],
			},
			footer: {
				style: 'dark',
				copyright: `© 2021-${new Date().getFullYear()}. Brought To You By Acid Coder`,
				links: [
					{
						html: `
						  <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
							<img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" width="114" height="51" />
						  </a>
						`,
					},
				],
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
			algolia: {
				appId: 'HG686FA5BG',
				apiKey: '5005f463dd1748fc06883377ef325971',
				indexName: 'firelordjs',
			},
		}),
}

module.exports = config
