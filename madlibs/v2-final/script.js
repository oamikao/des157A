(function(){
    'use strict'
    console.log('reading JS');

    const myForm = document.querySelector('#wordForm');
    const finishedMadlib = document.querySelector('.result');
    const formData = document.querySelectorAll(".inputfield");


    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        processFormData(formData);
    });

    function processFormData(formData){
        const words = [];
        const emptyfields = [];
        let counter = 0;
        for (const eachWord of formData){
            if (eachWord.value){
                words.push(eachWord.value);
                
            }
            else {emptyfields.push(counter)};
            counter++;
        }

        if (emptyfields.length > 0){
        showErrors(formData, emptyfields);
        }

        else {
          makeMadLib (words);
        }
    }

    function showErrors(formData, emptyfields){
        const errorID = formData[emptyfields[0]].id;
        finishedMadlib.className = 'result-shown';
        const errorText = `<p>don't forget to fill in the following field: ${errorID}</p>`;
        finishedMadlib.innerHTML = errorText;
        document.querySelector(`#${errorID}`).focus();
    }

  

    function makeMadLib (words){
        finishedMadlib.className = 'result-shown';
        const finalText = `<h1>A Day at the DeathStar</h1><p>It was a <strong>${words[0]}</strong> day in late winter, a <strong>${words[1]}</strong> freshman was on their way to their classes, feeling <strong>${words[2]}</strong> for the first day. They looked at their schedule only to see that their class #<strong>${words[3]}</strong> was at the Death Star. With such a(n) <strong>${words[4]}</strong> sounding name, this building was sure to be interesting. With a map, compass and <strong>${words[5]}</strong> day(s) supply of food, the freshman <strong>${words[6]}</strong> to the DeathStar, only to be met with a concrete maze. "<strong>${words[7]}!</strong>" cried the <strong>${words[8]} </strong> freshman, worried that this journey might make them <strong>${words[9]}</strong> minutes late. Regardless, the freshman <strong>${words[10]}</strong> ran around, not a single soul in sight. The building seemed empty, the sound of <strong>${words[11]}</strong>s in the distance, as signs guided them deeper into the labyrinth. After what seemed like <strong>${words[12]} </strong> hours of <strong>${words[13]}</strong>, they finally made it to their <strong>${words[14]} </strong>classroom, only to realize class got cancelled that day. Feeling <strong>${words[15]}</strong>, the freshman went back home, hoping never to return again…</p>
        <img src="images/resultimg.png" alt="confused student">`;   
        finishedMadlib.innerHTML = finalText;
        for (const eachField of formData){
            eachField.value = '';
    }
    }


})();