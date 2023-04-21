// https://stackoverflow.com/questions/18031410/javascript-if-time-is-between-7pm-and-7am-do-this
function defaultTheme() { 
	const theme = document.getElementById('theme');
	const hour = new Date().getHours();
	if (hour >= 19 || hour <= 7) {
		theme.setAttribute('href', 'dark.css');
	} else {
		theme.setAttribute('href', 'light.css');
	}
}