

// var lis = document.getElementsByClassName("link");
// document.addEventListener("DOMContentLoaded", function(){
//   document.getElementsByClassName('link').addEventListener('mouseover', function(){
//       nextBtn.classList.add('overBtn');
//   });

// }


const lis = document.getElementsByClassName('link');
document.addEventListener("DOMContentLoaded", function(){
  for(var i = 0; i < lis.length; i++){
    lis[i].addEventListener("mouseover", function (){
      this.classList.add('hover');
    });
    lis[i].addEventListener("mouseout", function (){
      this.classList.remove('hover');
    });
  }
  }, false);
