// const overBtn = document.getElementById('nextBtn');

// document.addEventListener('DOMContentLoaded', function(){
  
// document.getElementById('nextBtn').addEventListener('mouseover', function(){
// overBtn.add('overBtn');
// });
  
//   document.getElementById('nextBtn').addEventListener('mouseleave', function(){
// overBtn.remove('overBtn');
// });
   
// }, false);

 const overBtn = document.getElementById('nextBtn');
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('nextBtn').addEventListener('mouseover', function(){
        nextBtn.classList.add('overBtn');
    });

    document.getElementById('nextBtn').addEventListener('mouseleave', function(){
        nextBtn.classList.remove('overBtn');
    });
  }, false);
