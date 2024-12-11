yesBtn.addEventListener("mouseover",function(){
    const randomX = parseInt(Math.random()*700);
    const randomY = parseInt(Math.random()*700);
    yesBtn.style.setProperty("top",randomY+"%");
    yesBtn.style.setProperty("left",randomX+"%");
    yesBtn.style.setProperty("transform",`translate(-${randomX}%,-${randomY}%)`);
})
noBtn.addEventListener("click",function(){
    alert("¿Te gustaría ir a ver las luces conmigo?")
})