const APP = {
	icons: {
		init (url) {
			const icon = document.createElement('embed');
			icon.type = 'image/svg+xml';
			icon.src = url;
			icon.style.height = '0';
			icon.style.width = '0';
			icon.style.position = 'absolute';
			icon.onload = () => {
				this.icon = icon.getSVGDocument();
				const event = new Event('iconload');
				document.dispatchEvent(event);
			};
			document.body.appendChild(icon);

			const style = document.createElement('style');
			style.innerHTML = `
				.icons {background-image: url(${url});}
			`;
			document.body.appendChild(style);
		} 
	}
}

window.APP = APP;
export default APP;