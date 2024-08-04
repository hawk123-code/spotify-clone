console.log("welcome to spotify");


let songIndex=1;
let audio= new Audio('1.mp3');
let play=document.getElementById('play');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');


let songs= [
    {songName:"1",filePath:"1.mp3",coverPath:"1.jpg"},
    {songName:"2",filePath:"2.mp3",coverPath:"2.jpg"},
    {songName:"3",filePath:"3.mp3",coverPath:"3.jpg"},
    {songName:"4",filePath:"4.mp3",coverPath:"4.jpg"},
    {songName:"5",filePath:"5.mp3",coverPath:"5.jpg"},
    {songName:"6",filePath:"6.mp3",coverPath:"6.jpg"},
    {songName:"7",filePath:"7.mp3",coverPath:"7.jpg"},
    {songName:"8",filePath:"8.mp3",coverPath:"8.jpg"},
    {songName:"9",filePath:"9.mp3",coverPath:"9.jpg"},
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
        audio.src = `${songIndex}.mp3`;
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
    audio.src = `${songIndex}.mp3`;
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
    audio.src = `${songIndex}.mp3`;
    audio.currentTime=0;
    audio.play();
    play.classList.remove('fa-play');
    play.classList.add('fa-pause');
});
