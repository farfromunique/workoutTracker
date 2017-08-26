function toggleInstructions(exercise) {
	var current = document.getElementById(exercise);
	var instructions = current.getElementsByClassName("w_instruction");
	if (instructions[0].style.display == "none") {
		for (var i=0;i<instructions.length; i++) {
			instructions[i].style.display = "block";
		}
	} else {
		for (var i=0;i<instructions.length; i++) {
			instructions[i].style.display = "none";
		}
	}
}

function showSet(exercise,setNumber) {
	var current = document.getElementById(exercise);
	var sets = current.getElementsByClassName("set");
	sets[setNumber-1].style.display = "block";
	console.log(setNumber);
	current.getElementsByTagName("button")[setNumber-1].disabled = true;
}

function collapseExcersize(excercise) {
	var current = document.getElementById(excercise);
	
	for (var i = 0; i < current.getElementsByTagName("div").length; i++) {
		current.getElementsByTagName("div")[i].className += " hide";
	}
	current.getElementsByClassName("startButton")[0].className += " hide";
	current.getElementsByClassName("w_name_expand")[0].className = current.getElementsByClassName("w_name_expand")[0].classList[0];
}

function expandExcersize(excercise) {
	var current = document.getElementById(excercise);
	
	for (var i = 0; i < current.getElementsByTagName("div").length; i++) {
		current.getElementsByTagName("div")[i].className = current.getElementsByTagName("div")[i].classList[0];
	}
	current.getElementsByClassName("startButton")[0].className = current.getElementsByClassName("startButton")[0].classList[0];
	current.getElementsByClassName("w_name_expand")[0].className += " hide";
}

function incrementWeight(id,step) {
	var current = document.getElementById(id);	
	var start = parseInt(current.innerText);
	
	var output = start + step;
	
	current.innerText = output;
}

function decrementWeight(id,step) {
	var current = document.getElementById(id);
	var start = parseInt(current.innerText);
	
	var output;
	if (start > step) {
		output = start - step;
	} else {
		output = start;
	}
	
	current.innerText = output;
}

