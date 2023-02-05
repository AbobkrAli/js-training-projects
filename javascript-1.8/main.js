const output =document.querySelector(".output");
const game ={
    ani:null,
    inplay:false,
    x:0,
    speed:5,
    
}

output.addEventListener('click',(e)=>{
    if(!game.inplay){
	window.requestAnimationFrame(mover);
	game.inplay =true;
	console.log(game.inplay);
	
    }
    else{
	window.cancelAnimationFrame(game.ani)
	game.inplay =false;
    }
})
const container = document.querySelector('.container');
let dim = container.getBoundingClientRect();
function mover(){
    game.x += game.speed;
    output.style.left =game.x + 'px';
    if(game.x >=dim.width-50){
	game.speed *=-1;
    }else if(game.x < 0){
	game.speed*=-1;
    }

   game.ani= window.requestAnimationFrame(mover);
}


