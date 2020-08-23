
// const scrollAnimationElm = document.querySelectorAll('.slide-img');
// document.addEventListener("DOMContentLoaded", function(){
// scrollAnimationFunc = function() {
//   for(let i = 0; i < scrollAnimationElm.length; i++) {
//     const triggerMargin = 300;
//     if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
//       scrollAnimationElm[i].classList.add('show');
//     }
//   }
// }

// window.addEventListener('load', scrollAnimationFunc);
// window.addEventListener('scroll', scrollAnimationFunc);
// }, false);


// const scrollAnimationElm = document.querySelectorAll('.slide-img');
// // スクロールのイベントハンドラを登録
// window.addEventListener('scroll', function(e) {
//   document.addEventListener("DOMContentLoaded", function(){
// 	// 変化するポイントまでスクロールしたらクラスを追加
//   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   scrollAnimationFunc = function() {
//   for(let i = 0; i < scrollAnimationElm.length; i++) {
//     const triggerMargin = 300;
//     if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
//       scrollAnimationElm[i].classList.add('show');
//     }
//   }
// }
// });


// window.addEventListener('load', scrollAnimationFunc);
// window.addEventListener('scroll', scrollAnimationFunc);
// }, false);



const img = document.getElementsByClassName('.slide-img');

document.addEventListener("DOMContentLoaded", function(){
  scrollAnimationFunc = function() {
      for(let i = 0; i < scrollAnimationElm.length; i++) {
        const triggerMargin = 300;
        if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
          scrollAnimationElm[i].classList.add('show');
        }
      }
    }
    window.addEventListener('load', scrollAnimationFunc);
    window.addEventListener('scroll', scrollAnimationFunc);
  }, false);

