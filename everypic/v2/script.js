(function(){
    'use strict'
    console.log('reading JS');

    const myImages = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg']; 
    let currentImg = 0;
    const slide = document.querySelector('#bgbulletin');
   /*  const sticker1 = document.querySelector('#stickerone'); */
   const reset = document.querySelector('#reset');
   const allStickers = document.querySelectorAll('#draggable');

   //create position reset by removing position styling on stickers
   //crop all bacgkrund images to be similar sizes 

   

    document.querySelector('#next').addEventListener('click', nextPhoto); //runs through images as slideshow

    function nextPhoto(){ //slideshow functiom
        currentImg++;
        if (currentImg >3){
            currentImg = 0;
            //sets infinite loop  slideshow
        }
        slide.src = `images/${myImages[currentImg]}`;
    }

    $(function(){
        //allows stickers to be drag and droppable
        $('.draggable').draggable();
        $('.droppable').droppable();
    })

/* 
    sticker1.addEventListener('click', function(){
        sticker1.classList.toggle('scale');
  }) */

    reset.addEventListener('click', function(){
        for (let i =0; i < allStickers.length; i++){
            allStickers.style.position = "";
        }

    });

   
})();