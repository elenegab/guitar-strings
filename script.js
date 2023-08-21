

const buttons = document.querySelectorAll('button');


const sounds = document.querySelectorAll('audio');

buttons.forEach((btn, index ) =>{
    btn.addEventListener('click', () => {
        sounds[index].play();
    });
});

          
           

  

    
         
   
   
