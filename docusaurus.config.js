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
					sidebarCollapsible: false,
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
						label: 'Docs',
					},
					{
						href: 'https://discord.com/invite/BN2cgc3',
						label: 'Discord',
						position: 'right',
					},
					{
						href: 'https://github.com/tylim88/FirelordJS',
						label: 'GitHub',
						position: 'right',
					},
				],
			},
			footer: {
				style: 'dark',
				copyright: `© 2021-${new Date().getFullYear()}. Unprecedented Type Safe Brought To You By Acid Coder`,
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
