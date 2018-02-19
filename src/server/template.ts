const pkg = require('../../package.json')
import { PROPS } from '../constants'
import { IProps } from '../props'

const template = (prefix: string, body: string, props: Partial<IProps>): string =>
`<!DOCTYPE html>
<html>
	<head>
		<title>Pergamon SSR</title>
		<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/searchkit/2.0.0/theme.css">
		<link rel="stylesheet" type="text/css" href="/css/main.css">
		<link rel="stylesheet" type="text/css" href="/css/searchkit.css">
		<link rel="stylesheet" type="text/css" href="/css/d3.css">
		<script>window.${PROPS} = ${JSON.stringify(props)}</script>
	</head>
	<body>
		<div id="container">${body}</div>
		<script src="/react/umd/react.development.js"></script>
		<script src="/react-dom/umd/react-dom.development.js"></script>
		<script src="/js/commons-${pkg.version}.js"></script>
		<script src="/js/${prefix}.bundle-${pkg.version}.js"></script>
	</body>
</html>`

export default template