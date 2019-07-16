
// Js elements 

var picked_type = 6 ; 
var color = generate_RGB_array(picked_type) ; 
var picked = pick_color(picked_type) ; 

//selection 

var square = document.querySelectorAll(".square") ; 
var display_color = document.querySelector(".picked") ;
var h1 = document.querySelector("h1") ; 
var message = document.querySelector(".alert") ; 
var play_again = document.querySelector(".again") ; 
var easy = document.querySelector(".easy") ; 
var hard = document.querySelector(".hard") ; 
var square_hard = document.querySelectorAll(".hard_square") ;  

//events 

// show rgb
window.onload = function () {
    display_color.textContent = picked ; 
}

//picking color general

for (let i = 0; i < square.length; i++) {
      square[i].style.background = color[i] ; 
      square[i].addEventListener("click",function() {
          if(this.style.backgroundColor == picked)  {
            change_color(this.style.background) ; 
            h1.style.backgroundColor = picked ;
            message.textContent = "Correct!" ;
              }
          else {
          this.style.background = "#232323" ;
          message.textContent = "Try again" ; 
          }
      })
}


//reset button

play_again.addEventListener("click",function() {
    color = generate_RGB_array(picked_type) ; 
    picked = pick_color(picked_type) ; 
    display_color.textContent = picked ; 
    message.textContent = "" ;
    for (let i = 0; i < square.length; i++) {
        square[i].style.background = color[i] ; } 
    h1.style.backgroundColor = "steelblue";
})

//hard button 

hard.addEventListener("click",function() {
    picked_type = 6 ;
    color = generate_RGB_array(picked_type) ; 
    for (let index = 0; index < square_hard.length; index++) {
        square_hard[index].style.display = "block" ;      
    }
    picked = pick_color(picked_type) ; 
    display_color.textContent = picked ; 
    message.textContent = "" ;
    for (let i = 0; i < square.length; i++) {
        square[i].style.background = color[i] ; } 
    h1.style.backgroundColor = "steelblue";
})

//easy button

easy.addEventListener("click",function() {
    picked_type = 3 ; 
    color = generate_RGB_array(picked_type) ; 
    for (let index = 0; index < square_hard.length; index++) {
           square_hard[index].style.display = "none" ;      
    }
    picked = pick_color(picked_type) ; 
    display_color.textContent = picked ; 
    message.textContent = "" ;
    for (let i = 0; i < square.length; i++) {
        square[i].style.background = color[i] ; } 
    h1.style.backgroundColor = "steelblue";
})




// functions  

// for change colors with right one

function change_color(color) {
    for (let i = 0; i < square.length; i++) {
        square[i].style.background = color ; } 
}

// for pick target color

function pick_color(picked_type) {
    var random = Math.floor(Math.random() * picked_type) ; 
    return color[random] ; 
}

// for pick random color 

function random_RGB() {
    
     var r = Math.floor(Math.random()*256) ; 
     var g = Math.floor(Math.random()*256) ; 
     var b = Math.floor(Math.random()*256) ; 
     var rgb = "rgb"+"("+r+","+" "+b+","+" "+b+")" ;  
     return rgb ; 
}

// for fill squares with random rgb

function generate_RGB_array(size) {
    var arr = [] ; 
    for (var i = 0; i < size; i++) {
        arr.push(random_RGB()) ; 
    }
    return arr ; 
}