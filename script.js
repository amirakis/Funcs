"use strict";

// function ForEach(id, txt){
//     let elem = document.getElementById(id);
//     elem.innerHTML = txt;
// }

// ForEach('elem1', 'Привет мир');

let parent = document.getElementById('parent');

// function ForEach(id, callback){
//     let elem = document.getElementById(id);
//     elem.addEventListener('click',()=>{
//         callback(parent);
//     })
// }

// ForEach('btn1', function(parent){
//     parent.style.border = "1px solid black";
//     parent.style.width = "100px";
//     parent.style.height = "100px";
// })

// ForEach('btn2', function(parent){
//     parent.style.background = "red";
// })

// ForEach('btn3', function(parent){
//     parent.style.display = "none";
// })

function ForEach(id, value){
    let elem = document.getElementById(id);
    elem.addEventListener('click', ()=>{
        // parent.setAttribute('style', value);
        // parent.classList.add(value);

        parent.style = value;
    })
}

ForEach('btn1', 'background: red');
ForEach('btn2', 'width: 1000px');
ForEach('btn3', 'height: 1000px;');

// ForEach('btn1', 'red');
// ForEach('btn2', 'width');
// ForEach('btn3', 'height');