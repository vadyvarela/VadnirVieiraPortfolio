import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	font-family: 'dosis';
    background: var(--body);
    line-height: 1;
    font-size: 100%;
}
ol, ul {
	list-style: none;
}
progress {
  overflow: initial !important;
    display: flex !important;
    align-items: center !important;
}
progress:after {
  content: attr(value)'%';
    color: var(--white);
    margin: 0 10px;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

body.dark {
	--header: #101010;
	--footer: #101010;
	--body: #242424;
	--active: #1fa1f2;
	--borders: #1fa1f2;
	--small: #aaa;
	--blogdiv: #323232;
	--backgroundDivs: #444;
	--white: #fff;
	--black: #222;
}

body{
	--header: #ffffff;
	--footer: #ffffff;
	--body: #f1f1f1;
	--active: #1fa1f2;
	--borders: #1fa1f2;
	--small: #777;
	--blogdiv: #ffffff;
	--backgroundDivs: #ffffff;
	--white: #222;
	--black: #fff;
}
`

export default GlobalStyles