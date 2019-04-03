$(function() {   
    var commercialAudio = new Audio('./demos/commercial.mp3');
    var corporateAudio = new Audio('./demos/corporate-narration.mp3');
    var jamaicanAudio = new Audio('./demos/Jamaican_Caribbean.mp3');
    var characterAudio = new Audio('./demos/character-gaming.mp3');

    let playingCommercial = false;
    let playingCorporate = false;
    let playingJamaican = false;
    let playingCharacter = false;

    
    document.getElementById("commercial-demo").onclick = function() {startCommercial()};
    document.getElementById("corporate-demo").onclick = function() {startCorporate()};
    document.getElementById("jamaican-demo").onclick = function() {startJamaican()};
    document.getElementById("character-demo").onclick = function() {startCharacter()};
    
    function startCommercial() {
        playingCommercial = !playingCommercial;
        
        if (playingCommercial === true) {
            commercialAudio.play();
            document.getElementById("commercial-demo").classList.remove('fa-play-circle')
            document.getElementById("commercial-demo").classList.add('fa-pause-circle')
        } else {
            commercialAudio.pause();
            document.getElementById("commercial-demo").classList.remove('fa-pause-circle')
            document.getElementById("commercial-demo").classList.add('fa-play-circle')
        }
     };

     function startCorporate() {
        playingCorporate = !playingCorporate;
        
        if (playingCorporate === true) {
            corporateAudio.play();
            document.getElementById("corporate-demo").classList.remove('fa-play-circle')
            document.getElementById("corporate-demo").classList.add('fa-pause-circle')
        } else {
            corporateAudio.pause();
            document.getElementById("corporate-demo").classList.remove('fa-pause-circle')
            document.getElementById("corporate-demo").classList.add('fa-play-circle')
        }
     };
     function startJamaican() {
        playingJamaican = !playingJamaican;
        
        if (playingJamaican === true) {
            jamaicanAudio.play();
            document.getElementById("jamaican-demo").classList.remove('fa-play-circle')
            document.getElementById("jamaican-demo").classList.add('fa-pause-circle')
        } else {
            jamaicanAudio.pause();
            document.getElementById("jamaican-demo").classList.remove('fa-pause-circle')
            document.getElementById("jamaican-demo").classList.add('fa-play-circle')
        }
     };
     function startCharacter() {
        playingCharacter = !playingCharacter;
        
        if (playingCharacter === true) {
            characterAudio.play();
            document.getElementById("character-demo").classList.remove('fa-play-circle')
            document.getElementById("character-demo").classList.add('fa-pause-circle')
        } else {
            characterAudio.pause();
            document.getElementById("character-demo").classList.remove('fa-pause-circle')
            document.getElementById("character-demo").classList.add('fa-play-circle')
        }
     };

});