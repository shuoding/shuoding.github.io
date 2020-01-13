function switchMode() {
	var modebtn = document.getElementById("modebtn");
	var bd = document.getElementById("bd");
	if (modebtn.innerHTML === "Switch To Night Mode") {
		modebtn.innerHTML = "Switch To Day Mode";
		bd.style.backgroundColor = "#000000";
	} else {
		modebtn.innerHTML = "Switch To Night Mode";
		bd.style.backgroundColor = "#AAAAFF";
	}
}
