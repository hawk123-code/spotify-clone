console.log("welcome to spotify");


let songIndex=1;
let audio= new Audio('songs/1.mp3');
let play=document.getElementById('play');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');


let songs= [
    {songName:"1",filePath:"songs/1.mp3",coverPath:"cover/1.jpg"},
    {songName:"2",filePath:"songs/2.mp3",coverPath:"cover/2.jpg"},
    {songName:"3",filePath:"songs/3.mp3",coverPath:"cover/3.jpg"},
    {songName:"4",filePath:"songs/4.mp3",coverPath:"cover/4.jpg"},
    {songName:"5",filePath:"songs/5.mp3",coverPath:"cover/5.jpg"},
    {songName:"6",filePath:"songs/6.mp3",coverPath:"cover/6.jpg"},
    {songName:"7",filePath:"songs/7.mp3",coverPath:"cover/7.jpg"},
    {songName:"8",filePath:"songs/8.mp3",coverPath:"cover/8.jpg"},
    {songName:"9",filePath:"songs/9.mp3",coverPath:"cover/9.jpg"},
]


//handle play pause events
play.addEventListener('click',()=>{
    if(audio.paused || audio.currentTime<=0){
        audio.play();
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');
        gif.style.opacity=1;
    }
    else{
        audio.pause();
        play.classList.remove('fa-pause');
        play.classList.add('fa-play');
        gif.style.opacity=0;
    }
})


//listen to Events
audio.addEventListener('timeupdate',()=>{
    progress=parseInt((audio.currentTime/audio.duration)*100);
    myprogressbar.value=progress;

})
myprogressbar.addEventListener('change',()=>{
    audio.currentTime=parseInt((myprogressbar.value*audio.duration)/100);
})

const makeallplays=()=>{
    Array.from(document.getElementsByClassName('specific')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play')
    
    })
}
Array.from(document.getElementsByClassName('specific')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeallplays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audio.src = `songs/${songIndex}.mp3`;
        audio.currentTime=0;
        audio.play();
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');

    })
})
document.getElementById('icon2').addEventListener('click',()=>{
    if(songIndex>9){
        songIndex=1;
    }
    else{
        songIndex+=1;
    }
    audio.src = `songs/${songIndex}.mp3`;
    audio.currentTime=0;
    audio.play();
    play.classList.remove('fa-play');
    play.classList.add('fa-pause');
})
document.getElementById('icon1').addEventListener('click',()=>{
    if(songIndex<1){
        songIndex=9;
    }
    else{
        songIndex-=1;
    }
    audio.src = `songs/${songIndex}.mp3`;
    audio.currentTime=0;
    audio.play();
    play.classList.remove('fa-play');
    play.classList.add('fa-pause');
});
