function handleClick(){
  alert("Clicked");
}

// document.querySelector("button").addEventListener("click", function (){
//   alert("Clicked");
// });

//Adding paranthesis will straight up call the function without any clicks

 // here we are apssing the function as input arguments to the addEventListener function

 // to fix this we can use anonymous function and define it in the argument only instead of passing A seperate function as input argument

// i.e function (){
//   alert("Clicked");
// }

//constructor function in javascript have follwing rules:
// 1. name of the constructor function should be capital
// 2. it should be called with new keyword
// 3 no camel case
// 4. it should be called with new keyword

var buttons = document.querySelectorAll(".drum");

for(var i=0;i<buttons.length;i++){

  buttons[i].addEventListener("click", function(){
    makesound(this.innerHTML);
  
  });
};
 document.addEventListener("keydown", function(event){
    makesound(event.key);});

function makesound(key){
  switch(key){
    case 'w':
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

      case 'a':
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
      case 's':
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
      case 'd':
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
      case 'j':
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
      case 'k':
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
      case 'l':
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

      default:
        console.log(this.innerHTML);



  }
}



// here there is only concept of  objects and not classes
// defining of  methods is done inside the constructor itself 


//higher order function
//function that takes other function as input arguments or returns a function as output