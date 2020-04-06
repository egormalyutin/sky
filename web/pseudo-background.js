// ==UserScript==
// @name         Pseudo Discord
// @namespace    https://discordapp.com/
// @version      0.1
// @description  Pseudo Discord
// @author       Me
// @match        https://discordapp.com/*
// @grant        none
// ==/UserScript==

(function() {
	const ox = 0;
	const oy = -73;

	const bg = `url(https://cdn.discordapp.com/attachments/696636253319200808/696636411490861123/bg-blur.png)`;

	const selector =
		'[class*="messages-"], [class*="chatContent-"], [class*="members-"], [class*="sidebar-"] > *, [class*="panels-"], [class*="systemPad-"], [class*="scrollableContainer-"], [class*="title-"], [class*="resultsGroup-"], [class*="modal-"], [class*="themed-"]';

	const customCSS = `
[class*="chatContent-"] > form::before {
	display: none !important;
}

[class*="title-"] *::after {
	display: none !important;
}

[class*="scroller-"] {
	scrollbar-color: transparent transparent !important;
}
`;

	///////////////////////////////////////////////////////////////

	const elem = document.createElement("style");
	document.head.appendChild(elem);

	let x, y;

	setInterval(() => {
		if (window.screenX == x && window.screenY == y) return;
		x = window.screenX;
		y = window.screenY;

		elem.innerText = `${selector} {
	background: ${bg} fixed !important;
	background-position: left ${ox - x}px top ${oy - y}px !important;
	background-repeat: no-repeat !important;
}\n\n` + customCSS;
	}, 100);
})();
