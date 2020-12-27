let video = document.querySelector('.video');
let chargement = document.querySelector('.chargement-bar');
let pauseVideo = document.getElementById('pause');
let playVideo = document.getElementById('play');
let playBackward = document.getElementById('backward');
let playFarward = document.getElementById('forward');
let muteBtn = document.getElementById('mute');
let fullscreen = document.getElementById('full-screen');
let volumeslider = document.getElementById('volumeSlider');
let chargementContainer = document.querySelector('.chargement-container');
let image = document.getElementById('mute')

// play ( Jouer la video) 

function Play() {

   video.play();
 

}

playVideo.onclick = function(){
   Play();
}

// pause ( Pauser la video)

function Pause() {

   video.pause();
 

}

pauseVideo.onclick = function(){
   Pause();
}




// barre de chargement

video.addEventListener('timeupdate', function(){

    let chargementPos = video.currentTime / video.duration;

    chargement.style.width = chargementPos * 100 + '%';

    if(video.ended) {
        btn.className ="play";
    }


})

// avancer le video 
function Forward() {
    
              video.currentTime = video.currentTime +5;
}

playFarward.onclick = function(){
    Forward();
}

// reculer le video 
function Backward() {
    
              video.currentTime = video.currentTime -5;
}

playBackward.onclick = function(){
    Backward();
}



// muter la video


muteBtn.addEventListener('click', function(){

    if(video.muted){
        video.muted = false;
      
        
    } else {
        video.muted = true;
       

    }

})

// mute la video (changement d'icones )


 function changerImg() {
     
     const name = "<img src='mute.png' onclick='ChangerImg1()'>";


         image.innerHTML = name;
     

      
    }

function ChangerImg1() {
     
     const name = "<img src='soundd.png' onclick='changerImg()'>";


         image.innerHTML = name;
     

      
    }

// Volume


volumeslider.addEventListener('change', function(){


    video.volume = volumeslider.value / 100;

})


// la barre de chargement de la video

let rect = chargementContainer.getBoundingClientRect();
console.log(rect);

let largeur = rect.width;

chargementContainer.addEventListener('click', function(e){


    // la valeur de notre click sur x par rapport a notre element

    let x = e.clientX - rect.left;
    
    let widthPercent = ((x*100)/largeur);
    
    let currentTimeTrue = (widthPercent * 160) / 200;
    
    // position en secondes
    video.currentTime = currentTimeTrue;
    console.log(video.currentTime)
    
    // barre de chargement qui va la ou on clique
    chargement.style.width = widthPercent + '%';

})


// Full Screen

function openFullscreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) { 
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) { 
    video.msRequestFullscreen();
  }
}


fullscreen.onclick = function(){
    openFullscreen();
    
}



