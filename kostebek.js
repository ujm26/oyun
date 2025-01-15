let suankiKostebekkonum;
let suankidDusmankonum;
let score=0;
let gameOver = false;

window.onload=function(){
    setGame();
}


function setGame(){
    for(let i =0;i<9;i++){
        let tile=document.createElement("div");
        tile.id=i.toString();
        tile.addEventListener("click",selectTile);
        document.getElementById("board").appendChild(tile);    }
}

setInterval(setKostebek,1000);
setInterval(setDusman,2000);


function getRandomTile(){
    let num = Math.floor(Math.random()*9);
    return num.toString();
}

function setKostebek(){
    if(gameOver){
        return;
    }
if(suankiKostebekkonum){
    suankiKostebekkonum.innerHTML="";
}

    let kostebek=document.createElement("img");
    kostebek.src="./zaza.jpeg"

    let num =getRandomTile();
    if(suankidDusmankonum&&suankidDusmankonum.id==num){
        return;
    }
    suankiKostebekkonum=document.getElementById(num);
    suankiKostebekkonum.appendChild(kostebek);
}

function setDusman(){
if(gameOver){
    return;
}

    if(suankidDusmankonum){
        suankidDusmankonum.innerHTML="";
   }

   let dusman =document.createElement("img");
   dusman.src="./gorsel.png";

   let num = getRandomTile();
   if(suankiKostebekkonum&&suankiKostebekkonum.id==num){
    return;
   }
   suankidDusmankonum=document.getElementById(num);
   suankidDusmankonum.appendChild(dusman);

}


function selectTile(){
    if(gameOver){
        return;
    }
    if(this==suankiKostebekkonum){
        score+=10;
        document.getElementById("score").innerText=score.toString();

       
    }


    else if(this==suankidDusmankonum){
        document.getElementById("score").innerText="Gamer Over: "+score.toString();
        gameOver=true;
    }
}