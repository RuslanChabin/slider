//set container

var container = document.getElementById("sliderContainer");
container.style.width = "40vw";
container.style.background = "#E2E2E2";
container.style.margin = "50px auto";
container.style.padding = "10px";

//set slider list

var sliderList = document.createElement("ul");
sliderList.style.listStyle = "none";
container.insertBefore(sliderList, sliderButtonAdd);

//set button

var sliderButtonAdd = document.createElement("button");

sliderButtonAdd.style.display = "block";
sliderButtonAdd.style.width = "60px";
sliderButtonAdd.style.height = "60px";
sliderButtonAdd.style.marginLeft = "auto";
sliderButtonAdd.style.marginRight = "auto";
sliderButtonAdd.style.borderRadius = "50%";
sliderButtonAdd.style.fontSize = "30px";
sliderButtonAdd.style.textAlign = "center";
sliderButtonAdd.style.border = "2px solid grey";
sliderButtonAdd.style.backgroundColor = "white";
sliderButtonAdd.style.boxShadow = "0 0 5px";

sliderButtonAdd.innerHTML = "+";
container.appendChild(sliderButtonAdd);


//set slider
	
sliderButtonAdd.onclick = function(){	
	var sliderListItem = document.createElement("li");
	var slider = document.createElement("input");
	
	sliderList.appendChild(sliderListItem);
	sliderListItem.appendChild(slider);
}


