(function(){
    'use strict'
    console.log('reading JS');

    const myImages = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg']; 
    let currentImg = 0;
    const slide = document.querySelector('#bgbulletin');


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


   
})();