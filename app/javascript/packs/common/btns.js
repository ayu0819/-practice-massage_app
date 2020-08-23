// 'use strict'

// const target = document.getElementById('btns');

// target.addEventListener('mouseover', () => {
//     target.classList.add('btns__js');
// }, false);

// target.addEventListener('mouseleave', () => {
//     target.classList.remove('btns__js');
// }, false);



const overBtn = document.getElementById('btns');
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('btns').addEventListener('mouseover', function(){
        btns.classList.add('btns__js');
    });

    document.getElementById('btns').addEventListener('mouseleave', function(){
        btns.classList.remove('btns__js');
    });
  }, false);



  


