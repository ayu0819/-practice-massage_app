// anime.js利用
 
/* ========================================================
スクロールでトップに戻るボタンを表示
=========================================================*/
// スクロールして何ピクセルでアニメーションさせるか
var px_change = 1;
// スクロールのイベントハンドラを登録
window.addEventListener('scroll', function(e) {
	// 変化するポイントまでスクロールしたらクラスを追加
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if ( scrollTop > px_change ) {
		document.getElementById( "link-step" ).classList.add( "fadein" );
 
	// 変化するポイント以前であればクラスを削除
	} else {
		document.getElementById( "link-step" ).classList.remove( "fadein" );
	}
});
 
/* ========================================================
トップに戻るボタンのスムーズスクロール
=========================================================*/
 
// document.getElementById( "link-top" ).addEventListener('click', function(e) {
// 	anime.remove("html, body");
// 	anime({
// 		targets: "html, body",
// 		scrollTop: 0,
// 		dulation: 600,
// 		easing: 'easeOutCubic',
// 	});
// 	return false;
// });