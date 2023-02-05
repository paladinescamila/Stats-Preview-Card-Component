const imageElement = document.getElementById('image');

const chooseImage = () => {
	if (window.innerWidth > 950) imageElement.src = 'img/header-desktop.jpg';
	else imageElement.src = 'img/header-mobile.jpg';
};

window.onload = chooseImage;
window.onresize = chooseImage;
