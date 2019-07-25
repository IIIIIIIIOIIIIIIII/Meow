const slider = document.getElementById('slider');
const left = document.getElementById('left');
const right = document.getElementById('right');

function slideMoving(){
	let i = 0;
	let j = 5;
	let indecesArrayUp = [0, 1, 2, 3, 4];
	let indecesArrayDown = [4, 3, 2, 1, 0];	
	let slideFrame = slider;
	let firstSlide = document.createElement('img');
	firstSlide.src = 'img/' + i + '.jpg';	
	slideFrame.appendChild(firstSlide);
	
	function changeSlideToRight(){
		i++;
		firstSlide.src = 'img/' + i + '.jpg';	
		slideFrame.appendChild(firstSlide);
		if(i == indecesArrayUp.length){
			i = 0;
			firstSlide.src = 'img/' + i + '.jpg';	
			slideFrame.appendChild(firstSlide);
		}
	}
	right.addEventListener('click', changeSlideToRight);	
	
	function changeSlideToLeft(){
		j--;
		firstSlide.src = 'img/' + j + '.jpg';	
		slideFrame.appendChild(firstSlide);
		if(j < 0){
			j = 4;
			firstSlide.src = 'img/' + j + '.jpg';	
			slideFrame.appendChild(firstSlide);
		}
		
	}
	left.addEventListener('click', changeSlideToLeft);
}


slideMoving();
