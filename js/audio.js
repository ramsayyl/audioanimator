
$(function() {
    var x = new Audio('./demos/commercial.mp3');
     console.log('play');
     x.play();
     
     function start() {
       x.play();
       console.log('start')  
     };

});