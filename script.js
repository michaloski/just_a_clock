const hours = document.querySelector('.hour');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const zero = function(x, y){
    if(y < 9){
        x.textContent = `0${y}`
    }else{
        x.textContent = y;
    }
}


setInterval(function(){
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    zero(seconds, second);
    zero(minutes, minute);
    zero(hours,hour)


},1000)
