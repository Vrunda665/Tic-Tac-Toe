let turn="X"
let over=false;
let win=false;
let click = 0;
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

const checkWin = () => {
    let boxtext=document.getElementsByClassName('boxtext');
   let wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
   ]
   wins.forEach(e =>{
     if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText)
      && (boxtext[e[0]].innerText !== "")){
        document.querySelector('.info').innerText = boxtext[e[0]].innerText + " is Winner..."
        //boxtext[e[0]].innerText.style.color="green";
        //boxtext[e[1]].innerText.style.color="green";
        //boxtext[e[2]].innerText.style.color="green";
        //document.getElementById(boxtext[e[0]].innerText).style.color="green";
        //document.getElementsByClassName("boxtext").style.color="green";
        over=true;
        //boxes.disabled=true;
      }
   })
   if(over==true){
    document.querySelector('.go').innerText = "Game Over..."
    //alert("Game Over!...");
   }
   return true;
}
document.getElementById("b1").style.background="blue";
document.getElementById("b1").style.color="white";

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
   let boxtext= element.querySelector('.boxtext');
   let btn = document.getElementById("resbtn");
   btn.disabled = true;
   document.getElementById("resbtn").style.background="white";

   element.addEventListener('click' , ()=> {
    if(boxtext.innerText === ''){
        boxtext.innerText = turn;
        document.getElementById("resbtn").style.background="#8dfcab";
        btn.disabled = false;
        turn=changeTurn();
        if(turn == "0")
        {
            document.getElementById("b1").style.background="blue";
            document.getElementById("b1").style.color="white";
            document.getElementById("b2").style.color="black";
            document.getElementById("b2").style.background="white";
        }
        else{
            document.getElementById("b2").style.background="blue";
            document.getElementById("b1").style.color="black";
            document.getElementById("b1").style.background="white";
            document.getElementById("b2").style.color="white";

        }
        click++;
        let win = checkWin();
        if(click == "9"){
                document.querySelector('.draw').innerText = "Draw... "
                alert("Try Again...");
        }
    }
    //else{document.querySelector('.draw').innerText = "Draw... "}
   })
})

resbtn.addEventListener('click' , (e)=>{
    click=0;
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
        element.innerText = ""
        document.getElementById("b1").style.background="white";
        document.getElementById("b2").style.background="white";
        document.getElementById("b1").style.color="black";
        document.getElementById("b2").style.color="black";
        document.querySelector('.info').innerText = ""

        document.querySelector('.go').innerText = "Let's Play Again..."
        over=false
    });
})
