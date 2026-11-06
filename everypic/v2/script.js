(function(){
    'use strict'
    console.log('reading JS');

    const myImages = ['image1.jpg', 'image2.jpg'];
    let currentImg = 0;
    const slide = document.querySelector('#bgbulletin');

    

    document.querySelector('#next').addEventListener('click', nextPhoto);

    function nextPhoto(){
        currentImg++;
        if (currentImg >1){
            currentImg = 0;
        }
        slide.src = `images/${myImages[currentImg]}`;
    }

    $(function(){
        $('.draggable').draggable();
        $('.droppable').droppable();
    })

   
})();