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
	favicon: 'favicon.ico',
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
				id: 'firesage',
				path: 'firesage',
				routeBasePath: 'firesage',
				sidebarPath: require.resolve('./sidebarsFireSage.js'),
				// ... other options
			},
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			metadata: [{ name: 'og:title', content: 'Typescript Wrapper' }],
			colorMode: {
				defaultMode: 'dark',
				disableSwitch: false,
				respectPrefersColorScheme: false,
			},
			navbar: {
				title: 'FirelordJS',
				logo: {
					alt: 'FirelordJS Logo',
					src: 'logo.png',
				},
				items: [
					{
						type: 'doc',
						docId: 'installation',
						position: 'left',
						label: 'Firestore',
					},
					{
						type: 'doc',
						docId: 'quick_start',
						position: 'left',
						label: 'Realtime Database',
						docsPluginId: 'firesage',
					},
					{
						type: 'docsVersionDropdown',
						position: 'right',
						dropdownItemsAfter: [],
						dropdownActiveClassDisabled: true,
					},
					{
						type: 'dropdown',
						label: 'Github',
						position: 'right',
						items: [
							{
								label: 'FirelordJS',
								href: 'https://github.com/tylim88/FirelordJS',
							},
							{
								label: 'Firelord',
								href: 'https://github.com/tylim88/Firelord',
							},
							{
								label: 'FireSageJS',
								href: 'https://github.com/tylim88/FireSageJS',
							},
							{
								label: 'Documentation',
								href: 'https://github.com/tylim88/FirelordJSDoc',
							},
						],
					},
					{
						href: '/discord',
						label: 'Discord',
						position: 'right',
					},
				],
			},
			footer: {
				style: 'dark',
				copyright: `© 2021-${new Date().getFullYear()}.`,
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
