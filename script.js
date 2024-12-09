let left = document.querySelector('.left')
let right = document.querySelector('.right')
let gunImage = document.querySelector('.gunImage')
let text = document.querySelector('p')
let bathroom = document.querySelector('.bathroom')
let cops = document.querySelector('.cops')
let classroom = document.querySelector('.classroom')
let dead = document.querySelector('.dead')
let celebrate = document.querySelector('.escaped')
bathroom.style.display="none";

let waffles = document.querySelector('.waffles')
waffles.style.display="none";

let eatWaffles = document.querySelector('.eatWaffles')
eatWaffles.style.display="none";

let butter = document.querySelector('.butter')
butter.style.display="none";

dead.style.display="none";

classroom.style.display="none";

celebrate.style.display="none";
//left left left left left left left left left left left left left left left left left left left left left left left left
cops.style.display= "none";
left.addEventListener('click', function() {
    console.log("clicked left");
gunImage.style.display ="none";
right.style.display ="none";
left.style.display ="none";
bathroom.style.display = "block";
eatWaffles.style.display = "block";
text.innerHTML = "you hide in the bathroom stall for a good amount of time but then you start to hear foot steps out side your stall. double click to hold breath or search for waffle to tackle the mysterious person outside the stall";
});
//wall left choice
bathroom.addEventListener('dblclick', function(){
    console.log("dblclicked")
    eatWaffles.style.display="none";
    bathroom.style.display= "none";
    cops.style.display= "block";
    text.innerHTML = "you hold your breath then another person opens up the door. It was the cops, and they escort you out the building";
  
});

//waffles left choice

eatWaffles.addEventListener('mouseenter', function() {
    console.log("hovered over img")
text.innerHTML = "You knocked out the teacher  which alerted the shooter and he killed both of yall. You proud of your self";
bathroom.style.display = "none";
waffles.style.display = "block";
});

right.addEventListener('click', function () {
    gunImage.style.display ="none";
    right.style.display ="none";
    left.style.display ="none";
    bathroom.style.display = "none";
    classroom.style.display="block";
    butter.style.display="block";
text.innerHTML = "You leave the bathroom and you see the teacher signalling you to come into the classroom but you don't know where the shooter is but you see a window. dblclick to go to classroom search for butter to go run toward window";

});

butter.addEventListener('mouseenter', function(){
classroom.style.display="none";
dead.style.display="block";
text.innerHTML = "you run for the window but the window was locked and the shooter killed you. you done played yourself";

});

classroom.addEventListener('dblclick', function (){
butter.style.display="none";
classroom.style.display="none";
celebrate.style.display="block";
text.innerHTML = "you run to the classroom guarded by police and you all escape out the window";
});

