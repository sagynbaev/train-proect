const openModalButton = document.querySelector('.otkryt-okno'); 
const closeModalButton = document.querySelector('.zakryt-okno'); 
const modal = document.querySelector('.okno'); 
 
openModalButton.addEventListener('click', () => { 
  modal.classList.add('show'); 
}); 
 
closeModalButton.addEventListener('click', () => { 
  modal.classList.remove('show'); 
}); 
const arrow = document.querySelector('.arrow'); 
 
openModalButton.addEventListener('click', () => { 
  modal.classList.add('show'); 
  arrow.classList.toggle('left'); 
}); 
 
closeModalButton.addEventListener('click', () => { 
  modal.classList.remove('show'); 
  arrow.classList.toggle('left'); 
}); 
 
 
 
const colors = document.querySelectorAll('.cvetStrelka'); 
 
colors.forEach(color => { 
  color.addEventListener('click', () => { 
    const body = document.querySelector('body'); 
    const colorValue = color.dataset.color; 
    body.style.backgroundColor = colorValue; 
  }); 
}); 
 
function changeFontSize(value) { 
  let headerLinks = document.getElementsByClassName("link"); 
  for (let i = 0; i < headerLinks.length; i++) { 
    headerLinks[i].style.fontSize = value + "px"; 
  } 
}
 
function changeColor() { 
  var colorPickerInput = document.getElementById("svet-picker-input"); 
  var element1 = document.getElementById("element-1"); 
  var element2 = document.getElementById("element-2"); 
  var element3 = document.getElementById("element-3"); 
  var element4 = document.getElementById("element-4"); 
 
  var color = colorPickerInput.value; 
  element1.style.backgroundColor = color; 
  element2.style.backgroundColor = color; 
  element3.style.backgroundColor = color; 
  element4.style.backgroundColor = color; 
}