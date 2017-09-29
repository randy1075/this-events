//Secret Menu Challenge!
/*Add event listeners to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var storeDiv = document.querySelectorAll('.name');
//get all the parent divs and store them in array called 'storeDiv'

function reveal(){
  var shopChildDiv = this.querySelector('.menu');
  //this selects the first child element with the class 'revealMe'
  if(shopChildDiv.style.display === 'none'){
    //if the CSS for display is none -> Set to block
    shopChildDiv.style.display = 'block';
  } else {
    //else (or if the style is block) -> Set the display to none (hide the element)
    shopChildDiv.style.display = 'none';
  }
}

for(var i = 0; i < storeDiv.length; i++){
  //we loop through the all of the parent elements (storeDiv)
  storeDiv[i].addEventListener('click', reveal);
  //then we add an event listener to each index by using [i],
  //and add the function we created up there called reveal
}



/*var clickMsg = document.getElementById('name');
clickMsg.addEventListener('click', toggle);

function toggle(){
  var showMenu = document.getElementById('secret');
  if(showMenu.style.display === 'none'){
    showMenu.style.display = 'block';
  } else {
    showMenu.style.display = 'none';
  }
}*/