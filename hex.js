const colors = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click',function(){
    let randomNum="#";
    for(let i=0;i<6;i++){
        randomNum+=random();
    }
    document.body.style.backgroundColor = randomNum; 
    color.textContent=randomNum;
})

function random(){
    return colors[Math.floor(Math.random() * colors.length)];
}