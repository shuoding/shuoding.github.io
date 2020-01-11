function changeBackgroundImage() {
	var bgibtn = document.getElementById("bgibtn");
	var bd = document.getElementById("bd");
	if (bgibtn.innerHTML === "Hide Background Image") {
		bgibtn.innerHTML = "Show Background Image";
		bd.style.backgroundImage = "url('')";
	} else {
		bgibtn.innerHTML = "Hide Background Image";
		bd.style.backgroundImage = "url('image/background.jpg')";
	}
}
