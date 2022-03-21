//function to open the bag for onclick
function openBag() {
	document.getElementById('overlay').classList.add('overlay');
	document.getElementById('loader').classList.add('loader');
	setTimeout(() => {
		document.getElementById('bag').style.right = '0';
		document.getElementById('loader').classList.remove('loader');
	}, 1000);
}

//function to close the bag for onclick
function closeBag() {
	document.getElementById('overlay').classList.remove('overlay');
	document.getElementById('bag').style.right = '-500px';
}
