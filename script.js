const canvas = document.getElementById("canv");
const ctx = canvas.getContext("2d");
let playerState = "idle";
const animationControl = document.getElementById("animations");
animationControl.addEventListener("change",(e)=>{
      playerState = e.target.value;
});
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
const spriteWidth = 573;
const spriteHeight = 523;

let gameFrame = 0;
const playerImage = new Image();
playerImage.src = "https://www.frankslaboratory.co.uk/downloads/shadow_dog.png";

const spriteAnimations = [];
const spriteStates = [
    {
        name : "idle",
        frames : 7
    }
    ,
    {
        name : "jump",
        frames : 7
    },
    {
        name : "fall",
        frames : 7
    },
    {
        name : "run",
        frames : 9
    }
    ,
    {
        name : "dizzy",
        frames : 12
    }
    ,
    {
        name : "sit",
        frames : 5
    }
    ,{
        name:"roll",
        frames: 7
    }
    ,
    {
        name:"bite",
        frames : 7
    }
    ,
    {
        name:"ko",
        frames : 12
    }
    ,
    {
        name:"getHit",
        frames:4
    }
];

spriteStates.forEach((state,index)=>{
    let frames = {
        loc:[],
    };
    for(let j = 0; j < state.frames; ++j){
        let positionX = j*spriteWidth;
        let positionY = index*spriteHeight;
        frames.loc.push({x:positionX,y:positionY});
    }
    spriteAnimations[state.name] = frames;
});

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/7)%spriteAnimations[playerState].loc.length; // this line is tricky
    let frameX = spriteWidth*position;
    let frameY = spriteAnimations[playerState].loc[position].y;
    ctx.drawImage(playerImage,frameX,frameY,spriteWidth,spriteHeight,0,0,spriteWidth,spriteHeight);
    

    gameFrame++;
     
    requestAnimationFrame(animate);
}

animate();