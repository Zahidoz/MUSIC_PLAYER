let mySong = document.querySelector("#mySong");
let playBtn = document.querySelector("#playBtn");

playBtn.addEventListener('click',()=>{
    if(mySong.paused){
        mySong.play();
        playBtn.src = "./imgs/pause.png";
    }
    else{
        mySong.pause();
        playBtn.src = "./imgs/play.png";
    }
})