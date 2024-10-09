const colors = ["green","blue","red","yellow","pink","blueviolet"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click',function(){
    const randomNum = random();
    document.body.style.backgroundColor = colors[randomNum]; 
    color.textContent=colors[randomNum];
})

function random(){
    return Math.floor(Math.random()*6);
}